# 快速开始
## 安装
```js
npm install yoshino
```

## 使用
### 基本使用
```js
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
```js
import Button from 'yoshino/lib/Button';
import 'yoshino/lib/Button/index.css';
```