import * as React from 'react';
import { Loading } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Loading size='small'/>
      <Loading text/>
      <Loading text='自定义加载文本' size='large'/>
      <Loading text='自定义加载文本' size='auto' style={{fontSize: 50}}/>
    </div>
  );
}
