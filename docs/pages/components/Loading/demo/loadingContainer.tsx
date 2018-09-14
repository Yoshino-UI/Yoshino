import * as React from 'react';
import { Loading, Switch, Alert } from '@yoshino/components/';

export default class App extends React.Component {
  state = {
    value: false,
  };

  render() {
     return (
      <div>
        <Loading text='自定义加载文本' size='large' type='b' loading={this.state.value}>
          <Alert type='info' showIcon title='消息提示文案'/>
        </Loading>
        <div>
          <Switch checked={this.state.value} onChange={(v) => this.setState({value: v})} />
        </div>
      </div>
    );
  }
}
