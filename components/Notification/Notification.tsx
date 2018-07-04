import Alert, {IAlertProps} from '../Alert';
import * as React from 'react';
import {ReactNode} from 'react';
import {render} from 'react-dom';
// import { CSSProperties } from 'react';

export interface INotification  {
  key?: string | number;
  duration?: number;
  icon?: ReactNode;
  title: ReactNode | string;
  message?: ReactNode | string;
  onClose?: () => void;
}

export interface INotificationConfig {
  vertical?: number;
  horizontal?: number;
  duration?: number;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

interface IStack {
  key: number | string;
  timeoutId: number;
  element: JSX.Element;
  ref?: Alert;
}

let config = {
  vertical: 24,
  horizontal: 24,
  duration: 5000,
  placement: 'topRight',
};

// 是否已将根节点容器挂载到body。
let flag = false;
const container = document.createElement('div');
container.setAttribute('class', 'notification-container');
container.style.position = 'fixed';
container.style.zIndex = '999';

const notificationStack: IStack[] = [];

const resetPlacement = () => {
  container.style.left = null;
  container.style.right = null;
  container.style.top = null;
  container.style.bottom = null;
};

const setPlacement = () => {
  switch (config.placement) {
    case 'topLeft':
      container.style.top = `${config.vertical}px`;
      container.style.left = `${config.horizontal}px`;
      break;
    case 'topRight':
      container.style.top = `${config.vertical}px`;
      container.style.right = `${config.horizontal}px`;
      break;
    case 'bottomLeft':
      container.style.bottom = `${config.vertical}px`;
      container.style.left = `${config.horizontal}px`;
      break;
    case 'bottomRight':
      container.style.bottom = `${config.vertical}px`;
      container.style.right = `${config.horizontal}px`;
      break;
    default:
      break;
  }
};

const appendBody = () => {
  setPlacement();
  document.body.appendChild(container);
};

const insertContainer = () => {
  render((
    <React.Fragment>
      {
        notificationStack.map((item) => React.cloneElement(item.element, {
          ref: (v: Alert) => {
            if (v) {
              item.ref = v;
            }
          },
        }))
      }
    </React.Fragment>
  ), container);
};

const renderNotifications = (
  props: INotification ,
  type: 'success' | 'info' | 'warning' | 'error' | 'normal',
  showIcon: boolean = true,
) => {
  if (!flag) {
    appendBody();
    flag = true;
  }
  const {
    key, duration, message, icon,
    ...otherProps
  } = props;
  const alertKey = key || (new Date().getDate() * Math.random());

  const timeoutId = window.setTimeout(() => {
    closeNotification(alertKey);
  }, props.duration || config.duration);
  const alertProps: IAlertProps = {
    showIcon: showIcon || !!icon,
    icon,
    ...otherProps,
    type,
    closable: true,
  };
  const alert = (
    <Alert {...alertProps}>{message || null}</Alert>
  );
  notificationStack.push({
    key: alertKey,
    timeoutId,
    element: alert,
  });

  insertContainer();
  return alertKey;
};

const closeNotification = (key: string | number) => {
  for (let index = 0; index < notificationStack.length; index++) {
    const item = notificationStack[index];
    if (item.key === key) {
      const ref = notificationStack[index].ref as Alert;
      ref.closeAlert();
      notificationStack.splice(index, 1);
      break;
    }
  }
};

const setNotificationConfig = (props: INotificationConfig) => {
  config = {...config, ...props};
  if (props.placement) {
    resetPlacement();
    setPlacement();
  }
};

const clearNotificationStack = () => {
  notificationStack.length = 0;
  insertContainer();
};

export default {
  config: setNotificationConfig,
  open: (props: INotification ) => renderNotifications(props, 'normal', false),
  success: (props: INotification ) => renderNotifications(props, 'success'),
  info: (props: INotification ) => renderNotifications(props, 'info'),
  warn: (props: INotification ) => renderNotifications(props, 'warning'),
  error: (props: INotification ) => renderNotifications(props, 'error'),
  close: closeNotification,
  destroy: clearNotificationStack,
};
