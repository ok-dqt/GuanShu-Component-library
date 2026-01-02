import React from 'react';
import { DataTable } from '../index';
import { Tag } from 'antd';

// Mock 数据
const mockData = Array.from({ length: 20 }, (_, index) => ({
  key: index + 1,
  productName: `商品${index + 1}`,
  sales: Math.floor(Math.random() * 10000),
  revenue: Math.floor(Math.random() * 100000),
  status: Math.random() > 0.5 ? 'active' : 'inactive',
}));

export default () => {
  return (
    <DataTable
      columns={[
        { title: '商品名称', dataIndex: 'productName', width: 200 },
        {
          title: '销量',
          dataIndex: 'sales',
          width: 120,
          sorter: true,
          render: (text) => text.toLocaleString(),
        },
        {
          title: '销售额',
          dataIndex: 'revenue',
          width: 150,
          sorter: true,
          render: (text) => `¥${text.toLocaleString()}`,
        },
        {
          title: '状态',
          dataIndex: 'status',
          width: 100,
          render: (text) =>
            text === 'active' ? (
              <Tag color="green">在售</Tag>
            ) : (
              <Tag color="red">下架</Tag>
            ),
        },
      ]}
      dataSource={mockData}
    />
  );
};
