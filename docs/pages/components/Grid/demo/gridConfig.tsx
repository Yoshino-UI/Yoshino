import * as React from 'react';
import Markdown from '@docs/components/Markdown/';
import { Grid, Slider } from '@yoshino/components/';

const { Row, Col } = Grid;

export default class extends React.Component {
  state = {
    gutter: 8,
    column: 2,
  };

  render() {
    const col = [];
    let md = `\`\`\`jsx\r\n<Row gutter={${this.state.gutter}}>\r\n`;

    for (let i = 0; i < this.state.column; i++) {
      col.push(
        <Col span={24 / this.state.column} key={i}><div className='columns'>Coloums-{i + 1}</div></Col>
      );
      md += `  <Col span={${24 / this.state.column}}>Coloums-${i + 1}</Col>\r\n`;
    }
    md += '</Row>```';
    return (
        <div className='grid-config'>
          <div style={{width: 350}}>
            <p>gutter value: {this.state.gutter}</p>
            <Slider
              value={this.state.gutter}
              min={8}
              max={48}
              step={8}
              onChange={(v) => this.setState({gutter: v})}
            />
            <p>column count: {this.state.column}</p>
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
          <Markdown text={md}/>
          <Row gutter={this.state.gutter}>
            {col}
          </Row>
        </div>
      );
  }
}
