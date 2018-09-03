import * as React from 'react';
import { Checkbox } from '@yoshino/components/';

const CheckboxGroup = Checkbox.Group;

export default function() {
  return (
    <CheckboxGroup defaultValue={[3, 2]}>
      <Checkbox value={1}>苹果</Checkbox>
      <Checkbox value={2}>栗子</Checkbox>
      <Checkbox value={3}>棒槌</Checkbox>
    </CheckboxGroup>
  );
}
