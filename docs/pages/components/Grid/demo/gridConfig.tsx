import * as React from 'react';
import { Grid, Slider } from '@yoshino/components/';

const { Row, Col } = Grid;

export default class extends React.Component {
  state = {
    gutter: 8,
    column: 2,
  };

  render() {
    const col = [];
    for (let i = 0; i < this.state.column; i++) {
      col.push(
        <Col span={24 / this.state.column} key={i}><div className='columns'>Coloums-{i + 1}</div></Col>
      );
    }
    return (
        <div className='grid-config'>
          <div style={{width: 350}}>
            <p>gutter value</p>
            <Slider
              value={this.state.gutter}
              min={8}
              max={48}
              step={8}
              onChange={(v) => this.setState({gutter: v})}
            />
            <p>column count</p>
            <Slider
              value={this.state.column}
              min={2}
              max={12}
              step={2}
              onChange={(v) => {
                let temp = v;
                if (v === 10) {
                  temp += 2;
                }
                this.setState({column: temp});
              }}
            />
          </div>
          <Row gutter={this.state.gutter}>
            {col}
          </Row>
        </div>
      );
  }
}
