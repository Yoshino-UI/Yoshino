import * as React from 'react';
import { Divider } from '../../../../components/';

export default function() {
  return (
    <div>
      <Divider textAlign='left'>居左</Divider>
      <Divider dashed><div style={{fontSize: '22px'}}>居中</div></Divider>
      <Divider textAlign='right'>居右</Divider>
    </div>
  );
}
