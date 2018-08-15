import * as React from 'react';
import { Alert, Icon } from '../../../../components/';

export default function() {
  return (
    <div>
      <Alert
        type='success'
        showIcon
        title='成功提示文案'
        closable
        onClose={() => alert('关闭了')}
      >
        <span>成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案</span>
      </Alert>
      <Alert
        type='info'
        icon={<Icon type='paper-airplane'/>}
        showIcon
        closable
        title='自定义文案'
      />
      <Alert type='info' showIcon title='消息提示文案'/>
      <Alert type='warning' showIcon title='警告提示文案'/>
      <Alert type='error' showIcon title='错误提示文案'/>
    </div>
  );
}
