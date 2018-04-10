### 默认
```js
const StepsItem = Steps.Item;
initialState = {current: 0};
<div>
  <Button onClick={() => {
    const current = state.current - 1;
    if (current >= 0) {
      setState({current})
    } 
  }}>上一步</Button>
  <Button onClick={() => {
    const current = state.current + 1;
    if (current <= 2) {
      setState({current})
    }
  }}>下一步</Button>
  <Steps current={state.current}>
    <StepsItem title="第一步">
      第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一
    </StepsItem>
    <StepsItem title="第二步">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
    <StepsItem title="第二步">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
  </Steps>
</div>
```

### 出错
```js
const StepsItem = Steps.Item;
<div>
  <Steps size="small" current={2}>
    <StepsItem title="第一步">
      第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一
    </StepsItem>
    <StepsItem title="第二步">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
    <StepsItem title="第二步" status="error">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
  </Steps>
</div>
```

### 自定义图标
```js
const StepsItem = Steps.Item;
<div>
  <Steps size="small" current={2}>
    <StepsItem title="第一步" icon={<Icon type="help-buoy"/>}/>
    <StepsItem title="第二步" icon={<Icon type="android-favorite"/>}/>
    <StepsItem title="第三步" icon={<Icon type="android-contacts"/>}/>
  </Steps>
</div>
```

### 垂直步骤
```js
const StepsItem = Steps.Item;
initialState = {current: 0};
<div>
  <Button onClick={() => {
    const current = state.current - 1;
    if (current >= 0) {
      setState({current})
    } 
  }}>上一步</Button>
  <Button onClick={() => {
    const current = state.current + 1;
    if (current <= 2) {
      setState({current})
    }
  }}>下一步</Button>
  <Steps current={state.current} direction="vertical">
    <StepsItem title="第一步">
      第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一步第一
    </StepsItem>
    <StepsItem title="第二步">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
    <StepsItem title="第二步">
      第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步第二步
    </StepsItem>
  </Steps>
</div>
```