import * as React from 'react';
import { DatePicker } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <DatePicker size='small'/>
      <DatePicker size='default'/>
      <DatePicker size='large'/>
    </div>
  );
}
