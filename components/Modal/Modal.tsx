
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Button from '../Button';
import Icon from '../Icon';
import { render, unmountComponentAtNode } from 'react-dom';
import Dialog from '../utils/dialog';

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
  bodyContent?: React.ReactNode;
  icon?: React.ReactNode;
  showMask?: boolean;
  maskClosable?: boolean;
  maskClick?: () => void;
  maskStyle?: React.CSSProperties;
}

export interface IModalComponentProps extends IModalProps {
  type?: 'success' | 'error' | 'warning' | 'confirm' | 'info';
  visible?: boolean;
}

export interface IModalComponentState {
  visible: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
class Modal extends Component<IModalComponentProps, IModalComponentState> {
  static confirm: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static info: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static success: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static error: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static warning: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static warn: (props: IModalProps) => {div: HTMLDivElement, modal: JSX.Element};
  static close: (obj: {div: HTMLDivElement, modal: JSX.Element}) => boolean;

  static defaultProps = {
    zIndex: 1000,
    width: 256,
    showCancel: true,
    showClose: true,
    showMask: true,
    maskClosable: true,
    type: 'confirm',
  };

  state = {
    visible: true,
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
      visible: false,
    });
  }

  getVisible = () => {
    const {visible} = this.props;
    return visible !== undefined ? visible : this.state.visible;
  }

  render() {
    const {
      className, style, title, bodyContent,
      content, icon, width, zIndex, showCancel,
      okText, cancelText, type = 'confirm', closeText, showClose,
      maskStyle, maskClosable, showMask, maskClick, onOk,
      onCancel, children,
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
    const visible = this.getVisible();
    const conetnt = children || bodyContent;

    return visible ? (
      <Dialog
        visible={visible}
        showMask={showMask}
        maskStyle={maskStyle}
        maskClick={() => {
          if (maskClosable) {
            this.onClose();
          }
          if (maskClick) {
            maskClick();
          }
        }}
      >
        <div
          className={clsName}
          style={{width, zIndex, ...style}}
          {...otherProps}
        >
          {showClose ? <div className={`${preCls}-close`} onClick={this.onClose}>{closeText || 'X'}</div> : null}
          <div className={`${preCls}-body`}>
            {
              conetnt ? conetnt : (
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
      </Dialog>
    ) : null;
  }
}

const renderModal = (props: IModalComponentProps) => {
  const div = document.createElement('div');
  const {maskClosable = true, maskClick} = props;
  document.body.appendChild(div);
  const modal = (
    <Modal
      {...props}
      onClose={() => {
        const {onClose} = props;
        if (onClose) {
          onClose();
        }
        closeModal({div, modal});
      }}
      maskClick={() => {
        if (maskClosable) {
          closeModal({div, modal});
        }
        if (maskClick) {
          maskClick();
        }
      }}
    />
  );
  render(modal, div);
  return {div, modal};
};

const closeModal = (obj: {div: HTMLDivElement, modal: JSX.Element}) => {
  try {
    unmountComponentAtNode(obj.div);
    document.body.removeChild(obj.div);
  } catch (error) {
    return false;
  }
  return true;
};

Modal.confirm = (props: IModalProps) => renderModal({type: 'confirm', ...props});
Modal.info = (props: IModalProps) => renderModal({type: 'info', ...props});
Modal.success = (props: IModalProps) => renderModal({type: 'success', ...props});
Modal.error = (props: IModalProps) => renderModal({type: 'error', ...props});
Modal.warning = Modal.warn = (props: IModalProps) => renderModal({type: 'warning', ...props});
Modal.close = closeModal;

export default Modal;
