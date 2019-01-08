import * as React from 'react';
import { Button } from '@yoshino/components/';

export default class ButtonLoading extends React.Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <Button
        type='primary'
        icon='md-play'
        loading={this.state.loading}
        onClick={() => {
          this.setState({loading: true});
          setTimeout(() => {
            this.setState({loading: false});
          }, 20000);
        }}
      >
        点我进入加载
      </Button>
    );
  }
}
