import * as React from 'react';
import { Component } from 'react';
import * as md from './start.md';
import Markdown from '@docs/components/Markdown/';

export default class Start extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
      </div>
    );
  }
}
