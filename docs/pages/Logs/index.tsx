import * as React from 'react';
import { Component } from 'react';
import * as md from './logs.md';
import * as v010md from './logs/0.1.0.md';
import * as v011md from './logs/0.1.1.md';
import Markdown from '../../components/Markdown';
import {Timeline} from '../../../components/';
import './index.less';

export default class Logs extends Component {
  render() {
    return (
      <div className="logs-box">
        <Markdown text={md}/>
        <div style={{marginTop: 40}}>
          <Timeline>
            <Timeline.Item time={<h2>v 0.1.1</h2>}>
              <Markdown text={v011md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.0</h2>}>
              <Markdown text={v010md}/>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    )
  }
};
