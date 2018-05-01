import * as React from 'react';
import { Component, ReactNode } from 'react';
import './index.less';
import Markdown from '../Markdown';

export interface IProps {
  text: any;
  demo: ReactNode;
  code: string;
}

export default class Codebox extends Component<IProps> {

  componentDidMount() {
    
  }

  render() {
    const {code, text, demo} = this.props;
    // const demoHTML = {__html: require('highlight.js').highlight('js', code).value};
    const demoHTML = `\`\`\`js
${code}
\`\`\``;
    return (
      <div className="code-box">
        <div className="code-box-demo">
          {demo}
        </div>
        <div className="code-box-intro">
          <Markdown text={text}/>
        </div>
        <div className="code-box-demo">
          <Markdown text={demoHTML}/>
        </div>
      </div>
    );
  }
};
