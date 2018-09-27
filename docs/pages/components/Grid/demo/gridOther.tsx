import * as React from 'react';
import { Grid } from '@yoshino/components/';

const { Row, Col } = Grid;

export default function() {
  return (
    <div>
       <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
      </Row>
    </div>
  );
}
