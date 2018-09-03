import * as React from 'react';
import { Collapse } from '@yoshino/components/';

const Panel = Collapse.Panel;
export default function() {
  return (
    <div>
      <Collapse defaultActiveKeys={['3']}>
        <Panel title='this is title' keyId='1'>1111</Panel>
        <Panel title='this is title' keyId='2'>1111</Panel>
        <Panel title='this is title' keyId='3'>1111</Panel>
      </Collapse>
    </div>
  );
}
