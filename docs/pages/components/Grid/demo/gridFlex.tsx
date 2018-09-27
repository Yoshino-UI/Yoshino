import * as React from 'react';
import { Grid } from '@yoshino/components/';

const { Row, Col } = Grid;

export default function() {
  return (
    <div>
      <p>居左</p>
      <Row type='flex' justify='start'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <p>居中</p>
      <Row type='flex' justify='center'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <p>居右</p>
      <Row type='flex' justify='end'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <p>均匀分布</p>
      <Row type='flex' justify='space-between'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <p>散列分布</p>
      <Row type='flex' justify='space-around'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </div>
  );
}
