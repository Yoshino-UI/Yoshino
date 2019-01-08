import * as React from 'react';
import { Input, Icon} from '@yoshino/components/';

export default function() {
  return (
    <div style={{width: 500}}>
      <Input size='small' header='http://' footer='.com'/><br/>
      <Input/><br/>
      <Input size='large' header='http://' footer={<Icon type='md-close' style={{fontSize: '20px', width: '50px'}}/>}/><br/>
    </div>
  );
}
