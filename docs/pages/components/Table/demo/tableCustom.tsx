import * as React from 'react';
import { Table } from '@yoshino/components/';

export interface IColumns {
  title: string;
  width?: number | string;
  dataIndex: string;
  fixed?: 'left' | 'right';
  style?: React.CSSProperties;
}

export default function() {
  const colums: IColumns[] = [
    {
      title: '名字',
      dataIndex: 'name',
      width: 300,
      fixed: 'left',
    },
    {
      title: '性别',
      width: 150,
      dataIndex: 'gender',
    },
    {
      title: '身高',
      width: 150,
      dataIndex: 'height'
    },
    {
      title: '体重',
      dataIndex: 'weight',
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 500,
    },
    {
      title: '年龄',
      width: 150,
      dataIndex: 'age',
      fixed: 'right',
    },
  ];
  const data: Array<{}> =  Array.apply(null, {length: 60});
  data.fill({
    name: 'shana我',
    gender: 'gril',
    height: 146,
    weight: '38kg',
    age: 14,
    address: '新世界红莲街灭世镇重生小街1号',
  }, 0, 60);
  return (
    <Table
      scroll={{x: 1700, y: 200}}
      columns={colums}
      data={data}
      fixedTitle
    />
  );
}
