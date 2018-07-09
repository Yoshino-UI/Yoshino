# Yoshino
[![build](https://img.shields.io/npm/v/yoshino.svg?style=flat-square)](https://www.npmjs.com/package/yoshino) 
[![build](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/yoshino)
[![download](https://img.shields.io/npm/dt/yoshino.svg?style=flat-square)](https://www.npmjs.com/package/yoshino)

## 特性
- 使用`TypeScript`开发，提供`d.ts`文件帮助开发者提高开发速度
- 提倡`OFA（one for all）`与`AFO（all for one）`概念，不同项目开发前通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目ui规范进行定制化开发产出。
- 除了简单通用的`ui`组件，`yoshino`抽离出了一些易用性比较高的特效(功能)组件，例如
  - Helpers
  - Ripple
  - Transitions

## 介绍
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

## 开发贡献流程
```js
npm run dev // 启动开发环境
npm run new ComponentName // 新建组件
```

## 参考
- [ant-design](https://github.com/ant-design/ant-design)
- [muse-ui](https://github.com/museui/muse-ui)

