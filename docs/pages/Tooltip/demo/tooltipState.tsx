import * as React from 'react';
import { Tooltip, Switch, Button } from '../../../../components/';

export default class App extends React.Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div>
        <Tooltip title='受控' placement='top' visible={this.state.visible}>
          <Button>受控</Button>
        </Tooltip>
        <Switch
          checked={this.state.visible}
          onChange={() => this.setState({visible: !this.state.visible})}
        />
      </div>
    );
  }
}
