## `2018-05-04` - [0.1.0]
  - 🌟添加组件 Icon 图标
  - 🌟添加组件 Breadcrumb 面包屑导航
  - 🌟添加组件 Button 按钮
  - 🌟添加组件 Card 卡片
  - 🌟添加组件 Backtop 回到顶部
  - 🌟添加组件 Alert 提示框
  - 🌟添加组件 Timeline 时间轴
  - 🌟添加组件 Switch 开关
  - 🌟添加组件 Loading 加载
  - 🌟添加组件 Divider 分割线
  - 🌟添加组件 Rate 评分
  - 🌟添加组件 Progress 进度条
  - 🌟添加组件 Avatar 头像
  - 🌟添加组件 Badge 徽标
  - 🌟添加组件 Tag 标签
  - 🌟添加组件 Input 输入框
  - 🌟添加组件 InputNumber 数字输入框
  - 🌟添加组件 Dropdown下拉菜单
  - 🌟添加组件 Pagination分页
  - 🌟添加组件 Steps步骤条
  - 🌟添加组件 AutoComplete自动完成
  - 🌟添加组件 Radio单选框
  - 🌟添加组件 Collapse折叠面板
  - 🌟添加组件 Tooltip文字提示
  - 🌟添加组件 Checkbox 多选框
  - 🌟添加组件 Slider 滑动条
  - 🌟添加组件 Menu 菜单

## `2018-05-05` - [0.1.1]
功能添加
  - 🌟 支持使用`babel-plugin-import`进行按需加载


Bug修复
  - 🐞 采用泛型定义Input类型，解决any带来的类型丢失问题
  - 🐞 修复`Pop`中部分浏览器`ClientRect`无法设置的BUG
  - 🐞 修复`Slider`中部分浏览器滑动拖动异常问题 - DOMRect.x 与 DOMRect.left
  - 🐞 解决暴露components引来的tsconfig问题
  - 🐞 修复input同时赋值defaultValue和value的问题
  - 🐞 修复一些组件的`warning`提示
  
## `2018-05-23` - [0.1.2]
Bug修复
  - 🐞 修复lib、es丢失的问题

## `2018-05-23` - [0.1.3]
Bug修复
  - 🐞 修复`BackTop`命名不规范问题
  
## `2018-07-01` - [0.1.4]
功能添加
  - 🌟 完成新组件`Notification`
  - 🌟 `menu`组件添加`offset`控制子项偏移量

Bug修复
  - 🐞 修复`Alert`有`description`没有`icon`时样式异常的问题
  - 🐞 修复`autocomplete`上下选择内容选取失效以及回车选中一项后不再触发list的bug
  - 🐞 修复`collapse`点击`pannel`内容会引起关闭的问题

优化
  - 🤔 修改`alert`动画
  - 🤔 `notification`添加返回`key`用于`close`

## `2018-07-05 - 2018-09-04` - [0.1.5 - 0.1.43]
功能添加
  - 🌟 添加`transitions`的子模块`Expand、Slide、Scale`
  - 🌟 添加`helpers`的子模块`ClickOutside`
  - 🌟 添加`modal`组件
  - 🌟 添加`drawer`组件
  - 🌟 添加`table`组件
  - 🌟 支持按需加载
  - 🌟 添加`select`组件
  - 🌟 添加`message`组件
  - 🌟 添加`carousel`组件
  - 🌟 添加`tabs`组件

Bug修复
  - 🐞 修复`notification`自动关闭无动画的bug
  - 🐞 修复`pop`渲染`position`问题
  - 🐞 修复`modal`设置定时关闭后提前手动关闭报错的`bug`
  - 🐞 修复`package.json`中`typings`配置错误问题
  - 🐞 修复`modal`无`icon`时`container`宽度异常的问题
  - 🐞 修复`noification`某些情况下点击失效的bug
  - 🐞 修复`notification`动画异常问题
  - 🐞 修复`select`禁用时icon动画异常的问题
  - 🐞 修复`ripple`中心位置异常问题

优化
  - 🤔 `modal`添加`showCancel`属性
  - 🤔 `modal`添加关闭按钮
  - 🤔 `modal`添加蒙层
  - 🤔 `modal`增加内嵌功能

## `2018-09-13` - [0.1.44 - <font color='red'>Break Change!💀</font>] 
> 请参照`快速开始`里面重新配置按需加载引用方式!

Bug修复
  - 🐞 重构组件载入方式，修复依赖组件引用时css重复加载问题

## `2018-09-18` - [0.2.3 - <font color='red'>Break Change!💀</font>]
优化
 - 💎 改造`icon`，实现按需加载，仅引入使用的图标的svg😇，在此之前的版本均是引入整个字体库文件。