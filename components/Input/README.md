### 默认
```js
<div>
  <Input size="small" header="http://" footer=".com"/><br/>
  <Input/><br/>
  <Input size="large" header="http://" footer={<Icon type="close" style={{fontSize: '20px', width: '50px'}}/>}/><br/>
</div>
```

### 自定义
```js
<div>
  <Input style={{width: '500px'}}  footer={<Button type="primary" style={{width: '100px'}}>搜索</Button>}/>
  <Input header={<Button type="primary" style={{width: '80px'}}>搜索</Button>}/>
  <Input
    style={{width: '500px'}}
    header={<Button type="primary" style={{width: '80px'}}>头部</Button>}
    footer={<Button type="primary" style={{width: '100px'}}>尾部</Button>}
    onChange={() => console.log('输入变化了')}
    onEnter={() => console.log('按了回车')}
  />
  
</div>
```
