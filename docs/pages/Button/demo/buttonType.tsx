import * as React from 'react';
import { Button } from '../../../../components/';

export default function() {
  return (
    <div>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='danger'>Danger</Button>
    </div>
  );
}
