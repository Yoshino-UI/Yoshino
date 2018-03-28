### 默认
```js
<Rate/>
```

### 自定义
```js
<div>
  <Rate character="牛" clear onChange={(v) => console.log(`当前得分：${v}`)}/>
  <Rate character={<Icon type="social-github" style={{fontSize: '30px'}}/>} clear half onChange={(v) => console.log(`当前得分：${v}`)}/>
</div>
```
