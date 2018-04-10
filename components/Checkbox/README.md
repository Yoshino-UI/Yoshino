### 默认
```js
const CheckboxGroup = Checkbox.Group;
<div>
  <CheckboxGroup name="test1" defaultValue={[3, 2]}>
    <Checkbox value={1}>苹果</Checkbox>
    <Checkbox value={2}>栗子</Checkbox>
    <Checkbox value={3}>棒槌</Checkbox>
  </CheckboxGroup>
</div>
```

### 受控组件
```js
const CheckboxGroup = Checkbox.Group;
initialState = {value: [1, 2]};
<div>
  <CheckboxGroup name="test2" value={state.value} onChange={(value) => setState({value})}>
    <Checkbox value={1}>番薯</Checkbox>
    <Checkbox value={2} disabled>地瓜</Checkbox>
    <Checkbox value={3}>铁板烧</Checkbox>
  </CheckboxGroup>
</div>
```
