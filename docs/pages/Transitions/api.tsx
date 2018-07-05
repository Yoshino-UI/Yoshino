export default [
  {
    title: "API - Expand",
    intro: "Transitions.Expand",
    json: [
      {
        props: "timeout",
        intro: "动画时间",
        type: "number",
        defaultValue: "-",
      },
      {
        props: "active",
        intro: "激活状态",
        type: "boolean",
        defaultValue: "-",
      },
    ]
  },
  {
    title: "API - Slide",
    intro: "Transitions.Slide",
    json: [
      {
        props: "timeout",
        intro: "动画时间",
        type: "number",
        defaultValue: "-",
      },
      {
        props: "active",
        intro: "激活状态",
        type: "boolean",
        defaultValue: "-",
      },
      {
        props: "direction",
        intro: "方向",
        type: "`left` | `top` | `right` | `bottom`",
        defaultValue: "-",
      },
    ]
  }
]
