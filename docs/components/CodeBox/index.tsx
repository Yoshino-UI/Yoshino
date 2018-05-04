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
    const loader = code ? (code as string).replace(new RegExp('../../../../components/','g'), 'yoshino') : '';
    const demoHTML = {__html: Prism.highlight(loader, Prism.languages.jsx)};

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
