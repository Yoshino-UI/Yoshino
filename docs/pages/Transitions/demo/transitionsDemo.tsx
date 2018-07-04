import * as React from 'react';
import { Transitions, Button } from '../../../../components/';
import './index.less'

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
      lineHeight: `${height}px`,
    };
    return (
      <div>
        <Button onClick={this.onExpand}>展开折叠</Button>
        <Expand
          timeout={300}
          active={active}
        >
          <div
            className='transitions-expand-demo-box'
            style={style}>
            高度是{height}px
          </div>
        </Expand>
      </div>
    )
  }
}
