import * as React from 'react';
import { Breadcrumb, Icon } from '@yoshino/components/';

export default function() {
  return (
    <Breadcrumb separator='>'>
      <Breadcrumb.Item><Icon type='md-home'/>首页</Breadcrumb.Item>
      <Breadcrumb.Item><Icon type='md-ionic'/>中心</Breadcrumb.Item>
      <Breadcrumb.Item><Icon type='md-edit'/>编辑</Breadcrumb.Item>
    </Breadcrumb>
  );
}
