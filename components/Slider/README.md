### 默认
```js
<div>
  <Slider/>
</div>
```

### 自定义
```js
initialState={value: 0};
<div>
  <Slider
    value={state.value}
    min={-100}
    max={100}
    onChange={(value) => {
    console.log('当前值:', value);
    setState({value});
  }}/>
</div>
```

### 禁用
```js
<Slider value={40} disabled/>
```
