import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Loading from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Loading/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
