import * as React from 'react';
import { Select } from '../../../../components/';

const {Option} = Select;
export default function() {
  return (
    <div>
      <Select mode='multiple' size='large' defaultValue={['灼眼的夏娜']}>
        <Option value='灼眼的夏娜'>灼眼的夏娜</Option>
        <Option value='零之使魔'>零之使魔</Option>
        <Option value='旋风管家'>旋风管家</Option>
        <Option value='龙与虎'>龙与虎</Option>
      </Select>
    </div>
  );
}
