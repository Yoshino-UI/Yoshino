import * as React from 'react';
import { Component, ReactNode } from 'react';
import './index.less';
import Markdown from '../Markdown';
import * as Prism from 'prismjs';
require('prismjs/components/prism-jsx.min');
require('../../../node_modules/prismjs/themes/prism.css')

export interface IProps {
  text: any;
  demo: ReactNode;
  code?: string;
}

export default class CodeBox extends Component<IProps> {

  componentDidMount() {
  }

  render() {
    const {code, text, demo} = this.props;
    const demoHTML = {__html: code ? Prism.highlight(code as string, Prism.languages.jsx) : ''};
// console.log(Prism.highlight(code as string, Prism.languages.js))

    return (
      <div className="code-box">
        <div className="code-box-intro">
          <Markdown text={text}/>
        </div>
        <div className="code-box-demo">
          {demo}
        </div>
        {
          code ? 
          <pre>
            <code className="language-jsx" dangerouslySetInnerHTML={demoHTML}/>
          </pre> : null
        }
      </div>
    );
  }
};
