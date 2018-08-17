import * as React from 'react';
import { Tabs, Select, Switch } from '../../../../components/';

const { TabPane } = Tabs;
const {Option} = Select;

export default class App extends React.Component {
  postion = ['top', 'left', 'bottom', 'right'];
  size = ['default', 'small', 'large'];
  type = ['line', 'card'];

  state: {
    position: 'top' | 'left' | 'bottom' | 'right',
    size: 'large' | 'small' | 'default',
    animated: boolean,
    type: 'line' | 'card',
  } = {
    position: 'left',
    size: 'default',
    animated: true,
    type: 'line',
  };

  render() {
    const {position, size, animated, type} = this.state;
    return (
      <div>
        <span>tabPosition:</span>
        <Select
          value={position}
          style={{width: 100, marginBottom: 10, marginRight: 20}}
          onChange={(v) => this.setState({position: v})}
        >
          {this.postion.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
        </Select>
        <span>size:</span>
        <Select
          value={size}
          style={{width: 100, marginBottom: 10, marginRight: 20}}
          onChange={(v) => this.setState({size: v})}
        >
          {this.size.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
        </Select>
        <span>type:</span>
        <Select
          value={type}
          style={{width: 140, marginBottom: 10, marginRight: 20}}
          onChange={(v) => this.setState({type: v})}
        >
          {this.type.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
        </Select>
        <span>animated:</span>
        <Switch checked={animated} onChange={(v) => this.setState({animated: v})}/>
        <Tabs defaultActivetKey='tab1' tabPosition={position} size={size} animated={animated} type={type}>
          <TabPane name='tab1'>Content 11111</TabPane>
          <TabPane name='tab2' disabled>Content 22222</TabPane>
          <TabPane name='tab3'>Content 33333</TabPane>
          <TabPane name='tab4'>Content 44444</TabPane>
          <TabPane name='tab5'>Content 55555</TabPane>
        </Tabs>
      </div>
    );
  }
}
