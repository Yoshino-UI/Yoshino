import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BackTop, Menu} from '@yoshino/components/';
import { backTop } from '@yoshino/components/BackTop/assist';
import './index.less';
import { RouteComponentProps } from 'react-router';
import ComponentPage from './components';
import Theme from './themes';
import './index.less';

export interface IProps  extends RouteComponentProps<{name: string}> {
}

export default class Components extends Component<IProps> {
  pushHistory = (url: string) => {
    this.props.history.push('/docs/' + url);
    backTop(300);
  }

  render() {
    const preCls = 'wrapper';
    return (
      <div>
        <BackTop/>
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-logo`}>
            <Link to='/'>Yoshino</Link>
          </div>
          <Menu mode='horizontal' className={`${preCls}-nav-menu`}>
            <Menu.Item keyId='components' onClick={this.pushHistory.bind(this, 'components')}>组件</Menu.Item>
            <Menu.Item keyId='theme' onClick={this.pushHistory.bind(this, 'theme')}>主题</Menu.Item>
          </Menu>
        </div>
        <div className={`${preCls}-wrapper`}>
          <Switch>
            <Route component={ComponentPage} path='/docs/components/:name'/>
            <Route component={Theme} path='/docs/theme'/>
            <Route
              render={() => {
              return <Redirect to='/docs/components/yoshino'/>;
              }}
            />
          </Switch>
        </div>
        <div className={`${preCls}-footer`}/>
      </div>
    );
  }
}
