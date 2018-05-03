export default [
  {
    title: "API",
    json: [
      {
        props: "value",
        intro: "输入框的值",
        type: "number",
        defaultValue: "0",
      },
      {
        props: "size",
        intro: "组件大小",
        type: "'small' | 'default' | 'large';",
        defaultValue: "default",
      },
      {
        props: "onChange",
        intro: "变化回调事件",
        type: "(value: number) => void",
        defaultValue: "-",
      },
      {
        props: "min",
        intro: "最小值",
        type: "number",
        defaultValue: "0",
      },
      {
        props: "max",
        intro: "最大值",
        type: "number",
        defaultValue: "10",
      },
      {
        props: "step",
        intro: "步长",
        type: "number",
        defaultValue: "1",
      },
    ]
  }
]
