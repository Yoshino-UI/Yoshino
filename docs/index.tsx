import * as React from 'react';
import { Component } from 'react';
import './index.less';
import '../components/styles/index.less';
import { Icon } from '../components/';
import { Link } from 'react-router-dom';

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
          <div className="box">
            <h1>Yoshino</h1>
            <h2> 基于react的可定制化组件库，可根据不同业务场景输出对应的组件。</h2>
            <div className="action">
              <div className="action-item"><a>快速开始</a></div>
              <div className="action-item"><Link to="/components">组件</Link></div>
              <div className="action-item">
                <a target="_blank" href="https://github.com/Yoshino-UI/yoshino-cli">yoshino-cli</a>
              </div>
              <div className="action-item">
                <a target="_blank" href="https://github.com/Yoshino-UI/Yoshino">
                  <Icon type="social-github"/> Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
