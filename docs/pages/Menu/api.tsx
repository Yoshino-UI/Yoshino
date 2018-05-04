export default [
  {
    title: "Menu",
    json: [
      {
        props: "activeKey",
        intro: "受控 - 激活key",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "defaultActiveKey",
        intro: "非受控 - 激活key",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "openKeys",
        intro: "受控 - 展开key",
        type: "string[]",
        defaultValue: "-",
      },
      {
        props: "defaultOpenKeys",
        intro: "非受控 - 展开key",
        type: "string[]",
        defaultValue: "`[]`",
      },
      {
        props: "onSelect",
        intro: "item - 选中回调",
        type: "(activeKey: string) => void",
        defaultValue: "-",
      },
      {
        props: "onOpenChange",
        intro: "展开回调",
        type: "(openKeys: string[]) => void",
        defaultValue: "-",
      },
    ]
  },
  {
    title: "Menu.SubMenu",
    json: [
      {
        props: "title",
        intro: "标题",
        type: "string | React.ReactNode",
        defaultValue: "-",
      },
      {
        props: "keyId",
        intro: "唯一标志",
        type: "string",
        defaultValue: "-",
      },
      {
        props: "disabled",
        intro: "禁用",
        type: "boolean",
        defaultValue: "`false`",
      },
    ]
  },
  {
    title: "Menu.ItemGroup",
    json: [
      {
        props: "title",
        intro: "标题",
        type: "string | React.ReactNode",
        defaultValue: "-",
      },
      {
        props: "keyId",
        intro: "唯一标志",
        type: "string",
        defaultValue: "-",
      },
    ]
  },
  {
    title: "Menu.Item",
    json: [
      {
        props: "keyId",
        intro: "唯一标志",
        type: "string",
        defaultValue: "-",
      },
    ]
  },
]
