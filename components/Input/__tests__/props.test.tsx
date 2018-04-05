import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Input from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Input/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
