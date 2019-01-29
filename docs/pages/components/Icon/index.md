## Icon 图标
展示对应的矢量化图标。

Icon组件的图标库采用了`Ionicons 4.4.2`，对图标的导入采用按需加载，你无须担心仅使用了一个字体就引入了所有图标文件。

如果不相信你可以按`F12`打开控制台，然后再该页面刷新，查看`network`的图标加载情况。

为了减少项目中的svg的http请求，使用了`Archer`异步缓存本地svg。

`Archer`全局唯一示例，修改配置请使用Icon.Archer.xxx调用对应方法，[Archerw文档地址](https://github.com/ShanaMaid/archer-svgs)
  
## 代码演示
