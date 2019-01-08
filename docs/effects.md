特效组件是一种特殊的组件，在不影响子元素的内部表现的情况下为子元素装饰特效(我们约定经过特效组件修饰后的子元素表现形式统一为块内元素，如果你需要你可以通过style覆盖默认设定)。你可以把子元素理解为一个女孩，而特效组件则是打扮的衣服。因此，特效组件之间是可以相互嵌套的，即一个女孩可以同时穿多件好看的衣服，不过嵌套多了会引起性能上的问题，就好比一个女孩衣服穿多了会显得很笨重。

一个多重嵌套的例子
```js
<div>
  <Hover name="icon-buzz">
    <Hover name="wobble-horizontal">
      <Ripple  color="green">
        <Button type="primary"><Icon type="md-play" className="hvr-icon"/>播放</Button>
      </Ripple>
    </Hover>
  </Hover>
</div>
```