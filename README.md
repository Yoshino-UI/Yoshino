<h1 align='center'>Yoshino</h1>
<p align='center'>
  <img src='https://img.shields.io/npm/v/yoshino.svg?style=flat-square' alt="version">
  <img src='https://img.shields.io/npm/l/express.svg' alt="license">
  <img src='https://img.shields.io/npm/dt/yoshino.svg?style=flat-square' alt="downloads">
  <a href='https://yoshino-ui.github.io'><img src='https://img.shields.io/badge/website%20-Yoshino-51b26d.svg'/></a>
</p>
<p align='center'>Flexible Lightweight PC UI Components built on React!</p>
<p align='center'>Anyone can generate easily all kinds of themes by it!</p>

English | [简体中文](./README-cn.md)
## Docs
[Docs](https://yoshino-ui.github.io/#/)

## Usage
```
import * as React from 'react';
import { Button } from 'yoshino';

export default function () {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  )
}
```
Using css via import:
```
import 'yoshino/lib/index.css'
```
## Install
Using npm:
```
npm install yoshino --save
```

## 

## How to Design?
Yoshino is similar to Hexo.The different style components of yoshino are equal to Hexo various theme，Hexo official only provides a set of tools and a basic theme. Yoshino is also such.

Developers can output the components of the style they need, just like configuring the Hexo theme. You can even use cli to output multiple different styles of components in the same project.

Different themes of Yoshino need to be completed by the open source community, and the official will provide a similar yoshino-theme-site to show different themes, similar to [hexojs/site](https://github.com/hexojs/site)

![](https://pic1.zhimg.com/80/v2-3c24dc918db63fbd19f6531374014146_hd.jpg)

Currently the yoshino-cli tool only supports component creation outputs, such as creating custom Alert components.
```
yoshino new Alert
```
Later, yoshino-cli can output corresponding specification components through instructions similar to the following, such as outputting the Alert component of the material-ui specification.
```
yoshino new Alert --theme material-ui
```
Even a component library that directly outputs the entire theme.
```
yoshino new all --theme material-ui
```

## Features
- Develop with `TypeScript`, provide `d.ts` files to help developers increase development speed
- Advocate the concept of `OFA(one for all)` and `AFO(all for one)`, before project development by [yoshino-cli] (https://github.com/Yoshino-UI/yoshino-cli). According to project ui, standardize the output of components.
- In addition to the simple and generic `ui` component, `yoshino` draws out some of the more usable effects (features) components, such as
  - Helpers
  - Ripple
  - Transitions

## Contributos
![](https://opencollective.com/yoshino/contributors.svg)

## Development process
```js
npm run dev // 启动开发环境
npm run new ComponentName // 新建组件
```

## Ecosystem Links
- [yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)

## Links
- [ant-design](https://github.com/ant-design/ant-design)
- [muse-ui](https://github.com/museui/muse-ui)

