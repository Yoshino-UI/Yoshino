import * as React from 'react';
import Icon  from '../../../../components/Icon';
import Input  from '../../../../components/Input';

const {iconName} :{iconName: Array<{
  tag: string;
  name: string;
}>} = require('../../../../components/Icon/iconName.js');
  
export default class IconSearch extends React.Component {
  state = {
    tag:'',
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.tag}
          size="large"
          style={{width: '400px'}}
          placeholder="输入关键词可以搜索对应icon"
          onChange={(v) => {
            this.setState({ tag: v })
          }}
        />
        <div style= {{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flext-start',

        }}>
        {
          iconName.filter((item) => item.tag.indexOf(this.state.tag) !== -1).map((item) => {
            return (
              <div style= {{
                width: 80,
                textAlign: 'center',
                padding: 5,
              }}>
                <Icon type={item.name} style={{fontSize: 25}}/>
                <div style={{fontSize: 12}}>{item.name}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}
