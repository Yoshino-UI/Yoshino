import * as renderer from 'react-test-renderer';
import * as React from 'react';
import AutoComplete from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <AutoComplete/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
