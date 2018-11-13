import * as React from 'react';
import { ReactNode } from 'react';
import {render} from 'react-dom';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Transitions from '../Transitions';
import Icon from '../Icon';

export type TType = 'success' | 'info' | 'warning' | 'error';
export interface IMessage  {
  key?: string | number;
  duration?: number;
  content: ReactNode | string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

export interface IMessageComponent extends IMessage, IBaseComponent {
  visible?: boolean;
  type: TType;
}

export interface IMessageConfig {
  top?: number;
  duration?: number;
}

interface IStack {
  key: number | string;
  timeoutId: number;
  visible: boolean;
  ele: ReactNode;
}

let config: IMessageConfig = {
  top: 24,
  duration: 3000,
};

const {Slide} = Transitions;

export class Message extends React.Component<IMessageComponent> {

  render() {
    const {
      className, visible = true, content,
      type, icon,
    } = this.props;
    const preCls = 'yoshino-message';
    const clsName = classNames(
      preCls, className, `${preCls}-${type}`,
    );
    const defaultIcon = {
      success: 'checkmark-circle',
      info: 'information-circle',
      warning: 'alert',
      error: 'close-circle',
    };
    return (
      <Slide
        active={visible}
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
          const child = React.Children.only(item.ele);
          return React.cloneElement(child, {
            visible: item.visible,
            key: item.key,
          });
        })
      }
    </React.Fragment>
  ), container);
  // 清除visible为false的
  const tempStack = messageStack.filter((item) => item.visible);
  messageStack.length = 0;
  messageStack.push(...tempStack);
};

const renderMessages = (
  props: IMessage ,
  type: TType,
) => {
  if (!flag) {
    appendBody();
    flag = true;
  }
  const {
    key, duration, onClose,
    ...otherProps
  } = props;
  const messageKey = key || (new Date().getDate() * Math.random());

  const timeoutId = window.setTimeout(() => {
    closeMessage(messageKey);
    if (onClose) {
      onClose();
    }
  }, props.duration || config.duration);

  const message = (
    <Message {...otherProps} type={type} />
  );
  messageStack.push({
    key: messageKey,
    timeoutId,
    visible: true,
    ele: message,
  });
  updateContainer();
  return messageKey;
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
  success: (props: IMessage | string) => {
    const param = typeof props === 'string' ? {content: props} : props;
    renderMessages(param, 'success');
  },
  info: (props: IMessage | string) => {
    const param = typeof props === 'string' ? {content: props} : props;
    renderMessages(param, 'info');
  },
  warn: (props: IMessage | string) => {
    const param = typeof props === 'string' ? {content: props} : props;
    renderMessages(param, 'warning');
  },
  error: (props: IMessage | string) => {
    const param = typeof props === 'string' ? {content: props} : props;
    renderMessages(param, 'error');
  },
  close: closeMessage,
  destroy: clearMessageStack,
};
