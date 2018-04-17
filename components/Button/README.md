### 默认
```js
<div>
  <Button type="primary" onClick={() => console.log(1)}>Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="danger">Danger</Button>
  <Button type="primary" shape="circle" icon="arrow-up-a"/>
</div>
```

### 带图标
```js
<div>
  <Button type="primary" icon="play">播放</Button>
  <Button type="primary" icon="pause">暂停</Button>
  <Button type="primary" icon="skip-backward">上一首</Button>
  <Button type="primary" icon="skip-forward" tail>下一首</Button>
</div>
```

### 各种样式
```js
<div>
  <Button type="primary" shape="circle" icon="arrow-up-a"/>
  <Button shape="circle" icon="arrow-up-a"/>
  <Button type="dashed" shape="circle" icon="arrow-up-a"/>
  <Button type="danger" shape="circle" icon="arrow-up-a"/>
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

### 加载组件
```js
initialState = {loading: false};
<div>
  <Button
    type="primary"
    icon="play"
    loading={state.loading}
    onClick={() => {
      setState({loading: true});
      setTimeout(() => {
        setState({loading: false});
      }, 2000);
    }}
  >
    播放
  </Button>
</div>
```
