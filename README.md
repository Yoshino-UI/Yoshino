# Yoshino
Yoshino, 一个基于react的pc端组件库，名字源自轻小说作品《约会大作战》及其衍生作品中登场的人物。长相宛若法国娃娃般美丽的蓝发少女，有着梦幻般的外貌和娇小的身材。第二精灵，识别名为〈隐居者（Hermit）〉。生性温驯而胆小怕生，几乎不敢与人直接对话。左手拿着的兔子型的手偶四糸奈（よしのん）是独立的人格，也是她最好的朋友。

## 介绍
`yoshino`组件库提供简单样式组件，可以通过[yoshino-icing](https://github.com/Yoshino-UI/yoshino-icing)根据项目进行定制化开发。

将yoshino组件库less抽离出来维护，让开发者自定义维护。
例如需要自定义Alert样式
```
import {Alert} from 'yoshino'；
import 'myAlert.less'
```

myAlert.less为用户自定义样式

yoshino-icing根据开发者需要自定义的组件自定义生成对应开发模版

```
yoshino-icing new Alert
```

## 开发贡献流程
```
npm run dev // 启动开发环境
npm run new ComponentName // 新建组件
```
新增的组件需要在`styleguide.config.js`添加组件名配置


## 参考
- [ant-design](https://github.com/ant-design/ant-design)
- [muse-ui](https://github.com/museui/muse-ui)

