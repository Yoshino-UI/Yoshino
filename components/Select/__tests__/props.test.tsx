import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Select from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Select/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
