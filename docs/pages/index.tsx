import * as React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router';
import Button from './Button';
import Yoshino from './Yoshino';
import Logs from './Logs/index';
import Start from './Start/index';
import {Menu} from '../../components/';
import './index.less';
import menuObj from './menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { RouteComponentProps } from 'react-router';



export interface IProps  extends RouteComponentProps<{name: string}>{
 
}

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Routes = [
  {
    component: Yoshino,
    path: '/components/yoshino',
  },
  {
    component: Start,
    path: '/components/start',
  },
  {
    component: Logs,
    path: '/components/logs',
  },
  {
    component: Button,
    path: '/components/button'
  }
];

export default class Components extends Component<IProps> {
  pushHistory = (url: string) => {
    this.props.history.push('/components/' + url)
  }

  render() {
    const preCls = 'wrapper'
    const current = this.props.match.params.name;
    return (
      <div>
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-logo`}>
            Yoshino
          </div>
        </div>
        <div className={`${preCls}-wrapper`}>
          <div className={`${preCls}-menu`}>
          <Menu
            style={{ width: 256 }}
            defaultActiveKey={current}
            defaultOpenKeys={['components']}
          >
            <Menu.Item keyId="yoshino" onClick={this.pushHistory.bind(this, 'yoshino')}>Yoshino</Menu.Item>
            <Menu.Item keyId="start" onClick={this.pushHistory.bind(this, 'start')}>快速开始</Menu.Item>
            <Menu.Item keyId="logs" onClick={this.pushHistory.bind(this, 'logs')}>更新日志</Menu.Item>
            <SubMenu title="组件" keyId="components">
              {
                menuObj.map((item) => {
                  return (
                    <MenuItemGroup title={item.name} keyId={item.keyId} key={item.keyId}>
                      {
                        item.children.map((item) => {
                          return (
                            <MenuItem keyId={item.keyId} onClick={this.pushHistory.bind(this, item.keyId)}>{item.name}</MenuItem>
                          )
                        })
                      }
                    </MenuItemGroup>
                  )
                })
              }
            </SubMenu>
          </Menu>
          </div>
          <div className={`${preCls}-container`}>
            <Switch>
              {
                Routes.map((item, key) => {
                  return (
                    <Route {...item} path={`${item.path}`} key={key} exact/>
                  )
                })
              }
            </Switch>
          </div>
        </div>
        
      </div>
    )
  }
};
