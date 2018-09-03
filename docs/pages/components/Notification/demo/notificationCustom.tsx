import * as React from 'react';
import { Notification as notification, Button} from '@yoshino/components/';

export default function() {
  const open = () => {
    notification.open({
      title: 'open',
      message: '一般的通知, duration时间长，可以通过close关闭',
      duration: 99999999,
      key: 111,
    });
  };

  const placement = () => {
    notification.config({
      placement: 'topLeft',
    });
  };

  const close = () => {
    notification.close(111);
  };

  return (
    <div>
      <Button onClick={open}>打开一个带有key的通知</Button>
      <Button onClick={close}>关闭</Button>
      <Button onClick={placement}>修改placement</Button>
    </div>
  );
}
