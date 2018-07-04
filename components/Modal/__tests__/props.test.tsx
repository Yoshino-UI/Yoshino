import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Modal from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Modal/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
