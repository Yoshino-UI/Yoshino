import * as React from 'react';
import Input  from '../../../../components/Input';
import Icon from '../../../../components/Icon';

export default function () {
  return (
    <div style={{width: 500}}>
      <Input size="small" header="http://" footer=".com"/><br/>
      <Input/><br/>
      <Input size="large" header="http://" footer={<Icon type="close" style={{fontSize: '20px', width: '50px'}}/>}/><br/>
    </div>
  )
}
