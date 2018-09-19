
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Transitions from '../Transitions';
import Icon from '../Icon';

export interface IAlertProps extends IBaseComponent {
  /**
   * 文案类型
   */
  type: 'success' | 'info' | 'warning' | 'error' | 'normal';
  /**
   * 是否显示关闭按钮
   */
  closable?: boolean;
  /**
   * 是否显示图标
   */
  showIcon?: boolean;
  /**
   * 自定义图标
   */
  icon?: ReactNode;
  /**
   * 标题
   */
  title: ReactNode | string;
  /**
   * onClose
   */
  onClose?: () => void;
}

export interface IAlertState {
  /**
   * 控制Alert显示
   */
  show: boolean;
}

const {Expand} = Transitions;

/**
 * **警告提示**-警告提示，展现需要关注的信息。
 */
export class Alert extends Component<IAlertProps, IAlertState> {
  static duration = 200;
  duration = 200;

  state = {
    show: true,
  };

  static defaultProps = {
    showIcon: false,
    closable: false,
  };

  closeAlert = () => {
    this.setState({
      show: false,
    });

    setTimeout(() => {
      const {onClose} = this.props;
      if (onClose) {
        onClose();
      }
    }, this.duration);
  }

  render() {
    const {
      className, style, showIcon,
      type, closable,
      icon, title, ...otherProps
    } = this.props;
    const {show} = this.state;
    const preCls = 'yoshino-alert';
    const defaultIcon = {
      success: 'checkmark-circle',
      info: 'information-circle',
      warning: 'alert',
      error: 'close-circle',
      normal: '',
    };
    const alertCls = {
      [`${preCls}-${type}`]: true,
      [`${preCls}-no-icon`]: !showIcon,
      [`${preCls}-with-description`]: !!this.props.children,
    };
    const clsName = classNames(
      preCls, alertCls, className,
    );

    const desClsName = classNames(
      `${preCls}-title`,
      {[`${preCls}-has-icon-description`]: showIcon && !!this.props.children}
    );
    return (
      <Expand
        timeout={this.duration}
        active={show}
      >
            <div
              className={clsName}
              style={{
                ...style,
              }}
              {...otherProps}
            >
            {
              showIcon &&  (icon || type !== 'normal') ? (
                <span className={`${preCls}-icon`}>
                  {icon ? icon : (<Icon type={defaultIcon[type]}/>)}
                </span>
              ) : null
            }
            <div className={desClsName}>
              <p className={`${preCls}-message`}>{title}</p>
              {
                this.props.children ? (
                  <p className={`${preCls}-description`}>{this.props.children}</p>
                ) : null
              }
            </div>
            {
              closable ? (
                <span className={`${preCls}-close`} onClick={this.closeAlert}>
                  <Icon type='close'/>
                </span>
              ) : null
            }
            </div>
      </Expand>
    );
  }
}

export default Alert;
