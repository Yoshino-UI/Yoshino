import * as React from 'react';
import { Alert } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Alert type='success' title='成功提示文案'/>
      <Alert type='info' title='消息提示文案'/>
      <Alert type='warning' title='警告提示文案'/>
      <Alert type='error' title='错误提示文案'/>
    </div>
  );
}
