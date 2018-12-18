import * as React from 'react';
import { Table } from '@yoshino/components/';
import { IColumns } from '@yoshino/components/Table/Table';

export default function() {
  const colums: IColumns[] = [
    {
      title: '名字',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '身高',
      dataIndex: 'height',
      sorter: (a, b) => a - b,
      defaultSortOrder: 'descend'
    },
    {
      title: '体重',
      dataIndex: 'weight',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      sorter: (a, b) => a - b,
    },
  ];
  const data = [
    {
      name: 'shana',
      gender: 'gril',
      height: 146,
      weight: '38kg',
      age: 14,
    },
    {
      name: 'shana',
      gender: 'gril',
      height: 156,
      weight: '38kg',
      age: 15,
    },
    {
      name: 'shana3',
      gender: 'gril',
      height: 136,
      weight: '38kg',
      age: 13,
    }
  ];
  return (
    <Table
      columns={colums}
      data={data}
    />
  );
}
