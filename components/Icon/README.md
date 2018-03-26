### 自定义
```js
<div>
  <Icon type="home"/>
  <Icon type="home" style={{color: 'red', fontSize: 15}}/>
  <Icon type="home" style={{color: 'green', fontSize: 18}}/>
  <Icon type="home" style={{color: 'blue', fontSize: 21}}/>
  <Icon type="home" style={{color: 'gray', fontSize: 24}}/>
  <Icon type="home" style={{color: 'pink', fontSize: 27}}/>
  <Icon type="home" style={{color: 'red', fontSize: 30}}/>
</div>
```

### 图标
```js
const {iconName} = require('./iconName.js');
<div style= {{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flext-start',

}}>
{
  iconName.map((item) => {
    return (
      <div style= {{
        width: 80,
        textAlign: 'center',
        padding: 5,
      }}>
        <Icon type={item.name} style={{fontSize: 25}}/>
        <div style={{fontSize: 12}}>{item.name}</div>
      </div>
    )
  })
}
</div>
```
