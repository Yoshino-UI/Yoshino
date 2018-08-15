import * as React from 'react';
import { Modal, Button } from '../../../../components/';

export default class App extends React.Component {
  state = {
    count: 1,
    visible: false,
  };

  onClick = () => {
    this.setState({
      count: this.state.count + 1,
      visible: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>点一次count++</Button>
        <Modal
          visible={this.state.visible}
          bodyContent={this.state.count}
          onClose={() => this.setState({visible: false})}
        />
      </div>
    );
  }
}
