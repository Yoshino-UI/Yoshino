import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Notification from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Notification/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
