import * as React from 'react';
import { Breadcrumb, Icon } from '../../../../components/';

export default function() {
  return (
    <Breadcrumb separator='>'>
      <Breadcrumb.Item><Icon type='home'/>首页</Breadcrumb.Item>
      <Breadcrumb.Item><Icon type='ionic'/>中心</Breadcrumb.Item>
      <Breadcrumb.Item><Icon type='edit'/>编辑</Breadcrumb.Item>
    </Breadcrumb>
  );
}
