import * as React from 'react';
import { Modal, Button } from '../../../../components/';

export default function () {
  const info = () => {
    Modal.info({
      title: 'info',
      content: 'infoinfoinfoinfoinfoinfoinfoinfoinfoinfo',
      width: 400,
    });
  };

  const success = () => {
    Modal.success({
      title: 'success',
      content: 'successsuccesssuccesssuccesssuccesssuccess',
      width: 400,
    });
  };

  const error = () => {
    Modal.error({
      title: 'error',
      content: 'errorerrorerrorerrorerrorerrorerrorerrorerror',
      width: 400,
    });
  };

  const warning = () => {
    Modal.warning({
      title: 'warning',
      content: 'warningwarningwarningwarningwarningwarning',
      width: 400,
    });
  };
  return (
    <div>
      <Button onClick={info}>info</Button>
      <Button onClick={success}>success</Button>
      <Button onClick={error}>error</Button>
      <Button onClick={warning}>warning</Button>
    </div>
  )
}
