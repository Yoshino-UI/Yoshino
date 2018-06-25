
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Transition from 'react-transition-group/Transition';
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

/**
 * **警告提示**-警告提示，展现需要关注的信息。
 */
export class Alert extends Component<IAlertProps, IAlertState> {
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
  }

  render() {
    const {
      className, style, showIcon,
      type, closable,
      icon, title, ...otherProps,
    } = this.props;
    const {show} = this.state;
    const preCls = 'yoshino-alert';
    const transitionStyles: {
      [index: string]: object;
    } = {
      exiting: { transform: 'scaleY(0.3)'},
      exited: { display: 'none' },
    };
    const duration = 200;
    const defaultIcon = {
      success: 'checkmark-circled',
      info: 'information-circled',
      warning: 'android-alert',
      error: 'close-circled',
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
    return (
      <Transition
        timeout={duration}
        in={show}
        unmountOnExit
        onExited={() => {
          if (this.props.onClose) {
            this.props.onClose();
          }
        }}
      >
        {
          (state: string) => (
            <div
              className={clsName}
              style={{
                ...style,
                ...transitionStyles[state],
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
            <div className={showIcon && this.props.children ? `${preCls}-has-icon-description` : ''}>
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
          )
        }
      </Transition>
    );
  }
}

export default Alert;
