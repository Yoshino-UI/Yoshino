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
      <SubMenu keyId='sub1' title={<span><Icon type='upload'/><span>Navigation One</span></span>}>
        <MenuItemGroup keyId='g1' title='Item 1'>
          <Menu.Item keyId='1'>Option 1</Menu.Item>
          <Menu.Item keyId='2'>Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup keyId='g2' title='Item 2'>
          <Menu.Item keyId='3'>Option 3</Menu.Item>
          <Menu.Item keyId='4'>Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu keyId='sub2' title={<span><Icon type='calendar'/><span>Navigation Two</span></span>}>
        <Menu.Item keyId='5'>Option 5</Menu.Item>
        <Menu.Item keyId='6'>Option 6</Menu.Item>
        <SubMenu keyId='sub3' title='Submenu'>
          <Menu.Item keyId='7'>Option 7</Menu.Item>
          <Menu.Item keyId='8'>Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item keyId='13' disabled>Option 13</Menu.Item>
      <Menu.Item keyId='14'>Option 14</Menu.Item>
      <Menu.Item keyId='15'>Option 15</Menu.Item>
    </Menu>
  );
}
