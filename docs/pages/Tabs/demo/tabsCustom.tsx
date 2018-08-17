import * as React from 'react';
import { Tabs } from '../../../../components/';

const { TabPane } = Tabs;

export default function() {
  return (
    <div>
      <Tabs defaultActivetKey='tab1' type='card'>
        <TabPane name='tab1'>Content 11111</TabPane>
        <TabPane name='tab2' disabled>Content 22222</TabPane>
        <TabPane name='tab3'>Content 33333</TabPane>
        <TabPane name='tab4'>Content 44444</TabPane>
        <TabPane name='tab5'>Content 55555</TabPane>
      </Tabs>
    </div>
  );
}
