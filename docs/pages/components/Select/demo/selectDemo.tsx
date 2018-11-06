import * as React from 'react';
import { Select } from '@yoshino/components/';
import { CSSProperties } from 'react';

const {Option, OptGroup} = Select;
export default function() {
  const style: CSSProperties = {width: 200, display: 'inline-block', marginRight: 20};
  return (
    <div>
      <Select mode='single' placeholder='请选择' defaultValue={''} style={style}>
        <OptGroup label='钉宫四萌'>
          <Option value='灼眼的夏娜'>灼眼的夏娜灼眼的夏娜灼眼的夏娜灼眼的夏娜灼眼的夏娜灼眼的夏娜灼眼的夏娜</Option>
          <Option value='零之使魔'>零之使魔</Option>
          <Option value='旋风管家'>旋风管家</Option>
          <Option value='龙与虎'>龙与虎</Option>
        </OptGroup>
        <OptGroup label='约会大作战'>
          <Option value='四系乃' disabled>四系乃</Option>
        </OptGroup>
      </Select>
      <Select mode='single' placeholder='请选择' defaultValue={'灼眼的夏娜'} style={style} disabled>
        <OptGroup label='钉宫四萌'>
          <Option value='灼眼的夏娜'>灼眼的夏娜</Option>
          <Option value='零之使魔'>零之使魔</Option>
          <Option value='旋风管家'>旋风管家</Option>
          <Option value='龙与虎'>龙与虎</Option>
        </OptGroup>
        <OptGroup label='约会大作战'>
          <Option value='四系乃' disabled>四系乃</Option>
        </OptGroup>
      </Select>
    </div>
  );
}
