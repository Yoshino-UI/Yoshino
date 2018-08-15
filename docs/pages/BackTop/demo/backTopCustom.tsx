import * as React from 'react';
import { BackTop } from '../../../../components/';
const img = require('./fire.png');

export default function() {
  return (
    <BackTop bottom={50} right={100} height={1} onBackTop={() => alert('到顶了！')}>
      <img style={{width: 100, height: 100}} src={img}/>
    </BackTop>
  );
}
