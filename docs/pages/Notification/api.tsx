import * as configMd from './config.md';
import * as globalMd from './global.md';

export default [
  {
    title: "API",
    intro: configMd,
    json: [
      {
        props: "key",
        intro: "当前通知唯一标志",
        type: "string | number",
        defaultValue: "-",
      },
      {
        props: "duration",
        intro: "当前通知自动关闭时间，单位`ms`",
        type: "number",
        defaultValue: "5000",
      },
      {
        props: "icon",
        intro: "自定义图标",
        type: "ReactNode",
        defaultValue: "-",
      },
      {
        props: "message",
        intro: "通知信息详情",
        type: "ReactNode | string",
        defaultValue: "-",
      },
      {
        props: "title",
        intro: "通知信息标题",
        type: "ReactNode | string",
        defaultValue: "-",
      },
      {
        props: "onClose",
        intro: "点击关闭按钮时触发的回调函数",
        type: "() => void",
        defaultValue: "-",
      },
    ]
  },
  {
    title: "API - 全局配置",
    intro: globalMd,
    json: [
      {
        props: "vertical",
        intro: "竖直方向距离浏览器窗口间距，等同于`top`、`bottom`，单位`px`",
        type: "number",
        defaultValue: "24",
      },
      {
        props: "horizontal",
        intro: "水平方向距离浏览器窗口间距，等同于`left`、`right`，单位`px`",
        type: "number",
        defaultValue: "24",
      },
      {
        props: "duration",
        intro: "当前通知自动关闭时间，单位`ms`",
        type: "number",
        defaultValue: "5000",
      },
      {
        props: "placement",
        intro: "通知框位置",
        type: "`topLeft` | `topRight` | `bottomLeft` | `bottomRight`",
        defaultValue: "topRight",
      },
    ]
  },
]
