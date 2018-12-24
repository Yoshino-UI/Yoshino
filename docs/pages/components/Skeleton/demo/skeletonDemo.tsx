import * as React from 'react';
import { Skeleton } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Skeleton loading/>

      <p>自定义样式</p>
      <Skeleton
        loading
        active
        rows={[
          {height: 40, width: '10%'},
          {height: 30, width: '20%'},
          {height: 20, width: '30%'},
        ]}
      />
    </div>
  );
}
