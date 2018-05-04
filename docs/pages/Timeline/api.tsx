export default [
  {
    title: "Timeline",
    json: [
      {
        props: "iconWidth",
        intro: "图标宽度",
        type: "number",
        defaultValue: "15",
      },
      {
        props: "iconColor",
        intro: "图标颜色",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "iconType",
        intro: "图标类型",
        type: "'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",
        defaultValue: "solid",
      },
      {
        props: "iconLine",
        intro: "图标线",
        type: "string",
        defaultValue: "2",
      },
      {
        props: "lineColor",
        intro: "线条颜色",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "lineType",
        intro: "线条类型",
        type: "'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",
        defaultValue: "solid",
      },
      {
        props: "lineWidth",
        intro: "线条宽度",
        type: "number",
        defaultValue: "2",
      },
    ]
  },
  {
    title: "Timeline.Item",
    json: [
      {
        props: "iconColor",
        intro: "图标颜色",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "iconType",
        intro: "图标类型",
        type: "'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",
        defaultValue: "-",
      },
      {
        props: "iconLine",
        intro: "图标线",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "lineColor",
        intro: "线条颜色",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "lineType",
        intro: "线条类型",
        type: "'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'",
        defaultValue: "-",
      },
      {
        props: "time",
        intro: "时间",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "icon",
        intro: "自定义图标",
        type: "ReactNode",
        defaultValue: "-",
      },
    ]
  }
]
