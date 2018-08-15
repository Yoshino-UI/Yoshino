import * as React from 'react';
import { Table } from '../../../../components/';

export default function() {
  const colums = [
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
      dataIndex: 'height'
    },
    {
      title: '体重',
      dataIndex: 'weight',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ];
  const data: Array<{}> =  Array.apply(null, {length: 60});
  data.fill({
    name: 'shana',
    gender: 'gril',
    height: 146,
    weight: '38kg',
    age: 14,
  }, 0, 60);
  return (
    <Table
      scroll={{x: '100%', y: 200}}
      columns={colums}
      data={data}
      fixedTitle={false}
    />
  );
}
