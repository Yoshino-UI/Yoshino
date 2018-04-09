### 默认
```js
const RadioGroup = Radio.Group;
<div>
  <RadioGroup name="test1" defaultValue={3}>
    <Radio value={1}>radio</Radio>
    <Radio value={2}>radio</Radio>
    <Radio value={3}>radio</Radio>
  </RadioGroup>
</div>
```

### 受控组件
```js
const RadioGroup = Radio.Group;
initialState = {value: 1};
<div>
  <RadioGroup name="test2" value={state.value} onChange={(value) => setState({value})}>
    <Radio value={1}>radio</Radio>
    <Radio value={2} disabled>radio</Radio>
    <Radio value={3}>radio</Radio>
  </RadioGroup>
</div>
```
