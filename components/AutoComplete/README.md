### 默认
```js
<div>
  <AutoComplete dataSource={['1', 'asdad', '777',]}/>
</div>
```

### 自定义筛选
```js
initialState = {val: ''};
<div>
  <AutoComplete
    value={state.val}
    onFilter={(value, dataSource) => {
      if (value !== '') {
        return [value, `${value}${value}`, `${value}${value}${value}`];
      }
      return [];
    }}
    onChange={(val) => setState({val})}  
  />
</div>
```
