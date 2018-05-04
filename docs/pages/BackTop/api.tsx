export default [
  {
    title: "API",
    json: [
      {
        props: "bottom",
        intro: "距离底部距离",
        type: "number",
        defaultValue: "800",
      },
      {
        props: "right",
        intro: "距离右侧距离",
        type: "number",
        defaultValue: "50",
      },
      {
        props: "height",
        intro: "触发backtop的高度",
        type: "number",
        defaultValue: "800",
      },
      {
        props: "duration",
        intro: "动画时间",
        type: "number",
        defaultValue: "500",
      },
      {
        props: "onBackTop",
        intro: "回调函数",
        type: "() => void",
        defaultValue: "-",
      },
    ]
  }
]
