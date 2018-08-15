import * as React from 'react';
import { InputNumber } from '../../../../components/';

export default function() {
  return (
    <div>
      <InputNumber size='small' step={4}/>
      <InputNumber value={-10} step={25} min={-100} max={100}/>
      <InputNumber size='large'/>
    </div>
  );
}
