export default [
  {
    title: "Checkbox.Group",
    json: [
      {
        props: "value",
        intro: "选中的值",
        type: "any[]",
        defaultValue: "-",
      },
      {
        props: "onChange",
        intro: "变化回调",
        type: "(values: any[]) => void;",
        defaultValue: "-",
      },
      {
        props: "defaultValue",
        intro: "默认选中值",
        type: "any[]",
        defaultValue: "[]",
      },
    ]
  },
  {
    title: "Checkbox",
    json: [
      {
        props: "value",
        intro: "值",
        type: "any[]",
        defaultValue: "-",
      },
      {
        props: "onChange",
        intro: "变化回调",
        type: "(value: any) => void;",
        defaultValue: "-",
      },
      {
        props: "checked",
        intro: "是否选中",
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
