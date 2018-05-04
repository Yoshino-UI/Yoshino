import * as React from 'react';
import { Avatar } from '../../../../components/';

export default function () {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar size="large" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
        <Avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
        <Avatar size="small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar shape="square" size="large" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
        <Avatar shape="square" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
        <Avatar shape="square" size="small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3456547192,2401500716&fm=27&gp=0.jpg"/>
      </div>
    </div>
  )
}
