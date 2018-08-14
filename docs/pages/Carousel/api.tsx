export default [
  {
    title: "API",
    json: [
      {
        props: "autoplay",
        intro: "自动滚动",
        type: "boolean",
        defaultValue: "true",
      },
      {
        props: "interval",
        intro: "切换时间间隔，单位ms",
        type: "number",
        defaultValue: "3000",
      },
      {
        props: "shwoDots",
        intro: "是否显示指示点",
        type: "boolean",
        defaultValue: "true",
      },
      {
        props: "vertical",
        intro: "垂直展示",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "showControl",
        intro: "是否轮播控制器",
        type: "boolean",
        defaultValue: "true",
      },
      {
        props: "preIcon",
        intro: "自定义往前翻的icon",
        type: "ReactNode",
        defaultValue: "-",
      },
      {
        props: "nextIcon",
        intro: "自定义往后翻的icon",
        type: "ReactNode",
        defaultValue: "-",
      },
    ]
  },
  {
    title: 'API - 操作方法',
    json: [
      {
        props: 'goto',
        intro: '跳转到指定页',
        type: '(index: number) => void',
        defautValue: '-'
      },
      {
        props: 'pre',
        intro: '跳转前一页',
        type: '() => void',
        defautValue: '-'
      },
      {
        props: 'next',
        intro: '跳转到下一页',
        type: '() => void',
        defautValue: '-'
      }
    ]
  }
]
