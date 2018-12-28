import * as React from 'react';
import { Avatar, Icon } from '@yoshino/components/';

export default function() {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar size='large'/>
        <Avatar/>
        <Avatar size='small'/>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar size='large' icon={<Icon type='md-social-reddit'/>} shape='square' style={{backgroundColor: '#f06292', color: '#ffebee'}}/>
        <Avatar shape='square' icon={<Icon type='md-social-reddit'/>}/>
        <Avatar size='small' shape='square' icon={<Icon type='md-social-reddit'/>}/>
      </div>
    </div>
  );
}
