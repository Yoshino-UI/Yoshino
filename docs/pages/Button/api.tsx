export default [
  {
    title: "API",
    json: [
      {
        props: "disabled",
        intro: "是否禁用",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "type",
        intro: "按钮类型",
        type: "primary, dashed, danger, default",
        defaultValue: "default",
      },
      {
        props: "shape",
        intro: "形状",
        type: "circle",
        defaultValue: "-",
      },
      {
        props: "size",
        intro: "按钮大小",
        type: "small, large, default",
        defaultValue: "default",
      },
      {
        props: "ghost",
        intro: "幽灵模式",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "icon",
        intro: "string, ReactNode",
        type: "string, ReactNode",
        defaultValue: "-",
      },
      {
        props: "tail",
        intro: "图标所在位置为尾部",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "loading",
        intro: "加载状态",
        type: "boolean",
        defaultValue: "false",
      },
    ]
  }
]