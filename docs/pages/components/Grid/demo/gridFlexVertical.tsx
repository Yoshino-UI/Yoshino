import * as React from 'react';
import { Grid } from '@yoshino/components/';

const { Row, Col } = Grid;

// tslint:disable no-any
const DemoBox = (props: any) => {
  const style = {
    height: props.value,
    lineHeight: `${props.value}px`,
  };

  return (
    <div style={style}>{props.children}</div>
  );
};

export default function() {
  return (
    <div>
      <p>向上对齐</p>
      <Row type='flex' justify='center' align='top'>
        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>

      <p>居中对齐</p>
      <Row type='flex' justify='space-around' align='middle'>
        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>

      <p>底部对齐</p>
      <Row type='flex' justify='space-between' align='bottom'>
        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>
    </div>
  );
}
