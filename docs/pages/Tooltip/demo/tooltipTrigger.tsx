import * as React from 'react';
import { Tooltip, Button } from '../../../../components/';

export default function () {
  return (
    <div>
      <Tooltip title="受控" placement="top" trigger="click"><Button>点击展示</Button></Tooltip>
      <Tooltip title="受控" placement="top" trigger="focus"><Button>聚焦展示</Button></Tooltip>
    </div>
  )
}
