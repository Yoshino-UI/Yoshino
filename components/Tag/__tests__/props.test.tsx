import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Tag from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Tag/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
