import * as React from 'react';
import Checkbox  from '../../../../components/Checkbox';

const CheckboxGroup = Checkbox.Group;

export default function() {
  return (
    <CheckboxGroup name="test1" defaultValue={[3, 2]}>
      <Checkbox value={1}>苹果</Checkbox>
      <Checkbox value={2}>栗子</Checkbox>
      <Checkbox value={3}>棒槌</Checkbox>
    </CheckboxGroup>
  );
}
