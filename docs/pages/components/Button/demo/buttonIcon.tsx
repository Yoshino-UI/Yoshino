import * as React from 'react';
import { Button } from '@yoshino/components/';

export default function() {
  const style = {
    display: 'flex',
  };

  return (
    <div>
      <div
        style={style}
      >
        <Button type='primary' icon='md-play'>播放</Button>
        <Button type='primary' icon='md-pause'>暂停</Button>
        <Button type='primary' icon='md-skip-backward'>上一首</Button>
        <Button type='primary' icon='md-skip-forward' tail>下一首</Button>
      </div>
      <div style={{marginTop: 20}}>
        <Button type='primary' shape='circle' icon='md-home'/>
        <Button shape='circle' icon='md-home'/>
        <Button type='dashed' shape='circle' icon='md-home'/>
        <Button type='danger' shape='circle' icon='md-home'/>
      </div>
    </div>
  );
}
