import * as React from 'react';
import { ReactNode, ReactElement } from 'react';
import {render} from 'react-dom';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Transitions from '../Transitions';
import Icon from '../Icon';

export interface IMessage  {
  key?: string | number;
  duration?: number;
  content: ReactNode | string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

export interface IMessageComponent extends IMessage, IBaseComponent {
  visible?: boolean;
  type: 'success' | 'info' | 'warning' | 'error';
}

export interface IMessageConfig {
  top?: number;
  duration?: number;
}

interface IStack {
  key: number | string;
  timeoutId: number;
  ele: ReactElement<IMessageComponent>;
  visible: boolean;
}

let config: IMessageConfig = {
  top: 24,
  duration: 3000,
};

const {Slide} = Transitions;

export class Message extends React.Component<IMessageComponent> {

  render() {
    const {
      className, visible, content,
      type, icon,
    } = this.props;
    const preCls = 'yoshino-message';
    const clsName = classNames(
      preCls, className, `${preCls}-${type}`,
    );
    const defaultIcon = {
      success: 'checkmark-circled',
      info: 'information-circled',
      warning: 'android-alert',
      error: 'close-circled',
    };
    return (
      <Slide
        active={visible!}
        direction='top'
      >
        <div className={clsName}>
          <div className={`${preCls}-content`}>
            {icon ? icon : <Icon type={defaultIcon[type]}/>}
            <span>{content}</span>
          </div>
        </div>
      </Slide>
    );
  }
}

// 是否已将根节点容器挂载到body。
let flag = false;
const container = document.createElement('div');
container.setAttribute('class', 'yoshino-message-container');
container.style.top = config.top + '';

const messageStack: IStack[] = [];

const appendBody = () => {
  document.body.appendChild(container);
};

const updateContainer = () => {
  render((
    <React.Fragment>
      {
        messageStack.map((item) => {
          return React.cloneElement(item.ele, {
            visible: item.visible,
          });
        })
      }
    </React.Fragment>
  ), container);
};

const renderMessages = (
  props: IMessage ,
  type: 'success' | 'info' | 'warning' | 'error',
) => {
  if (!flag) {
    appendBody();
    flag = true;
  }
  const {
    key, duration, onClose,
    ...otherProps
  } = props;
  const alertKey = key || (new Date().getDate() * Math.random());

  const timeoutId = window.setTimeout(() => {
    closeMessage(alertKey);
    if (onClose) {
      onClose();
    }
  }, props.duration || config.duration);

  const message = (
    <Message {...otherProps} type={type}/>
  );
  messageStack.push({
    key: alertKey,
    timeoutId,
    ele: message,
    visible: true,
  });
  updateContainer();
  return alertKey;
};

const closeMessage = (key: string | number) => {
  for (const item of messageStack) {
    if (item.key === key) {
      item.visible = false;
      updateContainer();
      return;
    }
  }
};

const setMessageConfig = (props: IMessageConfig) => {
  config = {...config, ...props};
};

const clearMessageStack = () => {
  messageStack.length = 0;
  updateContainer();
};

export default {
  config: setMessageConfig,
  success: (props: IMessage ) => renderMessages(props, 'success'),
  info: (props: IMessage ) => renderMessages(props, 'info'),
  warn: (props: IMessage ) => renderMessages(props, 'warning'),
  error: (props: IMessage ) => renderMessages(props, 'error'),
  close: closeMessage,
  destroy: clearMessageStack,
};
