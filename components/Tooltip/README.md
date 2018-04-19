### 默认
```js
<div style={{padding: '30px 50px'}}>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Tooltip title="提示" placement="topLeft"><Button>topLeft</Button></Tooltip>
    <Tooltip title="提示" placement="top"><Button>top</Button></Tooltip>
    <Tooltip title="提示" placement="topRight"><Button>topRight</Button></Tooltip>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Tooltip title="提示" placement="leftTop"><Button>leftTop</Button></Tooltip>
    <Tooltip title="提示" placement="rightTop"><Button>rightTop</Button></Tooltip>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Tooltip title="提示" placement="left"><Button>left</Button></Tooltip>
    <Tooltip title="提示" placement="right"><Button>right</Button></Tooltip>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Tooltip title="提示" placement="leftBottom"><Button>leftBottom</Button></Tooltip>
    <Tooltip title="提示" placement="rightBottom"><Button>rightBottom</Button></Tooltip>
  </div>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Tooltip title="提示" placement="bottomLeft"><Button>bottomLeft</Button></Tooltip>
    <Tooltip title="提示" placement="bottom"><Button>bottom</Button></Tooltip>
    <Tooltip title="提示提示提示提示" placement="bottomRight"><Button>bottomRight</Button></Tooltip>
  </div>
</div>
```

### 受控
```js
initialState={visible: false};
<div>
    <Tooltip title="受控" placement="top" visible={state.visible}><Button>受控</Button></Tooltip>
    <Switch checked={state.visible} onChange={() => setState({visible: !state.visible})}/>
</div>
```


### 点击展示
```js
<div>
    <Tooltip title="受控" placement="top" trigger="click"><Button>受控</Button></Tooltip>
</div>
```