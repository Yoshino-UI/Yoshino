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
        <Button type='primary' icon='play'>播放</Button>
        <Button type='primary' icon='pause'>暂停</Button>
        <Button type='primary' icon='skip-backward'>上一首</Button>
        <Button type='primary' icon='skip-forward' tail>下一首</Button>
      </div>
      <div style={{marginTop: 20}}>
        <Button type='primary' shape='circle' icon='home'/>
        <Button shape='circle' icon='home'/>
        <Button type='dashed' shape='circle' icon='home'/>
        <Button type='danger' shape='circle' icon='home'/>
      </div>
    </div>
  );
}
