import * as renderer from 'react-test-renderer';
import * as React from 'react';
import InputNumber from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <InputNumber/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
