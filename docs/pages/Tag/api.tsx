export default [
  {
    title: "API",
    json: [
      {
        props: "mode",
        intro: "标签模式",
        type: "'custom' | 'geek'",
        defaultValue: "custom",
      },
      {
        props: "color",
        intro: "颜色",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "closeable",
        intro: "是否可以关闭",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "onClose",
        intro: "关闭回调",
        type: "() => void",
        defaultValue: "-",
      },
    ]
  }
]
