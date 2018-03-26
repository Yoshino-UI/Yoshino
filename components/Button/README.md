### 默认
```js
<div>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button  type="dashed">Dashed</Button>
  <Button type="danger">Danger</Button>
  <Button type="primary" shape="circle"><Icon type="arrow-up-a"/></Button>
</div>
```

### 带图标
```js
<div>
  <Button type="primary"><Icon type="play"/>播放</Button>
  <Button type="primary"><Icon type="pause"/>暂停</Button>
  <Button type="primary"><Icon type="skip-backward"/>上一首</Button>
  <Button type="primary">下一首<Icon type="skip-forward"/></Button>
</div>
```

### 各种样式
```js
<div>
  <Button type="primary" shape="circle"><Icon type="arrow-up-a"/></Button>
  <Button shape="circle"><Icon type="arrow-up-a"/></Button>
  <Button type="dashed" shape="circle"><Icon type="arrow-up-a"/></Button>
  <Button type="danger" shape="circle"><Icon type="arrow-up-a"/></Button>
</div>
```

### 禁用
```js
<div>
  <Button disabled type="primary">Primary</Button>
  <Button size="large">Default</Button>
  <Button disabled type="dashed">Dashed</Button>
  <Button size="small" type="danger">Danger</Button>
</div>
```

### 幽灵模式
```js
<div style={{padding: 10, backgroundColor: '#bec8c8'}}>
  <Button ghost type="primary">Primary</Button>
  <Button ghost size="large">Default</Button>
  <Button ghost type="dashed">Dashed</Button>
  <Button ghost size="small" type="danger">Danger</Button>
</div>
```
