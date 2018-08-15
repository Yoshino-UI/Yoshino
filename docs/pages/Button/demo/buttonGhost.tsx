import * as React from 'react';
import { Button } from '../../../../components/';

export default function() {
  return (
    <div style={{padding: 10, backgroundColor: '#bec8c8'}}>
      <Button ghost type='primary'>Primary</Button>
      <Button ghost size='large'>Default</Button>
      <Button ghost type='dashed'>Dashed</Button>
      <Button ghost size='small' type='danger'>Danger</Button>
    </div>
  );
}
