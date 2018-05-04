import * as React from 'react';
import { Steps, Button } from '../../../../components/';

const StepsItem = Steps.Item;

export default class App extends React.Component {
  state = {
    current: 0,
  };

  render() {
    return (
      <div>
        <Button onClick={() => {
          const current = this.state.current - 1;
          if (current >= 0) {
            this.setState({current})
          } 
        }}>上一步</Button>
        <Button onClick={() => {
          const current = this.state.current + 1;
          if (current <= 2) {
            this.setState({current})
          }
        }}>下一步</Button>
        <Steps current={this.state.current} direction="vertical">
          <StepsItem title="第一步">
            第一步第一步第一步第一步第一步第一步第一步第一步第一步
            第一步第一步第一步第一步第一步第一步第一步第一步第一步第一
          </StepsItem>
          <StepsItem title="第二步">
            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
          </StepsItem>
          <StepsItem title="第二步">
            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
            第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
          </StepsItem>
        </Steps>
      </div>
    );
  }

}
