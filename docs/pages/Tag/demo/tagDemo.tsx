import * as React from 'react';
import { Tag } from '../../../../components/';

export default function () {
  return (
    <div>
      <div>
        <Tag>可乐</Tag>
        <Tag closeable onClose={() => console.log('关闭了')}>雪碧</Tag>
      </div>
      <div>
        <Tag color="#108ee9" closeable>冰红茶</Tag>
      </div>
    </div>
  )
}
