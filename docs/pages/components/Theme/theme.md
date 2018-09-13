### 定制主题
`yoshino`默认提供了一套`UI`主题，由于利用`less`编写的`css`，并且将一些通用变量抽离出来，可以实现样式自定义化，包括但不限于主色、圆角、提示色、组件尺寸等配置。如果需要定制主题则需要在引入样式的文件的时候使用`.less`，组件`less`文件位于`yoshino/lib/${componentName}/styles/`，通用位于`yoshino/components/styles`。

### 样式变量
如果你的项目使用了`webpack`，那么可以通过变量覆盖的方式来实现主题定制化。
```less
@import '~yoshino/components/styles/index.less';

@primary-color: red;
```

如果你只需要简单的修改主色调，那么你也可以使用`less-loader`。
```js
{
  loader: 'less-loader',
  options: {
    modifyVars: {
      'primary-color': 'red',
  },
}
```

#### 按需加载配置路径需变更
##### 手动按需引入
```jsx
import Button from 'yoshino/lib/Button';
import 'yoshino/lib/Button/style/less.js';
```

###### 通用的按需加载方案（推荐）
在普通`js`项目中和`ts`项目中均可使用，官方推荐的使用方案

需要配合[ui-component-loader](https://github.com/gwuhaolin/ui-component-loader.git)使用实现自动按需加载。

首先安装`ui-component-loader`
```jsx
npm install ui-component-loader --save-dev
```

在`webpack`中添加`loader`配置如下
```jsx
{
  loader: 'ui-component-loader',
  options: {
    'lib': 'yoshino',
    'libDir': 'lib',
    'style': 'style/less.js',
  },
},
```

##### 在babel中使用按需加载
需要配合[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)使用实现自动按需加载。

首先安装`babel-plugin-import`
```jsx
npm install babel-plugin-import --save-dev
```

在`webpack`的`babel-loader`的`options`的`plugins`中添加配置如下
```jsx
options: {
  plugins: [["import", {
    "libraryName": "yoshino",
    "camel2DashComponentName": false,
    "style": (name) => `${name}/style/less.js`,
  }]],
},
```

### 更灵活的自定义方式 - `yoshino-cli`
通过[yoshino-cli](https://github.com/Yoshino-UI/yoshino-cli)根据项目进行定制化开发。

[yoshino-theme-project-demo](https://github.com/Yoshino-UI/yoshino-theme-project-demo)

#### 预览官方demo
- git clone https://github.com/Yoshino-UI/yoshino-theme-project-demo.git
- cd yoshino-theme-project-demo
- npm install
- npm run start

#### 定制组件简单步骤
- npm install yoshino-cli -g
- yoshino init
- yoshino new Button  -o src/yoshino-components
- you can find your Button in path `src/yoshino-components/Button`

