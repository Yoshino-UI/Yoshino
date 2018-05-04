import * as React from 'react';
import { Pagination } from '../../../../components/';

export default class App extends React.Component {
  state = {
    current: 1,
  }

  render() {
    return (
      <Pagination
        current={this.state.current}
        total={200}
        onChange={(current) => {
          this.setState({current});
        }}
        next="下一页"
        previous="上一页"
      />
    )
  }
}
