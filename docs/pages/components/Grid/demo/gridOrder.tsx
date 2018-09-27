import * as React from 'react';
import { Grid } from '@yoshino/components/';

const { Row, Col } = Grid;

export default function() {
  return (
    <div>
      <Row>
        <Col span={18} push={6}>col-18 col-push-6</Col>
        <Col span={6} pull={18}>col-6 col-pull-18</Col>
      </Row>
    </div>
  );
}
