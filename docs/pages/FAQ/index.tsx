import * as React from 'react';
import { Component } from 'react';
import * as md from './faq.md';
import Markdown from '../../components/Markdown/';

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
      </div>
    );
  }
}
