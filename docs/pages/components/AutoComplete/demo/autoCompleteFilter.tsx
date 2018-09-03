import * as React from 'react';
import { AutoComplete } from '@yoshino/components/';

export default class AutoCompleteFilter extends React.Component {
  state = {
    val: '',
  };

  onFilter = (value: string) => {
    if (value !== '') {
      return [value, `${value}${value}`, `${value}${value}${value}`];
    }
    return [];
  }

  render() {
    return (
      <div>
        <AutoComplete
          value={this.state.val}
          dataSource={[]}
          onFilter={this.onFilter}
          onChange={(val) => this.setState({val})}
        />
      </div>
    );
  }
}
