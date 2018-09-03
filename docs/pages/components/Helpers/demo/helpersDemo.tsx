import * as React from 'react';
import { Helpers } from '@yoshino/components/';
import './index.less';

const {ClickOutside} = Helpers;

export default class App extends React.Component {
  state = {
    in: false,
  };

  render() {
    return (
      <div>
        <ClickOutside
          clickOutside={() => {
            this.setState({
              in: false,
            });
          }}
          clickInside={() => {
            this.setState({
              in: true,
            });
          }}
        >
          <div className={'helpers-click-outside-demo-box'}>{this.state.in ? '点击了内部' : '点击了外部'}</div>
        </ClickOutside>
      </div>
    );
  }
}
