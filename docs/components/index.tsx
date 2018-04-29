import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Router } from 'react-router';
import createHashHistory from 'history/createBrowserHistory';
import Button from './Button';
import {Menu} from '../../components/';
import './index.less';
import menuObj from './menu';
import { MenuItem } from '../../components/Menu/MenuItem';

const Routes = [
  {
    component: Button,
    path: 'button'
  }
];

const history = createHashHistory();
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Components extends Component {

  render() {
    const preCls = 'wrapper'
   
    return (
      <div>
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-logo`}>
            Yoshino
          </div>
        </div>
        <div className={`${preCls}-container`}>
          <div className={`${preCls}-menu`}>
          <Menu
            style={{ width: 256 }}
            defaultActiveKey='yoshino'
            defaultOpenKeys={['components']}
          >
            <Menu.Item keyId="yoshino">Yoshino</Menu.Item>
            <Menu.Item keyId="getstarted">快速上手</Menu.Item>
            <Menu.Item keyId="update">更新日志</Menu.Item>
            <SubMenu title="组件" keyId="components">
              {
                menuObj.map((item) => {
                  return (
                    <MenuItemGroup title={item.name} keyId={item.keyId} key={item.keyId}>
                      {
                        item.children.map((item) => {
                          return (
                            <MenuItem keyId={item.keyId}>{item.name}</MenuItem>
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
        </div>
        <Router history={history}>
          <Switch>
            {
              Routes.map((item, key) => {
                return (
                  <Route {...item} path={`/components/${item.path}`} key={key} exact/>
                )
              })
            }
          </Switch>
        </Router>
      </div>
    )
  }
};
