import * as React from 'react';
import { Transitions, Switch } from '../../../../components/';
import './index.less';

const {Scale} = Transitions;

export default class App extends React.Component {
  state = {
    active: true,
  };

  onScale = (checked: boolean) => {
    this.setState({
      active: checked,
    });
  }

  render() {
    const height = 200;
    const {active} = this.state;
    const style: React.CSSProperties = {
      height,
      lineHeight: `${height}px`,
    };
    return (
      <div style={{height: 300}}>
        <Switch checked={active} onChange={this.onScale}>开/关</Switch>
        <Scale
          timeout={300}
          active={active}
        >
          <div
            className='transitions-expand-demo-box'
            style={style}
          >
            放缩
          </div>
        </Scale>
      </div>
    );
  }
}
