import * as React from 'react';
import { Checkbox } from '../../../../components/';

const CheckboxGroup = Checkbox.Group;

export default class CheckboxDemo extends React.Component {
  state = {
    value: [1, 2],
  };

  render() {
    return (
      <CheckboxGroup value={this.state.value} onChange={(value) => this.setState({value})}>
        <Checkbox value={1}>番薯</Checkbox>
        <Checkbox value={2} disabled>地瓜</Checkbox>
        <Checkbox value={3}>铁板烧</Checkbox>
      </CheckboxGroup>
    );
  }
}
