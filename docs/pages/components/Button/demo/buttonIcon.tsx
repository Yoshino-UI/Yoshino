import * as React from 'react';
import { Button } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <div>
        <Button type='primary' icon='play'>播放</Button>
        <Button type='primary' icon='pause'>暂停</Button>
        <Button type='primary' icon='skip-backward'>上一首</Button>
        <Button type='primary' icon='skip-forward' tail>下一首</Button>
      </div>
      <div style={{marginTop: 20}}>
        <Button type='primary' shape='circle' icon='arrow-up-a'/>
        <Button shape='circle' icon='arrow-up-a'/>
        <Button type='dashed' shape='circle' icon='arrow-up-a'/>
        <Button type='danger' shape='circle' icon='arrow-up-a'/>
      </div>
    </div>
  );
}
