import * as React from 'react';
import { Switch } from '../../../../components/';

export default function () {
  return (
    <div>
      <Switch onChange={(checked) => alert(`按钮状态：${checked ? '开' : '关'}`)}/>
      <Switch size="small"/>
    </div>
  )
}
