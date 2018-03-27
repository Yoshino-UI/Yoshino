### 默认
```js
<Timeline>
  <Timeline.Item time="2017年 4月 4日">
    <span>清明节</span>
  </Timeline.Item>
  <Timeline.Item time="2017年 5月 1日">
    <span>劳动节</span>
  </Timeline.Item>
  <Timeline.Item time="2017年 6月 1日">
    <span>儿童节</span>
  </Timeline.Item>
  <Timeline.Item time="2017年 8月 1日">
    <span>建军节</span>
  </Timeline.Item>
  <Timeline.Item time="2017年 10月 1日">
    <span>国庆节</span>
  </Timeline.Item>
  <Timeline.Item time="2017年 11月 11日">
    <span>光棍节</span>
  </Timeline.Item>
  <Timeline.Item>
    <span>更多</span>
  </Timeline.Item>
</Timeline>
```


### 自定义
```js
<Timeline lineColor="black" lineType="dashed">
  <Timeline.Item iconColor="red" iconType="dotted">
    <span>发布1.0版本</span>
  </Timeline.Item>
  <Timeline.Item lineType="solid">
    <span>发布1.1版本</span>
  </Timeline.Item>
  <Timeline.Item icon={<Icon type="social-twitter-outline"/>}>
    <span>自定义图标</span>
  </Timeline.Item>
  <Timeline.Item lineColor="#3476db">
    <span>发布2.0版本</span>
  </Timeline.Item>
  <Timeline.Item iconColor="blue">
    <span>发布2.1版本</span>
  </Timeline.Item>
  <Timeline.Item iconLine="5">
    <span>发布2.2版本</span>
  </Timeline.Item>
</Timeline>
```
