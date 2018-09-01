<h1 align='center'>Yoshino</h1>
<p align='center'>
  <img src='https://img.shields.io/npm/v/yoshino.svg?style=flat-square' alt="version">
  <img src='https://img.shields.io/npm/l/express.svg' alt="license">
  <img src='https://img.shields.io/npm/dt/yoshino.svg?style=flat-square' alt="downloads">
  <a href='https://yoshino-ui.github.io'><img src='https://img.shields.io/badge/website%20-Yoshino-51b26d.svg'/></a>
</p>


## How to Design?
Yoshino本质上类似于Hexo，不同的样式风格组件类似于Hexo的各种theme，hexo官方仅提供了一套工具以及一个基础主题，Yoshino与其同理。

开发者只需要像配置Hexo主题一样使用即可拥有不同风格的组件，你甚至可以在同一个项目中使用cli输出多种不同风格的组件。

而不同主题的Yoshino需要开源社区完成，官方会提供类似的yoshino-theme-site来展示不同的主题，类似于[hexojs/site](https://github.com/hexojs/site)

![](https://pic1.zhimg.com/80/v2-3c24dc918db63fbd19f6531374014146_hd.jpg)

目前cli工具仅支持组件创建产出，例如创建自定义Alert组件
```
yoshino new Alert
```
以后cli可以通过类似以下的指令配置输出对应规范组件，例如输出material-ui规范的Alert组件
```
yoshino new Alert --theme material-ui
```
以及直接输出整个主题的组件库
```
yoshino new all --theme material-ui
```

## Feature
- 使用`TypeScript`开发，提供`d.ts`文件帮助开发者提高开发速度
- 提倡`OFA（one for all）`与`AFO（all for one）`概念，不同项目开发前通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目ui规范进行定制化开发产出。
- 除了简单通用的`ui`组件，`yoshino`抽离出了一些易用性比较高的特效(功能)组件，例如
  - Helpers
  - Ripple
  - Transitions

## Intro
`yoshino`组件库提供简单样式组件，可以通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目进行定制化开发。

将yoshino组件库less抽离出来维护，让开发者自定义维护。
例如需要自定义Alert样式
```js
import {Alert} from 'yoshino'；
import 'myAlert.less'
```

myAlert.less为用户自定义样式

yoshino根据开发者需要自定义的组件自定义生成对应开发模版

```js
yoshino new Alert
```

## Contributos
![](https://opencollective.com/yoshino/contributors.svg)

## 开发贡献流程
```js
npm run dev // 启动开发环境
npm run new ComponentName // 新建组件
```

## 参考
- [ant-design](https://github.com/ant-design/ant-design)
- [muse-ui](https://github.com/museui/muse-ui)

