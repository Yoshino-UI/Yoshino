import * as React from 'react';
import { Message as message, Button } from '../../../../components/';

export default function() {

  const success = () => {
    message.success({
      content: 'success success success!',
    });
  };

  const info = () => {
    message.info({
      content: 'info info info!',
    });
  };

  const warn = () => {
    message.warn({
      content: 'warn warn warn!',
    });
  };

  const error = () => {
    message.error({
      content: 'error error error!',
    });
  };

  const destroy = () => {
    message.destroy();
  };

  return (
    <div>
      <Button onClick={success}>success</Button>
      <Button onClick={info}>info</Button>
      <Button onClick={warn}>warn</Button>
      <Button onClick={error}>error</Button>
      <Button onClick={destroy}>点我清空所有message</Button>
    </div>
  );
}
