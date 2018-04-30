import * as React from 'react';
import { Component } from 'react';
import * as marked from 'marked';
import './index.less';

export interface IProps {
  text: any;
}

export default class Markdown extends Component<IProps> {
  render() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight (code, lang) {
        return require('highlight.js').highlight(lang, code).value
      }
    });
    return (
      <div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(this.props.text)}}/>
    );
  }
};
