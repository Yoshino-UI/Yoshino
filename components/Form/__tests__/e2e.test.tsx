import * as React from 'react';
import {Simulate, renderIntoDocument, scryRenderedComponentsWithType} from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import Form from '../index';

describe('多选', () => {
  test('点击其中一个选项后可通过 onChange 拿到最新的值', () => {
    const component = renderIntoDocument(
      <Form/>,
    ) as Form;
  });
});
