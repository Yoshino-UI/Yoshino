# Yoshino
[![build](https://img.shields.io/npm/v/yoshino.svg?style=flat-square)](https://www.npmjs.com/package/yoshino) 
[![build](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/yoshino)
[![download](https://img.shields.io/npm/dt/yoshino.svg?style=flat-square)](https://www.npmjs.com/package/yoshino)

## 官网
[首页](https://yoshino-ui.github.io)
[文档](https://yoshino-ui.github.io/#/components/yoshino)

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

