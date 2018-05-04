export default [
  {
    title: "API",
    json: [
      {
        props: "size",
        intro: "组件大小",
        type: "'default' | 'small'",
        defaultValue: "default",
      },
      {
        props: "onChange",
        intro: "变化回调",
        type: "(checked: boolean) => void",
        defaultValue: "-",
      },
      {
        props: "checked",
        intro: "当前是否选中",
        type: "boolean",
        defaultValue: "-",
      },
      {
        props: "defaultChecked",
        intro: "初始值是否选中",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "disabled",
        intro: "是否禁用",
        type: "boolean",
        defaultValue: "false",
      },
    ]
  }
]
