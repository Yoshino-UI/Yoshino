import * as React from 'react';
import { Button } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Button disabled type='primary'>Primary</Button>
      <Button size='large'>Default</Button>
      <Button disabled type='dashed'>Dashed</Button>
      <Button size='small' type='danger'>Danger</Button>
    </div>
  );
}
