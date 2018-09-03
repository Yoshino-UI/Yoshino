import * as React from 'react';
import { Drawer, Switch,  Radio} from '@yoshino/components/';

const RadioGroup = Radio.Group;

export default class App extends React.Component {
  state: {
    open: boolean;
    direction: 'left' | 'right';
  } = {
    open: false,
    direction: 'left',
  };

  onOpen = (checked: boolean) => {
    this.setState({
      open: checked,
    });
  }

  setDirection = (direction: 'left' | 'right') => {
    this.setState({
      direction,
    });
  }

  render() {
    const {open, direction} = this.state;
    return (
      <div>
        <div>
          <Switch
            checked={open}
            onChange={this.onOpen}
          />
          <span>开/关抽屉导航</span>
        </div>
        <div>
          <RadioGroup defaultValue={'left'} onChange={this.setDirection}>
            <Radio value={'left'}>left</Radio>
            <Radio value={'right'}>right</Radio>
          </RadioGroup>
        </div>
        <Drawer
          open={open}
          diretion={direction}
        >
          <div
            style={{
              fontSize: 20,
              height: '100%',
              textAlign: 'center',
              padding: 20,
            }}
          >
            抽屉导航
          </div>
        </Drawer>
      </div>
    );
  }
}
