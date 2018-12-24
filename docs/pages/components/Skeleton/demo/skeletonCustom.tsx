import * as React from 'react';
import { Skeleton, Switch } from '@yoshino/components/';

export default class extends React.Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        开关:<Switch checked={loading} onChange={(v) => this.setState({loading: v})}/>
        <Skeleton active loading={loading}>
          <p>111111111111111111111111111111111111</p>
          <p>111111111111111111111111111111111111</p>
          <p>2222222222222222</p>
        </Skeleton>
      </div>
    );
  }
}
