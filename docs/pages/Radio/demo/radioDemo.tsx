import * as React from 'react';
import { Radio } from '../../../../components/';

export default class App extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const {checked} = this.state;
    return (
      <Radio
        onChange={() => this.setState({checked: !checked})}
        checked={checked}
      />
    );
  }
}
