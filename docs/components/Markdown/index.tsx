import * as React from 'react';
import { Component } from 'react';
import * as marked from 'marked';
import './index.less';
import * as Prism from 'prismjs';
require('prismjs/components/prism-jsx.min');
require('../../../node_modules/prismjs/themes/prism.css');

// tslint:disable no-any
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
      highlight(code, lang) {
        if (lang === 'jsx') {
          return Prism.highlight(code, Prism.languages.jsx);
        } else {
          return require('highlight.js').highlight(lang || 'js', code).value;
        }
      }
    });
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(this.props.text)}}/>
    );
  }
}
