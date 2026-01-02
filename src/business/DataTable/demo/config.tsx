import React, { useState, useCallback } from 'react';
import { DataTable } from '../index';
import type { DataTableColumn, ColumnLayout, LoadMode, HeightMode } from '../index';
import { Space, Switch, Select, Card, Divider, Tag, InputNumber, Radio, Typography } from 'antd';

const { Text } = Typography;

// 生成 Mock 数据
const generateMockData = (count: number, startIndex: number = 0) => {
  return Array.from({ length: count }, (_, index) => ({
    key: startIndex + index + 1,
    productName: `商品${startIndex + index + 1}`,
    sales: Math.floor(Math.random() * 10000),
    revenue: Math.floor(Math.random() * 100000),
    clicks: Math.floor(Math.random() * 5000),
    conversion: (Math.random() * 0.2).toFixed(4),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
  }));
};

export default () => {
  // 数据状态
  const [dataSource, setDataSource] = useState(() => generateMockData(20));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 列布局配置
  const [columnLayout, setColumnLayout] = useState<ColumnLayout>('auto');

  // 加载模式配置
  const [loadMode, setLoadMode] = useState<LoadMode>('pagination');
  const [pageSize, setPageSize] = useState(10);

  // 高度配置
  const [heightMode, setHeightMode] = useState<HeightMode>('fixed');
  const [height, setHeight] = useState<number>(400);

  // 其他配置
  const [sortable, setSortable] = useState(true);
  const [showRowSelection, setShowRowSelection] = useState(false);

  // 模拟加载更多
  const handleLoadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const newData = generateMockData(10, dataSource.length);
      setDataSource((prev) => [...prev, ...newData]);
      setLoading(false);
      // 模拟加载到 50 条后没有更多数据
      if (dataSource.length + 10 >= 50) {
        setHasMore(false);
      }
    }, 1000);
  }, [dataSource.length]);

  // 重置数据
  const handleReset = () => {
    setDataSource(generateMockData(20));
    setHasMore(true);
  };

  const columns: DataTableColumn[] = [
    {
      title: '商品名称',
      dataIndex: 'productName',
      width: 200,
      minWidth: 150,
    },
    {
      title: '销量',
      dataIndex: 'sales',
      width: 120,
      minWidth: 100,
      sorter: sortable,
      align: 'right',
      render: (text) => text.toLocaleString(),
    },
    {
      title: '销售额',
      dataIndex: 'revenue',
      width: 150,
      minWidth: 120,
      sorter: sortable,
      align: 'right',
      render: (text) => `¥${text.toLocaleString()}`,
    },
    {
      title: '点击量',
      dataIndex: 'clicks',
      width: 120,
      minWidth: 100,
      sorter: sortable,
      align: 'right',
      render: (text) => text.toLocaleString(),
    },
    {
      title: '转化率',
      dataIndex: 'conversion',
      width: 120,
      minWidth: 100,
      sorter: sortable,
      align: 'right',
      render: (text) => `${(parseFloat(text) * 100).toFixed(2)}%`,
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

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 列布局配置 */}
      <Card size="small" title="一、列布局模式">
        <Space size="large">
          <Radio.Group
            value={columnLayout}
            onChange={(e) => setColumnLayout(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="auto">手动控制 (auto)</Radio.Button>
            <Radio.Button value="flex">平均分布 (flex)</Radio.Button>
          </Radio.Group>
          <Text type="secondary">
            {columnLayout === 'auto'
              ? '列宽按 column.width 配置'
              : '列宽平均分布，忽略 width 配置'}
          </Text>
        </Space>
      </Card>

      {/* 加载模式配置 */}
      <Card size="small" title="二、加载模式">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space size="large">
            <Radio.Group
              value={loadMode}
              onChange={(e) => {
                setLoadMode(e.target.value);
                handleReset();
              }}
              optionType="button"
              buttonStyle="solid"
            >
              <Radio.Button value="pagination">分页加载</Radio.Button>
              <Radio.Button value="scroll">无限滚动</Radio.Button>
            </Radio.Group>
            <Text type="secondary">
              {loadMode === 'pagination'
                ? '使用分页器控制数据展示'
                : '滚动到底部自动加载更多'}
            </Text>
          </Space>

          {loadMode === 'pagination' && (
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
          )}

          {loadMode === 'scroll' && (
            <Space>
              <Text>已加载 {dataSource.length} 条</Text>
              <Text type="secondary">
                {hasMore ? '（滚动加载更多）' : '（已全部加载）'}
              </Text>
            </Space>
          )}
        </Space>
      </Card>

      {/* 高度配置 */}
      <Card size="small" title="三、高度模式">
        <Space size="large">
          <Radio.Group
            value={heightMode}
            onChange={(e) => setHeightMode(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="fixed">固定高度</Radio.Button>
            <Radio.Button value="auto">自适应容器</Radio.Button>
          </Radio.Group>

          {heightMode === 'fixed' && (
            <Space>
              <span>高度：</span>
              <InputNumber
                value={height}
                onChange={(val) => setHeight(val || 400)}
                min={200}
                max={800}
                step={50}
                style={{ width: 100 }}
                addonAfter="px"
              />
            </Space>
          )}

          <Text type="secondary">
            {heightMode === 'fixed'
              ? '表格使用固定高度，超出部分滚动'
              : '表格高度自适应父容器'}
          </Text>
        </Space>
      </Card>

      {/* 其他配置 */}
      <Card size="small" title="其他配置">
        <Space size="large" wrap>
          <Space>
            <span>列排序：</span>
            <Switch checked={sortable} onChange={setSortable} />
          </Space>

          <Space>
            <span>行选择：</span>
            <Switch checked={showRowSelection} onChange={setShowRowSelection} />
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
        </Space>
      </Card>

      <Divider style={{ margin: '8px 0' }} />

      {/* 表格预览 */}
      <Card
        size="small"
        title="表格预览"
        extra={
          <Text type="secondary">
            columnLayout: {columnLayout} | loadMode: {loadMode} | heightMode:{' '}
            {heightMode}
          </Text>
        }
      >
        <DataTable
          columns={columns}
          dataSource={dataSource}
          columnLayout={columnLayout}
          loadMode={loadMode}
          heightMode={heightMode}
          height={height}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          pagination={
            loadMode === 'pagination'
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
      </Card>
    </Space>
  );
};
