import * as React from 'react';
import { Notification as notification, Button, Icon } from '../../../../components/';

export default function() {
  const open = () => {
    notification.open({
      title: 'open',
      message: '一般的通知',
    });
  };

  const openIcon = () => {
    notification.open({
      title: '带有图标的open',
      message: '你的项目收到一个新的通知',
      icon: <Icon type='social-github'/>,
    });
  };

  const success = () => {
    notification.success({
      title: 'success',
      message: 'success success success!',
    });
  };

  const info = () => {
    notification.info({
      title: 'info',
      message: 'info info info!',
    });
  };

  const warn = () => {
    notification.warn({
      title: 'warn',
      message: 'warn warn warn!',
    });
  };

  const error = () => {
    notification.error({
      title: 'error',
      message: 'error error error!',
    });
  };

  const destroy = () => {
    notification.destroy();
  };

  return (
    <div>
      <Button onClick={open}>open</Button>
      <Button onClick={openIcon}>自定义icon</Button>
      <Button onClick={success}>success</Button>
      <Button onClick={info}>info</Button>
      <Button onClick={warn}>warn</Button>
      <Button onClick={error}>error</Button>
      <Button onClick={destroy}>点我清空所有notification</Button>
    </div>
  );
}
