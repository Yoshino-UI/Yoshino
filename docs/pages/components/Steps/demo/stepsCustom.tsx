import * as React from 'react';
import { Steps, Icon } from '@yoshino/components/';

const StepsItem = Steps.Item;

export default function() {
  return (
    <Steps size='small' current={2}>
      <StepsItem title='第一步' icon={<Icon type='help-buoy'/>}/>
      <StepsItem title='第二步' icon={<Icon type='android-favorite'/>}/>
      <StepsItem title='第三步' icon={<Icon type='android-contacts'/>}/>
    </Steps>
  );
}
