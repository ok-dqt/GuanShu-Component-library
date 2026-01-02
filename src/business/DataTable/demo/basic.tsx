import React, { useState, useCallback } from 'react';
import { DataTable } from '../index';
import type { DataTableColumn } from '../index';
import { Tag, Card, Space, Typography } from 'antd';

const { Text } = Typography;

// 生成 Mock 数据
const generateMockData = (count: number, startIndex: number = 0) => {
  return Array.from({ length: count }, (_, index) => ({
    key: startIndex + index + 1,
    productName: `商品${startIndex + index + 1}`,
    sales: Math.floor(Math.random() * 10000),
    revenue: Math.floor(Math.random() * 100000),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
  }));
};

const columns: DataTableColumn[] = [
  { title: '商品名称', dataIndex: 'productName', width: 200, minWidth: 150 },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 120,
    minWidth: 100,
    sorter: true,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '销售额',
    dataIndex: 'revenue',
    width: 150,
    minWidth: 120,
    sorter: true,
    align: 'right',
    render: (text) => `¥${text.toLocaleString()}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    minWidth: 80,
    align: 'center',
    render: (text) =>
      text === 'active' ? (
        <Tag color="green">在售</Tag>
      ) : (
        <Tag color="red">下架</Tag>
      ),
  },
];

export default () => {
  // 无限滚动示例的状态
  const [scrollData, setScrollData] = useState(() => generateMockData(15));
  const [scrollLoading, setScrollLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = useCallback(() => {
    setScrollLoading(true);
    setTimeout(() => {
      const newData = generateMockData(10, scrollData.length);
      setScrollData((prev) => [...prev, ...newData]);
      setScrollLoading(false);
      if (scrollData.length + 10 >= 50) {
        setHasMore(false);
      }
    }, 1000);
  }, [scrollData.length]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 示例1: 分页加载 + 手动列宽 + 固定高度 */}
      <Card size="small" title="分页加载 + 手动列宽 + 固定高度">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          columnLayout="auto" | loadMode="pagination" | heightMode="fixed"
        </Text>
        <DataTable
          columns={columns}
          dataSource={generateMockData(30)}
          columnLayout="auto"
          loadMode="pagination"
          heightMode="fixed"
          height={300}
          pagination={{
            pageSize: 10,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </Card>

      {/* 示例2: 无限滚动 + 固定高度 */}
      <Card size="small" title="无限滚动 + 固定高度">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          loadMode="scroll" | heightMode="fixed" | 滚动到底部自动加载更多
        </Text>
        <DataTable
          columns={columns}
          dataSource={scrollData}
          loadMode="scroll"
          heightMode="fixed"
          height={300}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          loading={scrollLoading}
        />
      </Card>

      {/* 示例3: 平均分布列宽 */}
      <Card size="small" title="平均分布列宽">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          columnLayout="flex" | 列宽自动平均分配
        </Text>
        <DataTable
          columns={columns}
          dataSource={generateMockData(5)}
          columnLayout="flex"
          loadMode="pagination"
          pagination={false}
        />
      </Card>

      {/* 示例4: 自适应容器高度 */}
      <Card size="small" title="自适应容器高度">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          heightMode="auto" | 表格高度跟随父容器
        </Text>
        <div style={{ height: 250, border: '1px dashed #d9d9d9', padding: 8 }}>
          <DataTable
            columns={columns}
            dataSource={generateMockData(20)}
            heightMode="auto"
            loadMode="pagination"
            pagination={false}
          />
        </div>
      </Card>
    </Space>
  );
};
