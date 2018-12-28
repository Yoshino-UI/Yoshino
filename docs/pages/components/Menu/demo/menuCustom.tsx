import * as React from 'react';
import { Menu, Icon } from '@yoshino/components/';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default function() {
  return (
    <Menu
      mode='horizontal'
      defaultActiveKey='1'
    >
      <SubMenu key='sub1' title={<span><Icon type='md-upload'/><span>Navigation One</span></span>}>
        <MenuItemGroup key='g1' title='Item 1'>
          <Menu.Item key='1'>Option 1</Menu.Item>
          <Menu.Item key='2'>Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key='g2' title='Item 2'>
          <Menu.Item key='3'>Option 3</Menu.Item>
          <Menu.Item key='4'>Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu key='sub2' title={<span><Icon type='md-calendar'/><span>Navigation Two</span></span>}>
        <Menu.Item key='5'>Option 5</Menu.Item>
        <Menu.Item key='6'>Option 6</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key='13' disabled>Option 13</Menu.Item>
      <Menu.Item key='14'>Option 14</Menu.Item>
      <Menu.Item key='15'>Option 15</Menu.Item>
    </Menu>
  );
}
