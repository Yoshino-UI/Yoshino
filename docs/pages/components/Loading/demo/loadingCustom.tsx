import * as React from 'react';
import { Loading, Icon } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Loading text='自定义加载文本' size='large' type='a'/>
      <Loading text='自定义加载文本' size='large' type='b'/>
      <Loading text='自定义加载文本' size='large' type='c'/>
      <Loading text='自定义icon颜色' size='large' type='d' color='red'/>
      <Loading text='自定义icon图标' size='large' icon={<Icon type='ios-refresh' style={{width: 100, height: 100}}/>}/>
    </div>
  );
}
