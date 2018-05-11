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
如果你想实现按需加载，可以通过以下的写法来实现。

### 按需引入
```jsx
import Button from 'yoshino/lib/Button';
import 'yoshino/lib/Button/index.css';
```

### 自动按需加载
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
