export default [
  {
    title: "API",
    json: [
      {
        props: "value",
        intro: "受控 - 输入框的值",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "defaultValue",
        intro: "输入框的值",
        type: "string",
        defaultValue: "''",
      },
      {
        props: "size",
        intro: "组件大小",
        type: "'small' | 'default' | 'large'",
        defaultValue: "default",
      },
      {
        props: "onEnter",
        intro: "按下回车键的回调事件",
        type: "() => void;",
        defaultValue: "-",
      },
      {
        props: "header",
        intro: "输入框头部",
        type: "ReactNode | string",
        defaultValue: "-",
      },
      {
        props: "footer",
        intro: "输入框尾部",
        type: "ReactNode | string",
        defaultValue: "-",
      },
      {
        props: "headerStyle",
        intro: "输入框头部style",
        type: "CSSProperties",
        defaultValue: "-",
      },
      {
        props: "footerStyle",
        intro: "输入框尾部style",
        type: "CSSProperties",
        defaultValue: "-",
      },
    ]
  }
]
