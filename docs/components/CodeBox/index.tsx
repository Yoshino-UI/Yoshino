import * as React from 'react';
import { Component, ReactNode } from 'react';
import './index.less';
import Markdown from '../Markdown';
import { Collapse } from '@yoshino/components/';
import * as Prism from 'prismjs';
require('prismjs/components/prism-jsx.min');
require('../../../node_modules/prismjs/themes/prism.css');

// tslint:disable:no-any
export interface IProps {
  text: any;
  demo: ReactNode;
  code?: string;
}

const Panel = Collapse.Panel;

export default class CodeBox extends Component<IProps> {

  render() {
    const {code, text, demo} = this.props;
    const loader = code ? (code as string).replace(new RegExp('@yoshino/components/', 'g'), 'yoshino') : '';
    const demoHTML = {__html: Prism.highlight(loader, Prism.languages.jsx)};

    return (
      <div className='code-box'>
        <div className='code-box-intro'>
          <Markdown text={text}/>
        </div>
        <div className='code-box-demo'>
          {demo}
        </div>
        {
          code ? (
          <Collapse accordion>
            <Panel title='点击查看源码' keyId={Math.random() + ''}>
              <pre>
                <code className='language-jsx' dangerouslySetInnerHTML={demoHTML}/>
              </pre>
            </Panel>
          </Collapse>
          ) : null
        }
      </div>
    );
  }
}
