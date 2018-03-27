
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Transition from 'react-transition-group/Transition';
import Icon from '../Icon';

export interface IAlertProps extends IBaseComponent {
  /**
   * 文案类型
   */
  type?: 'success' | 'info' | 'warning' | 'error';
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
  icon: ReactNode;
  /**
   * 标题
   */
  title: ReactNode | string;
  /**
   * closeCallback
   */
  closeCallback: () => void;
}

export interface IAlertState {
  /**
   * 控制Alert显示
   */
  show: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Alert extends Component<IAlertProps, IAlertState> {
  state = {
    show: true,
  };

  closeAlert = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const {
      className, style, showIcon = false,
      type = 'info', closable = false,
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
    return (
      <Transition
        timeout={duration}
        in={show}
        unmountOnExit
        onExited={() => {
          if (this.props.closeCallback) {
            // 延迟100ms是为了避免阻塞transition unmount
            setTimeout(() => {
              this.props.closeCallback();
            }, 100);
          }
        }}
      >
        {
          (state: string) => (
            <div
              className={classNames(className, preCls, alertCls)}
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
