import * as React from 'react';
import { Progress, Slider } from '@yoshino/components/';

export default class App extends React.Component {
  state = {
    percent: 10,
  };

  render() {
    const { percent } = this.state;
    return (
      <div>
        <div>
          <Progress type='circle' percent={percent} diameter={200} format={(v) => `${v} km/h`} />
          <Progress type='circle' percent={percent} />
          <Progress type='circle' percent={percent} diameter={80} strokeColor={`rgb(255, 85, 0)`} />
        </div>
        <div style={{width: 300}}>
          <Slider max={100} min={0} value={percent} onChange={(v) => this.setState({percent: v})}/>
        </div>
      </div>
    );
  }
}
