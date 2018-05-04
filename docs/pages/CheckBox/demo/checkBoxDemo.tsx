import * as React from 'react';
import { Checkbox } from '../../../../components/';

export default class CheckboxDemo extends React.Component {
  state = {
    checked: false,
  }
  onChange = () => {
    this.setState({checked: !this.state.checked})
  }
  render() {
    return (
      <div>
        <Checkbox value={1} checked={this.state.checked} onChange={this.onChange}>苹果</Checkbox>
      </div>
    );
  }
}
