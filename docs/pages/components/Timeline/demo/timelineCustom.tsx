import * as React from 'react';
import { Timeline, Icon } from '@yoshino/components/';

export default function() {
  return (
    <Timeline lineColor='black' lineType='dashed'>
      <Timeline.Item iconColor='red' iconType='dotted'>
        <span>发布1.0版本</span>
      </Timeline.Item>
      <Timeline.Item lineType='solid'>
        <span>发布1.1版本</span>
      </Timeline.Item>
      <Timeline.Item icon={<Icon type='logo-twitter'/>}>
        <span>自定义图标</span>
      </Timeline.Item>
      <Timeline.Item lineColor='#3476db'>
        <span>发布2.0版本</span>
      </Timeline.Item>
      <Timeline.Item iconColor='blue'>
        <span>发布2.1版本</span>
      </Timeline.Item>
      <Timeline.Item iconLine='5'>
        <span>发布2.2版本</span>
      </Timeline.Item>
    </Timeline>
  );
}
