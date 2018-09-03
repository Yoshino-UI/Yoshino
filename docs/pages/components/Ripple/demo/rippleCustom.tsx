import * as React from 'react';
import { Ripple, Icon, Button } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <Ripple color='red' opacity={0.6}><Button type='primary'><Icon type='play'/>播放</Button></Ripple>
      <Ripple color='blue'><Button type='primary'><Icon type='pause'/>暂停</Button></Ripple>
      <Ripple color='yellow'><Button type='primary'><Icon type='skip-backward'/>上一首</Button></Ripple>
      <Ripple color='green'><Button type='primary'>下一首<Icon type='skip-forward'/></Button></Ripple>
    </div>
  );
}
