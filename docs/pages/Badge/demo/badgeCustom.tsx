import * as React from 'react';
import { Badge, Avatar, Icon } from '../../../../components/';

export default function() {
  return (
    <div>
      <Badge count={10}><Avatar size='large'/></Badge>
      <Badge count={0} dotted><Icon type='ios-cart-outline' style={{color: 'red', fontSize: 30}}/></Badge>
    </div>
  );
}
