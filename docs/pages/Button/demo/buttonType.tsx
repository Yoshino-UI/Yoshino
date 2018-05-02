import * as React from 'react';
import Button  from '../../../../components/Button';

export default function () {
  return (
    <div>
      <Button type="primary" onClick={() => console.log(1)}>Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="primary" shape="circle" icon="arrow-up-a"/>
    </div>
  )
}