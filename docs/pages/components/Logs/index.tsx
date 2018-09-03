import * as React from 'react';
import { Component } from 'react';
import * as md from './logs.md';
import * as v010md from './logs/0.1.0.md';
import * as v011md from './logs/0.1.1.md';
import * as v012md from './logs/0.1.2.md';
import * as v013md from './logs/0.1.3.md';
import * as v014md from './logs/0.1.4.md';
import * as v015md from './logs/0.1.5.md';

import Markdown from '@docs/components/Markdown';
import {Timeline} from '@yoshino/components/';
import './index.less';

export default class Logs extends Component {
  render() {
    return (
      <div className='logs-box'>
        <Markdown text={md}/>
        <div style={{marginTop: 40}}>
          <Timeline>
            <Timeline.Item time={<h2>v 0.1.5</h2>}>
              <Markdown text={v015md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.4</h2>}>
              <Markdown text={v014md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.3</h2>}>
              <Markdown text={v013md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.2</h2>}>
              <Markdown text={v012md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.1</h2>}>
              <Markdown text={v011md}/>
            </Timeline.Item>
            <Timeline.Item time={<h2>v 0.1.0</h2>}>
              <Markdown text={v010md}/>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    );
  }
}
