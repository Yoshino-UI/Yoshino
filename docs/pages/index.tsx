import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Menu, BackTop} from '../../components/';
import './index.less';
import menuObj from './menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { RouteComponentProps } from 'react-router';
import Routes from './routes';


export interface IProps  extends RouteComponentProps<{name: string}>{
 
}

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Components extends Component<IProps> {
  pushHistory = (url: string) => {
    this.props.history.push('/components/' + url)
  }

  render() {
    const preCls = 'wrapper'
    const current = this.props.match.params.name;
    return (
      <div>
        <BackTop/>
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-logo`}>
            <Link to='/'>Yoshino</Link>
          </div>
        </div>
        <div className={`${preCls}-wrapper`}>
          <div className={`${preCls}-menu`}>
          <Menu
            defaultActiveKey={current}
            defaultOpenKeys={['components']}
          >
            <Menu.Item keyId="yoshino" onClick={this.pushHistory.bind(this, 'yoshino')}>Yoshino</Menu.Item>
            <Menu.Item keyId="start" onClick={this.pushHistory.bind(this, 'start')}>快速开始</Menu.Item>
            <Menu.Item keyId="logs" onClick={this.pushHistory.bind(this, 'logs')}>更新日志</Menu.Item>
            <Menu.Item keyId="faq" onClick={this.pushHistory.bind(this, 'faq')}>FAQ</Menu.Item>
            <SubMenu title="组件" keyId="components">
              {
                menuObj.map((item) => {
                  return (
                    <MenuItemGroup title={item.name} keyId={item.keyId} key={item.keyId}>
                      {
                        item.children.map((item) => {
                          return (
                            <MenuItem key={item.keyId} keyId={item.keyId} onClick={this.pushHistory.bind(this, item.keyId)}>{item.name}</MenuItem>
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
              <Route render={()=> {
                return <Redirect to="/components/"/>
              }}/>
            </Switch>
          </div>
        </div>
        <div className={`${preCls}-footer`}>
         
        </div>
      </div>
    )
  }
};
