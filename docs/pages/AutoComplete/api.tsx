export default [
  {
    title: 'API',
    json: [
      {
        props: "dataSource",
        intro: "自动补全数据源",
        type: "any[]",
        defaultValue: "[]",
      },
      {
        props: "activeFirstOption",
        intro: "高亮第一项",
        type: "boolean",
        defaultValue: "false",
      },
      {
        props: "onFilter",
        intro: "自定义过滤函数",
        type: "(value: any, dataSource: any[]) => string[];",
        defaultValue: "-",
      },
    ]
  }
]