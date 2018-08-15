import * as React from 'react';
import { Loading } from '../../../../components/';

export default function() {
  return (
    <div>
      <Loading size='small'/>
      <Loading text/>
      <Loading text='自定义加载文本' size='large'/>
    </div>
  );
}
