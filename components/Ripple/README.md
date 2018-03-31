### 特效包裹
```js
<div>
  <Ripple style={{display: 'block'}}>
  <Card 
    title="标题"
    extra={(
    <div><span>更多</span><Icon type="more"/></div>
    )}
    hover
    border
    shadow
  >
    <div>2342342343</div>
  </Card>
  </Ripple>
  <Ripple color="red"><Button type="primary"><Icon type="play"/>播放</Button></Ripple>
  <Ripple color="blue"><Button type="primary"><Icon type="pause"/>暂停</Button></Ripple>
  <Ripple color="yellow"><Button type="primary"><Icon type="skip-backward"/>上一首</Button></Ripple>
  <Ripple color="green"><Button type="primary">下一首<Icon type="skip-forward"/></Button></Ripple>
</div>
```

### 特效组合
特效组件是可以混合使用的
```js
<div>
 <Hover name="wobble-horizontal"><Ripple  color="green"><Button type="primary"><Icon type="play"/>播放</Button></Ripple></Hover>
</div>
```
