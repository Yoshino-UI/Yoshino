# 快速开始
## 安装
```js
npm install yoshino
```

## 使用
### 基本使用
```jsx
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

### 引入全局样式
```js
import 'yoshino/lib/index.css'; 
```
## 按需加载
如果你想实现按需加载，可以通过以下三种方案解决。

### 手动按需引入
```jsx
import Button from 'yoshino/lib/Button';
import 'yoshino/lib/Button/index.css';
```

### 通用的按需加载方案（推荐）
在普通`js`项目中和`ts`项目中均可使用，官方推荐的使用方案

需要配合[ui-component-loader](https://github.com/gwuhaolin/ui-component-loader.git)使用实现自动按需加载。

首先安装`ui-component-loader`
```jsx
npm install ui-component-loader --save-dev
```

在`webpack`中添加`loader`配置如下
```jsx
{
  loader: 'ui-component-loader',
  options: {
    'lib': 'yoshino',
    'libDir': 'lib',
    'style': 'index.css',
  },
},
```

### 在babel中使用按需加载
需要配合[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)使用实现自动按需加载。

首先安装`babel-plugin-import`
```jsx
npm install babel-plugin-import --save-dev
```

在`webpack`的`babel-loader`的`options`的`plugins`中添加配置如下
```jsx
options: {
  plugins: [["import", {
    "libraryName": "yoshino",
    "camel2DashComponentName": false,
    "style": (name) => `${name}/index.css`,
  }]],
},
```


