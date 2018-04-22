
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
  type: 'success' | 'info' | 'warning' | 'error';
  /**
   * 是否显示关闭按钮
   */
  closable: boolean;
  /**
   * 是否显示图标
   */
  showIcon: boolean;
  /**
   * 自定义图标
   */
  icon: ReactNode;
  /**
   * 标题
   */
  title: ReactNode | string;
  /**
   * onClose
   */
  onClose: () => void;
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
    type: 'info',
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
      exiting: { opacity: 0},
      exited: { opacity: 0 },
    };
    const duration = 500;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 1,
    };
    const defaultIcon = {
      success: 'checkmark-circled',
      info: 'information-circled',
      warning: 'android-alert',
      error: 'close-circled',
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
            // 延迟100ms是为了避免阻塞transition unmount
            setTimeout(() => {
              this.props.onClose();
            }, 100);
          }
        }}
      >
        {
          (state: string) => (
            <div
              className={clsName}
              style={{
                ...style,
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              {...otherProps}
            >
            <span style={{display: showIcon ? 'inline-block' : 'none'}} className={`${preCls}-icon`}>
              {icon ? icon : (<Icon type={defaultIcon[type]}/>)}
            </span>
            <p className={`${preCls}-message`}>{title}</p>
            {
              this.props.children ? (
                <p className={`${preCls}-description`}>{this.props.children}</p>
              ) : null
            }
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
