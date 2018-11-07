import * as React from 'react';
import { Input} from '@yoshino/components/';

export default function() {
  return (
    <div style={{width: 500}}>
      <Input
        size='small'
        header='http://'
        footer='.com'
        disabled
        value={'yoshino'}
      />
    </div>
  );
}
