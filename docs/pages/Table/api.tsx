export default [
  {
    title: "API",
    json: [
      {
        props: "data",
        intro: "数据源",
        type: "object[]",
        defaultValue: "-",
      },
      {
        props: "columns",
        intro: "描述数据源和控制表格渲染，详情见下面`API - columns`",
        type: "Columns[]",
        defaultValue: "-",
      },
      {
        props: "fixedTitle",
        intro: "表格锁头",
        type: "boolean",
        defaultValue: "true",
      },
      {
        props: "scroll",
        intro: "控制表格可视区域宽高",
        type: "{`x`: `number` | `string`; `y`: `number`;}",
        defaultValue: "-",
      },
    ]
  },
  {
    title: "API - colunms",
    json: [
      {
        props: "title",
        intro: "表格标题",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "dataIndex",
        intro: "用于描述`title`对应的data中的`key`",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "width",
        intro: "当锁列时建议使用width描述每列宽度，否则有可能出现列不对齐的问题",
        type: "number",
        defaultValue: "-",
      },
      {
        props: "fixed",
        intro: "是否开启锁列，请把锁列的对象置于`columns`的数组头部",
        type: "boolean",
        defaultValue: "false",
      },
    ]
  }
]
