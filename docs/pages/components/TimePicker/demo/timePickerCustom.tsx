import * as React from 'react';
import { TimePicker } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <TimePicker value='11:22:33' size='small'/>
      <TimePicker size='default'/>
      <TimePicker size='large'/>
    </div>
  );
}
