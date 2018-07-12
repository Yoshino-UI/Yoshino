
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Button from '../Button';
import Icon from '../Icon';
import {render} from 'react-dom';
import Mask from '../template/mask';

export interface IModalProps extends IBaseComponent {
  zIndex?: number;
  width?: number;
  onOk?: () => boolean;
  onCancel?: () => void;
  onClose?: () => void;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  showCancel?: boolean;
  closeText?: React.ReactNode;
  showClose?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  bodyCotent?: React.ReactNode;
  icon?: React.ReactNode;
  showMask?: boolean;
  maskClosable?: boolean;
  maskClick?: () => void;
  maskStyle?: React.CSSProperties;
}

export interface IModalComponentProps extends IModalProps {
  type: 'success' | 'error' | 'warning' | 'confirm' | 'info';
}

export interface IModalComponentState {
  show: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
class Modal extends Component<IModalComponentProps, IModalComponentState> {
  static defaultProps = {
    zIndex: 1000,
    width: 256,
    showCancel: true,
    showClose: true,
    showMask: true,
    maskClosable: true,
  };

  state = {
    show: true,
  };

  onCancel = () => {
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }

    this.onClose();
  }

  onOk = () => {
    const {onOk} = this.props;
    if (onOk) {
      if (onOk()) {
        this.onClose();
      }
    } else {
      this.onClose();
    }
  }

  onClose = () => {
    const {onClose} = this.props;
    if (onClose) {
      onClose();
    }
    this.setState({
      show: false,
    });
  }

  render() {
    const {
      className, style, title, bodyCotent,
      content, icon, width, zIndex, showCancel,
      okText, cancelText, type, closeText, showClose,
      ...otherProps
    } = this.props;
    const preCls = 'yoshino-modal';
    const clsName = classNames(
      preCls, className,
    );
    const iconType = {
      success: 'checkmark-circled',
      info: 'information-circled',
      warning: 'android-alert',
      error: 'close-circled',
    };
    const hasIcon = type !== 'confirm' || icon;
    return this.state.show ? (
      <div
        className={clsName}
        style={{width, zIndex, ...style}}
        {...otherProps}
      >
        {showClose ? <div className={`${preCls}-close`} onClick={this.onClose}>{closeText || 'X'}</div> : null}
        <div className={`${preCls}-body`}>
          {
            bodyCotent ? bodyCotent : (
              <React.Fragment>
              {
                type !== 'confirm' || icon ? (
                  <div className={`${preCls}-icon ${preCls}-icon-${type}`}>
                    {icon ? icon : type !== 'confirm' ? <Icon type={iconType[type]}/> : null}
                  </div>
                ) : null
              }
              <div className={`${preCls}-word-container ${!hasIcon ? `${preCls}-word-container-no-icon` : ''}`}>
                <div className={`${preCls}-title`}>{title}</div>
                <div className={`${preCls}-content`}>{content}</div>
              </div>
              </React.Fragment>
            )
          }
        </div>
        <div className={`${preCls}-footer`}>
          {
            type === 'confirm' && showCancel ? (
              <div className={`${preCls}-cancel`} onClick={this.onCancel}>
                {
                  typeof cancelText === 'string' || !cancelText ? (
                    <Button>{cancelText || '取消'}</Button>
                  ) : cancelText
                }
              </div>
            ) : null
          }
          <div className={`${preCls}-ok`} onClick={this.onOk}>
            {
              typeof okText === 'string' || !okText ? (
                <Button type='primary'>{okText ? okText : type !== 'confirm' ? '知道了' : '确定'}</Button>
              ) : okText
            }
          </div>
        </div>
      </div>
    ) : null;
  }
}

const renderModal = (props: IModalComponentProps) => {
  const {
    zIndex, showMask = true, maskClosable = true,
    maskStyle, maskClick
  } = props;
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.left = '0';
  div.style.top = '0';
  div.style.bottom = '0';
  div.style.right = '0';
  div.style.zIndex = zIndex + '';

  document.body.appendChild(div);
  const modal = (
    <React.Fragment>
      {
        showMask ? (
        <Mask
          maskStyle={maskStyle}
          onClick={() => {
            if (maskClosable) {
              closeModal(div);
            }
            if (maskClick) {
              maskClick();
            }
          }}
        />
        ) : null
      }
      <Modal
        {...props}
        onClose={() => {
          const {onClose} = props;
          if (onClose) {
            onClose();
          }
          closeModal(div);
        }}
      />
    </React.Fragment>
  );
  render(modal, div);
  return div;
};

const closeModal = (modal: HTMLElement) => {
  try {
    document.body.removeChild(modal);
  } catch (error) {
    return false;
  }
  return true;
};

export default {
  confirm: (props: IModalProps) => renderModal({type: 'confirm', ...props}),
  info: (props: IModalProps) => renderModal({type: 'info', ...props}),
  success: (props: IModalProps) => renderModal({type: 'success', ...props}),
  error: (props: IModalProps) => renderModal({type: 'error', ...props}),
  warning: (props: IModalProps) => renderModal({type: 'warning', ...props}),
  close: closeModal,
};
