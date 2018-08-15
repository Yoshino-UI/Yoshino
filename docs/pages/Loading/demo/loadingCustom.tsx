import * as React from 'react';
import { Loading } from '../../../../components/';

export default function() {
  return (
    <div>
      <Loading text='自定义加载文本' size='large' type='b'/>
      <Loading text='自定义加载文本' size='large' type='c'/>
      <Loading text='自定义加载文本' size='large' type='d'/>
    </div>
  );
}
