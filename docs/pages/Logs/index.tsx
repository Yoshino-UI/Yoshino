import * as React from 'react';
import { Component } from 'react';
import * as md from './logs.md';
import Markdown from '../../components/Markdown';

export default class Logs extends Component {
  render() {
    return (
      <div className="">
        <Markdown text={md}/>
      </div>
    )
  }
};
