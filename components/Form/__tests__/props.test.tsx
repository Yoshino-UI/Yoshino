import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Form from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Form/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
