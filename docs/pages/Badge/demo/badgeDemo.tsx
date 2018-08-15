import * as React from 'react';
import { Badge } from '../../../../components/';

export default function() {
  return (
    <div>
      <Badge  count={77} style={{backgroundColor: '#448aff'}}/>
      <Badge  count={1000} style={{backgroundColor: '#c5e1a5'}}/>
    </div>
  );
}
