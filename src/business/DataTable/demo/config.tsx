import React, { useState } from 'react';
import { DataTable } from '../index';
import { Space, Switch, Select, Card, Divider, Tag } from 'antd';
import type { DataTableColumn } from '../index';

// Mock 数据
const generateMockData = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    key: index + 1,
    productName: `商品${index + 1}`,
    sales: Math.floor(Math.random() * 10000),
    revenue: Math.floor(Math.random() * 100000),
    clicks: Math.floor(Math.random() * 5000),
    conversion: (Math.random() * 0.2).toFixed(4),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
  }));
};

export default () => {
  const [showPagination, setShowPagination] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [sortable, setSortable] = useState(true);
  const [showRowSelection, setShowRowSelection] = useState(false);

  const mockData = generateMockData();

  const columns: DataTableColumn[] = [
    {
      title: '商品名称',
      dataIndex: 'productName',
      width: 200,
    },
    {
      title: '销量',
      dataIndex: 'sales',
      width: 120,
      sorter: sortable,
      render: (text) => text.toLocaleString(),
    },
    {
      title: '销售额',
      dataIndex: 'revenue',
      width: 150,
      sorter: sortable,
      render: (text) => `¥${text.toLocaleString()}`,
    },
    {
      title: '点击量',
      dataIndex: 'clicks',
      width: 120,
      sorter: sortable,
      render: (text) => text.toLocaleString(),
    },
    {
      title: '转化率',
      dataIndex: 'conversion',
      width: 120,
      sorter: sortable,
      render: (text) => `${(parseFloat(text) * 100).toFixed(2)}%`,
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
  ];

  return (
    <div>
      <Card
        title="表格配置"
        size="small"
        style={{ marginBottom: 16 }}
        bodyStyle={{ padding: '12px 16px' }}
      >
        <Space size="large" wrap>
          <Space>
            <span>显示分页：</span>
            <Switch checked={showPagination} onChange={setShowPagination} />
          </Space>

          <Space>
            <span>每页条数：</span>
            <Select
              value={pageSize}
              onChange={setPageSize}
              style={{ width: 80 }}
              options={[
                { value: 5, label: '5' },
                { value: 10, label: '10' },
                { value: 20, label: '20' },
                { value: 50, label: '50' },
              ]}
            />
          </Space>

          <Space>
            <span>加载状态：</span>
            <Switch
              checked={loading}
              onChange={(checked) => {
                setLoading(checked);
                if (checked) {
                  setTimeout(() => setLoading(false), 2000);
                }
              }}
            />
          </Space>

          <Space>
            <span>列排序：</span>
            <Switch checked={sortable} onChange={setSortable} />
          </Space>

          <Space>
            <span>行选择：</span>
            <Switch
              checked={showRowSelection}
              onChange={setShowRowSelection}
            />
          </Space>
        </Space>
      </Card>

      <DataTable
        columns={columns}
        dataSource={mockData}
        pagination={
          showPagination
            ? {
                pageSize,
                showSizeChanger: true,
                showTotal: (total) => `共 ${total} 条数据`,
              }
            : false
        }
        loading={loading}
        rowSelection={
          showRowSelection
            ? {
                type: 'checkbox',
                onChange: (selectedRowKeys) => {
                  console.log('选中行:', selectedRowKeys);
                },
              }
            : undefined
        }
      />
    </div>
  );
};
