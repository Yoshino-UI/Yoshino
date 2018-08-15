import * as React from 'react';
import { Component } from 'react';
import * as md from './theme.md';
import Markdown from '../../components/Markdown/';

export default class Start extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
      </div>
    );
  }
}
