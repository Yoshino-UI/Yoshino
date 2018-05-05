import * as React from 'react';
import { Backtop } from '../../../../components/';
const img = require('./fire.png');
export default function () {
  return (
    <Backtop bottom={50} right={20} height={1} onBackTop={() => alert('到顶了！')}>
      <img style={{width: 100, height: 100}} src={img}/>
    </Backtop>
  )
}
