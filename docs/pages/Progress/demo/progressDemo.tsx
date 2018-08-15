import * as React from 'react';
import { Progress } from '../../../../components/';

export default function() {
  return (
    <div>
      <div>
        <Progress percent={10} style={{margin: '10px 0'}}/>
        <Progress percent={80} bgColor='#ccc' barColor='red'/>
      </div>
    </div>
  );
}
