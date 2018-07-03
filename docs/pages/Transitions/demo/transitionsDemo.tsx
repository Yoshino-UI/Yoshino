import * as React from 'react';
import { Transitions, Button } from '../../../../components/';

const {Expand} = Transitions;

export default class App extends React.Component {
  state = {
    active: false,
  }

  onExpand = () => {
    const {active} = this.state;
    this.setState({active: !active});
  }

  render () {
    const height = 200;
    const {active} = this.state;
    const style: React.CSSProperties = {
      height,
      textAlign: 'center',
      lineHeight: `${height}px`,
      background: 'red',
      marginTop: 10,
      width: 200,
    };
    return (
      <div>
        <Button onClick={this.onExpand}>展开折叠</Button>
        <Expand
          timeout={300}
          active={active}
        >
          <div
            style={style}>
            高度是{height}px
          </div>
        </Expand>
      </div>
    )
  }
}
