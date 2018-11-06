import * as React from 'react';
import { AutoComplete } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <AutoComplete dataSource={['1', 'asdad', '777', '121', 'sda', '测试']}/>
    </div>
  );
}
