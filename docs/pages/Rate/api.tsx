export default [
  {
    title: "API",
    json: [
      {
        props: "count",
        intro: "字符个数",
        type: "number",
        defaultValue: "5",
      },
      {
        props: "value",
        intro: "初始值",
        type: "number",
        defaultValue: "0",
      },
      {
        props: "half",
        intro: "是否允许半值",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "clear",
        intro: "是否允许清除",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "onChange",
        intro: "变化回调",
        type: "(value: number) => void;",
        defaultValue: "-",
      },
      {
        props: "character",
        intro: "自定义字符",
        type: "string | ReactNode",
        defaultValue: "-",
      },
    ]
  }
]
