import * as React from 'react';
import { Modal, Icon, Button } from '@yoshino/components/';

export default function() {
  const confirm = () => {
    Modal.confirm({
      icon: <Icon type='md-checkmark'/>,
      title: '这是一个标题！！！',
      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',
      width: 400,
      showClose: true,
    });
  };

  const autoClose = () => {
    const ref = Modal.confirm({
      title: '这是一个标题！！！',
      content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',
      width: 400,
      showCancel: false,
    });
    setTimeout(() => {
      Modal.close(ref);
    }, 2000);
  };

  return (
    <div>
      <Button onClick={confirm}>confirm</Button>
      <Button onClick={autoClose}>打开一个2秒后自动关闭的对话框</Button>
    </div>
  );
}
