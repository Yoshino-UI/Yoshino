import * as React from 'react';
import { Collapse } from '../../../../components/';

const Panel = Collapse.Panel;
export default function() {
  return (
    <div>
      <Collapse accordion>
        <Panel title='this is title' keyId='1'>1111</Panel>
        <Panel title='this is title' keyId='2'>1111</Panel>
        <Panel title='this is title' keyId='3' disabled>1111</Panel>
      </Collapse>
    </div>
  );
}
