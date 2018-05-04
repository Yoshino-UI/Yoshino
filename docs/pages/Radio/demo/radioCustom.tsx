import * as React from 'react';
import { Radio } from '../../../../components/';
const RadioGroup = Radio.Group;

export default class App extends React.Component {
  state = {
    value: 1,
  }

  render() {
    const {value}= this.state;
    return (
      <div>
        <h5>非受控</h5>
        <RadioGroup defaultValue={3}>
          <Radio value={1}>radio</Radio>
          <Radio value={2}>radio</Radio>
          <Radio value={3}>radio</Radio>
        </RadioGroup>
        <h5>受控</h5>
        <RadioGroup value={value} onChange={(value) => this.setState({value: value})}>
          <Radio value={1}>radio</Radio>
          <Radio value={2} disabled>radio</Radio>
          <Radio value={3}>radio</Radio>
        </RadioGroup>
      </div>
    )
  }
}