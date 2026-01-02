import React from 'react';
import { ComponentInfo, ComponentCategory } from './types';

// 导入数据展示组件
import { StatisticCard } from '../src/data-display/StatisticCard';
import { StatusTag } from '../src/data-display/StatusTag';
import { TrendIndicator } from '../src/data-display/TrendIndicator';
import { FilterTags } from '../src/data-display/FilterTags';
import { ModeTabs } from '../src/data-display/ModeTabs';
import { PaginationFooter } from '../src/data-display/PaginationFooter';
import { MediaPreview } from '../src/data-display/MediaPreview';
import { OverviewItem } from '../src/data-display/OverviewItem';

// 导入基础组件
import { Button } from '../src/basic/Button';
import { DataItem } from '../src/basic/DataItem';
import { ExpandButton } from '../src/basic/ExpandButton';
import { ErrorBoundary } from '../src/basic/ErrorBoundary';
import { TableDataSummary } from '../src/basic/TableDataSummary';
import { ExportButton } from '../src/basic/ExportButton';
import { NavButton } from '../src/basic/NavButton';

// 导入布局组件
import { ModalActionHeader } from '../src/layout/ModalActionHeader';
import { SimpleModalHeader } from '../src/layout/SimpleModalHeader';
import { CardGrid } from '../src/layout/CardGrid';

// 导入表单组件
import { FilterBar } from '../src/form/FilterBar';
import { DateTypeSelector } from '../src/form/DateTypeSelector';
import { DatePopover } from '../src/form/DatePopover';

// 导入反馈组件
import { ErrorPage } from '../src/feedback/ErrorPage';
import { UpdateModal } from '../src/feedback/UpdateModal';
import { LoadingProgress } from '../src/feedback/LoadingProgress';
import { MultiStepProgress } from '../src/feedback/MultiStepProgress';
import { AutoLoadControl } from '../src/feedback/AutoLoadControl';
import { ExportProgressOverlay } from '../src/feedback/ExportProgressOverlay';
import { ProgressStatusPanel } from '../src/feedback/ProgressStatusPanel';

// 导入业务组件
import { DataTable } from '../src/business/DataTable';
import type { DataTableColumn } from '../src/business/DataTable';
import { Tag } from 'antd';

// Demo 组件
const StatisticCardDemo = () => (
  <StatisticCard
    title="总销售额"
    value={123456}
    suffix="元"
    trend={{ value: 12.5, type: 'up' }}
  />
);

const StatusTagDemo = () => (
  <div className="flex gap-2">
    <StatusTag status="success">成功</StatusTag>
    <StatusTag status="processing">进行中</StatusTag>
    <StatusTag status="error">失败</StatusTag>
    <StatusTag status="warning">警告</StatusTag>
  </div>
);

const TrendIndicatorDemo = () => (
  <div className="flex gap-4">
    <TrendIndicator value={12.5} type="up" />
    <TrendIndicator value={-8.3} type="down" />
  </div>
);

const FilterTagsDemo = () => {
  const [activeId, setActiveId] = React.useState('1');
  return (
    <FilterTags
      tags={[
        { id: '1', name: '全部' },
        { id: '2', name: '进行中' },
        { id: '3', name: '已完成' },
      ]}
      activeId={activeId}
      onChange={setActiveId}
    />
  );
};

const ButtonDemo = () => (
  <div className="flex flex-wrap gap-3">
    <Button variant="solid">主要按钮</Button>
    <Button variant="outline">次要按钮</Button>
    <Button variant="ghost">文字按钮</Button>
    <Button variant="link">链接按钮</Button>
    <Button variant="solid" size="small">小按钮</Button>
    <Button variant="solid" size="large">大按钮</Button>
    <Button variant="solid" loading>加载中</Button>
    <Button variant="solid" disabled>禁用</Button>
  </div>
);

const DataItemDemo = () => (
  <DataItem
    label="访客数"
    value={12345}
    changeRate={0.125}
  />
);

const ExpandButtonDemo = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <ExpandButton
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    />
  );
};

const ErrorPageDemo = () => (
  <div style={{ background: 'white', padding: '20px' }}>
    <ErrorPage
      status="404"
      onPrimaryAction={() => alert('返回首页')}
    />
  </div>
);

const ModeTabsDemo = () => {
  const [value, setValue] = React.useState('basic');
  return (
    <ModeTabs
      value={value}
      options={[
        { value: 'basic', label: '基础模式' },
        { value: 'advanced', label: '高级模式', tooltip: '包含更多高级功能' },
        { value: 'expert', label: '专家模式' },
      ]}
      onChange={setValue}
    />
  );
};

const PaginationFooterDemo = () => {
  const [current, setCurrent] = React.useState(1);
  return (
    <PaginationFooter
      current={current}
      pageSize={10}
      total={100}
      loadedCount={50}
      cachedPages={[1, 2, 3, 4, 5]}
      onChange={setCurrent}
    />
  );
};

const MediaPreviewDemo = () => (
  <MediaPreview
    media={[
      { type: 'image', url: 'https://via.placeholder.com/200x150', title: '图片1' },
      { type: 'image', url: 'https://via.placeholder.com/200x150', title: '图片2' },
      { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: '视频1' },
    ]}
    maxDisplay={3}
  />
);

const OverviewItemDemo = () => (
  <OverviewItem
    title="总访问量"
    value="123,456"
    compareRate={12.5}
    yesterdaySameTimeValue="110,000"
  />
);

const ErrorBoundaryDemo = () => (
  <ErrorBoundary>
    <div>正常渲染的内容</div>
  </ErrorBoundary>
);

const TableDataSummaryDemo = () => (
  <TableDataSummary
    selectedCount={5}
    totalCount={100}
    onClearSelection={() => alert('清除选择')}
  />
);

const ExportButtonDemo = () => (
  <ExportButton
    onExport={() => alert('导出')}
    loading={false}
  />
);

const NavButtonDemo = () => (
  <div className="flex gap-2">
    <NavButton label="主页" buttonType="default" onClick={() => alert('主页')} />
    <NavButton label="数据" value="123" buttonType="value" showCopy />
  </div>
);

const ModalActionHeaderDemo = () => (
  <ModalActionHeader
    title="数据分析"
    actions={[
      { key: 'refresh', text: '刷新', onClick: () => alert('刷新') },
      { key: 'export', text: '导出', onClick: () => alert('导出') },
    ]}
  />
);

const SimpleModalHeaderDemo = () => (
  <SimpleModalHeader
    title="弹窗标题"
    onFeedback={() => alert('反馈')}
    onUserCenter={() => alert('个人中心')}
  />
);

const CardGridDemo = () => (
  <CardGrid
    items={[
      { id: '1', name: '工具 1' },
      { id: '2', name: '工具 2', showStatusDot: true },
      { id: '3', name: '工具 3' },
    ]}
    columns={3}
    onCardClick={(item) => alert(item.name)}
  />
);

const FilterBarDemo = () => {
  const [mode, setMode] = React.useState('all');
  const [status, setStatus] = React.useState('all');
  return (
    <FilterBar
      filters={[
        {
          key: 'mode',
          type: 'segmented',
          value: mode,
          options: [
            { label: '全部', value: 'all' },
            { label: '进行中', value: 'processing' },
            { label: '已完成', value: 'completed' },
          ],
          onChange: setMode,
        },
        {
          key: 'status',
          type: 'select',
          placeholder: '选择状态',
          value: status,
          options: [
            { label: '全部', value: 'all' },
            { label: '成功', value: 'success' },
            { label: '失败', value: 'error' },
          ],
          onChange: setStatus,
        },
      ]}
      dataCount={42}
    />
  );
};

const DateTypeSelectorDemo = () => {
  const [value, setValue] = React.useState('day');
  return (
    <DateTypeSelector
      value={value}
      onChange={setValue}
    />
  );
};

const DatePopoverDemo = () => {
  const [value, setValue] = React.useState<import('dayjs').Dayjs | null>(null);
  return (
    <DatePopover
      type="day"
      value={value}
      onChange={setValue}
      label="选择日期"
    />
  );
};

const UpdateModalDemo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>显示更新提示</button>
      <UpdateModal
        visible={visible}
        onClose={() => setVisible(false)}
        onUpdate={() => alert('开始更新')}
      />
    </div>
  );
};

const LoadingProgressDemo = () => (
  <LoadingProgress
    percent={50}
    status="loading"
    statusText="加载中..."
  />
);

const MultiStepProgressDemo = () => (
  <MultiStepProgress
    title="任务进度"
    steps={[
      { key: '1', label: '准备数据', loading: false, completed: true },
      { key: '2', label: '处理数据', loading: true, completed: false },
      { key: '3', label: '生成报告', loading: false, completed: false },
    ]}
  />
);

const AutoLoadControlDemo = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [batchSize, setBatchSize] = React.useState(5);
  return (
    <AutoLoadControl
      isLoading={isLoading}
      batchSize={batchSize}
      onBatchSizeChange={setBatchSize}
      onLoadNextPage={() => alert('加载下一页')}
      onStartAutoLoad={() => setIsLoading(true)}
      onStopLoad={() => setIsLoading(false)}
    />
  );
};

const ExportProgressOverlayDemo = () => {
  const [progress, setProgress] = React.useState<{ stage: 'downloading' | 'generating' | 'processing'; current: number; total: number } | null>(null);
  return (
    <div style={{ position: 'relative', height: 200, border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={() => setProgress({ stage: 'downloading', current: 65, total: 100 })}>显示导出进度</button>
      <ExportProgressOverlay
        progress={progress}
        onCancel={() => setProgress(null)}
      />
    </div>
  );
};

const ProgressStatusPanelDemo = () => (
  <ProgressStatusPanel
    title="任务进度"
    current={3}
    total={5}
    statusItems={[
      { key: '1', label: '准备数据', loading: false, completed: true },
      { key: '2', label: '处理数据', loading: false, completed: true },
      { key: '3', label: '分析结果', loading: true, completed: false },
      { key: '4', label: '生成报告', loading: false, completed: false },
      { key: '5', label: '完成导出', loading: false, completed: false },
    ]}
  />
);

// 示例图片和视频 URL
const sampleImages = [
  'https://gw.alicdn.com/imgextra/i4/2215736624755/O1CN01z50yBJ1JOGH6VQOSQ_!!2215736624755-0-cib.jpg',
  'https://gw.alicdn.com/imgextra/i3/2215736624755/O1CN01TJ4mDo1JOGGwxUCUn_!!2215736624755-0-cib.jpg',
  'https://gw.alicdn.com/imgextra/i2/2215736624755/O1CN01hxYLCf1JOGGxQYJcM_!!2215736624755-0-cib.jpg',
];

const sampleVideos = [
  'https://cloud.video.taobao.com/play/u/2215736624755/p/1/e/6/t/1/430924456482.mp4',
];

// 生成带图片/视频的表格 Mock 数据
const generateTableMockData = (count: number, startIndex: number = 0) => {
  return Array.from({ length: count }, (_, index) => ({
    key: startIndex + index + 1,
    productName: `商品${startIndex + index + 1}`,
    image: sampleImages[index % sampleImages.length],
    video: index % 3 === 0 ? sampleVideos[0] : null,
    sales: Math.floor(Math.random() * 10000),
    revenue: Math.floor(Math.random() * 100000),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
  }));
};

// 基础列配置（固定列宽）
const fixedWidthColumns: DataTableColumn[] = [
  {
    title: '商品图片',
    dataIndex: 'image',
    width: 80,
    align: 'center',
    render: (url) => (
      <img
        src={url}
        alt="商品"
        style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4 }}
      />
    ),
  },
  { title: '商品名称', dataIndex: 'productName', width: 150 },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 100,
    sorter: true,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '销售额',
    dataIndex: 'revenue',
    width: 120,
    sorter: true,
    align: 'right',
    render: (text) => `¥${text.toLocaleString()}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    align: 'center',
    render: (text) =>
      text === 'active' ? (
        <Tag color="green">在售</Tag>
      ) : (
        <Tag color="red">下架</Tag>
      ),
  },
];

// 自动列宽配置（flex 布局）
const flexWidthColumns: DataTableColumn[] = [
  {
    title: '商品图片',
    dataIndex: 'image',
    minWidth: 80,
    align: 'center',
    render: (url) => (
      <img
        src={url}
        alt="商品"
        style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4 }}
      />
    ),
  },
  { title: '商品名称', dataIndex: 'productName', minWidth: 120 },
  {
    title: '销量',
    dataIndex: 'sales',
    minWidth: 80,
    sorter: true,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '销售额',
    dataIndex: 'revenue',
    minWidth: 100,
    sorter: true,
    align: 'right',
    render: (text) => `¥${text.toLocaleString()}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    minWidth: 70,
    align: 'center',
    render: (text) =>
      text === 'active' ? (
        <Tag color="green">在售</Tag>
      ) : (
        <Tag color="red">下架</Tag>
      ),
  },
];

// 带视频预览的列配置
const mediaColumns: DataTableColumn[] = [
  {
    title: '媒体',
    dataIndex: 'image',
    width: 100,
    align: 'center',
    render: (url, record: any) => (
      <MediaPreview
        media={[
          { type: 'image', url, title: record.productName },
          ...(record.video ? [{ type: 'video' as const, url: record.video, title: '商品视频' }] : []),
        ]}
        maxDisplay={2}
      />
    ),
  },
  { title: '商品名称', dataIndex: 'productName', width: 150 },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 100,
    sorter: true,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '销售额',
    dataIndex: 'revenue',
    width: 120,
    sorter: true,
    align: 'right',
    render: (text) => `¥${text.toLocaleString()}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    align: 'center',
    render: (text) =>
      text === 'active' ? (
        <Tag color="green">在售</Tag>
      ) : (
        <Tag color="red">下架</Tag>
      ),
  },
];

// 树形表格数据
const treeData = [
  {
    key: '1',
    name: '华东区',
    sales: 50000,
    revenue: 500000,
    children: [
      { key: '1-1', name: '上海', sales: 30000, revenue: 300000 },
      { key: '1-2', name: '杭州', sales: 20000, revenue: 200000 },
    ],
  },
  {
    key: '2',
    name: '华南区',
    sales: 40000,
    revenue: 400000,
    children: [
      { key: '2-1', name: '广州', sales: 25000, revenue: 250000 },
      { key: '2-2', name: '深圳', sales: 15000, revenue: 150000 },
    ],
  },
];

// 多层级列头配置
const groupedColumns: DataTableColumn[] = [
  { title: '区域/城市', dataIndex: 'name', width: 150 },
  {
    title: '销售数据',
    dataIndex: 'salesGroup',
    children: [
      {
        title: '销量',
        dataIndex: 'sales',
        width: 120,
        align: 'right',
        render: (text) => text?.toLocaleString() || '-',
      },
      {
        title: '销售额',
        dataIndex: 'revenue',
        width: 150,
        align: 'right',
        render: (text) => (text ? `¥${text.toLocaleString()}` : '-'),
      },
    ],
  },
];

// 带省略和高亮的列配置
const ellipsisColumns: DataTableColumn[] = [
  { title: '商品名称', dataIndex: 'productName', width: 100, ellipsis: true },
  {
    title: '商品描述',
    dataIndex: 'description',
    width: 150,
    ellipsis: { showTitle: false },
    render: (text) => (
      <span title={text} style={{ cursor: 'help' }}>
        {text}
      </span>
    ),
  },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 100,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    align: 'center',
    render: (text) =>
      text === 'active' ? (
        <Tag color="green">在售</Tag>
      ) : (
        <Tag color="red">下架</Tag>
      ),
  },
];

// 带描述的 Mock 数据
const generateDescMockData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    key: index + 1,
    productName: `商品${index + 1}`,
    description: `这是一段很长的商品描述文本，用于展示文本省略功能，商品${index + 1}的详细介绍说明`,
    sales: Math.floor(Math.random() * 10000),
    status: Math.random() > 0.5 ? 'active' : 'inactive',
  }));
};

const DataTableDemo = () => {
  const [activeTab, setActiveTab] = React.useState<
    'pagination' | 'scroll' | 'flex' | 'media' | 'highlight' | 'tree' | 'grouped' | 'autoload'
  >('pagination');
  const [scrollData, setScrollData] = React.useState(() => generateTableMockData(10));
  const [scrollLoading, setScrollLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  // 自动加载状态
  const [autoLoadData, setAutoLoadData] = React.useState(() => generateTableMockData(10));
  const [autoLoading, setAutoLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [cachedPages, setCachedPages] = React.useState<number[]>([1]);
  const [batchSize, setBatchSize] = React.useState(3);
  const totalPages = 10;

  const handleLoadMore = React.useCallback(() => {
    setScrollLoading(true);
    setTimeout(() => {
      const newData = generateTableMockData(5, scrollData.length);
      setScrollData((prev) => [...prev, ...newData]);
      setScrollLoading(false);
      if (scrollData.length + 5 >= 30) {
        setHasMore(false);
      }
    }, 800);
  }, [scrollData.length]);

  // 自动加载处理
  const handleLoadNextPage = React.useCallback(() => {
    if (currentPage >= totalPages) return;
    setAutoLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const newData = generateTableMockData(10, autoLoadData.length);
      setAutoLoadData((prev) => [...prev, ...newData]);
      setCurrentPage(nextPage);
      setCachedPages((prev) => [...prev, nextPage]);
      setAutoLoading(false);
    }, 600);
  }, [currentPage, autoLoadData.length]);

  // 自动批量加载
  const [isAutoLoading, setIsAutoLoading] = React.useState(false);
  const autoLoadRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleStartAutoLoad = React.useCallback(() => {
    setIsAutoLoading(true);
    const loadBatch = (remaining: number) => {
      if (remaining <= 0 || currentPage >= totalPages) {
        setIsAutoLoading(false);
        return;
      }
      setAutoLoading(true);
      autoLoadRef.current = setTimeout(() => {
        const nextPage = currentPage + (batchSize - remaining + 1);
        if (nextPage <= totalPages) {
          const newData = generateTableMockData(10, autoLoadData.length + (batchSize - remaining) * 10);
          setAutoLoadData((prev) => [...prev, ...newData]);
          setCurrentPage(nextPage);
          setCachedPages((prev) => [...new Set([...prev, nextPage])]);
        }
        setAutoLoading(false);
        loadBatch(remaining - 1);
      }, 500);
    };
    loadBatch(batchSize);
  }, [batchSize, currentPage, autoLoadData.length]);

  const handleStopLoad = React.useCallback(() => {
    setIsAutoLoading(false);
    setAutoLoading(false);
    if (autoLoadRef.current) {
      clearTimeout(autoLoadRef.current);
    }
  }, []);

  const tabs = [
    { key: 'pagination', label: '分页模式' },
    { key: 'scroll', label: '无限滚动' },
    { key: 'autoload', label: '自动加载' },
    { key: 'flex', label: '自动列宽' },
    { key: 'media', label: '图片/视频' },
    { key: 'highlight', label: '行高亮' },
    { key: 'tree', label: '树形表格' },
    { key: 'grouped', label: '多级表头' },
  ];

  return (
    <div className="space-y-4">
      {/* 标签切换 */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === tab.key
                ? 'bg-accent-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 分页模式 - 固定列宽 + 边框 */}
      {activeTab === 'pagination' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">loadMode="pagination"</code> +{' '}
            <code className="text-accent-600">columnLayout="auto"</code> +{' '}
            <code className="text-accent-600">bordered</code>
          </p>
          <DataTable
            columns={fixedWidthColumns}
            dataSource={generateTableMockData(20)}
            columnLayout="auto"
            loadMode="pagination"
            heightMode="fixed"
            height={320}
            bordered
            pagination={{
              pageSize: 5,
              showSizeChanger: true,
              showTotal: (total) => `共 ${total} 条`,
            }}
          />
        </div>
      )}

      {/* 无限滚动模式 */}
      {activeTab === 'scroll' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">loadMode="scroll"</code> - 滚动到底部自动加载更多
          </p>
          <DataTable
            columns={fixedWidthColumns}
            dataSource={scrollData}
            loadMode="scroll"
            heightMode="fixed"
            height={320}
            bordered
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
            loading={scrollLoading}
          />
        </div>
      )}

      {/* 自动加载模式 */}
      {activeTab === 'autoload' && (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            结合 <code className="text-accent-600">AutoLoadControl</code> 和{' '}
            <code className="text-accent-600">PaginationFooter</code> 实现自动批量加载
          </p>
          <DataTable
            columns={fixedWidthColumns}
            dataSource={autoLoadData}
            columnLayout="auto"
            loadMode="pagination"
            heightMode="fixed"
            height={280}
            bordered
            pagination={false}
            loading={autoLoading}
          />
          <div className="flex items-center justify-between border-t pt-3">
            <PaginationFooter
              current={currentPage}
              pageSize={10}
              total={totalPages * 10}
              loadedCount={autoLoadData.length}
              cachedPages={cachedPages}
              onChange={setCurrentPage}
            />
            <AutoLoadControl
              isLoading={isAutoLoading}
              batchSize={batchSize}
              onBatchSizeChange={setBatchSize}
              onLoadNextPage={handleLoadNextPage}
              onStartAutoLoad={handleStartAutoLoad}
              onStopLoad={handleStopLoad}
            />
          </div>
        </div>
      )}

      {/* 自动列宽（Flex） */}
      {activeTab === 'flex' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">columnLayout="flex"</code> - 列宽自动平均分配
          </p>
          <DataTable
            columns={flexWidthColumns}
            dataSource={generateTableMockData(8)}
            columnLayout="flex"
            loadMode="pagination"
            bordered
            pagination={false}
          />
        </div>
      )}

      {/* 图片/视频预览 */}
      {activeTab === 'media' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            结合 <code className="text-accent-600">MediaPreview</code> 组件展示图片和视频
          </p>
          <DataTable
            columns={mediaColumns}
            dataSource={generateTableMockData(6)}
            columnLayout="auto"
            loadMode="pagination"
            heightMode="fixed"
            height={320}
            bordered
            pagination={false}
          />
        </div>
      )}

      {/* 行高亮 + 文本省略 */}
      {activeTab === 'highlight' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">rowClassName</code> 条件高亮 +{' '}
            <code className="text-accent-600">ellipsis</code> 文本省略 +{' '}
            <code className="text-accent-600">size="small"</code>
          </p>
          <DataTable
            columns={ellipsisColumns}
            dataSource={generateDescMockData(10)}
            columnLayout="auto"
            loadMode="pagination"
            heightMode="fixed"
            height={300}
            bordered
            size="small"
            pagination={false}
            rowClassName={(record: any) =>
              record.status === 'active' ? 'bg-green-50' : ''
            }
          />
        </div>
      )}

      {/* 树形表格 */}
      {activeTab === 'tree' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">expandable</code> 树形表格，支持展开/收起
          </p>
          <DataTable
            columns={groupedColumns.filter((c) => !c.children)}
            dataSource={treeData}
            columnLayout="auto"
            loadMode="pagination"
            bordered
            pagination={false}
            expandable={{
              defaultExpandAllRows: true,
              childrenColumnName: 'children',
            }}
          />
        </div>
      )}

      {/* 多级表头 */}
      {activeTab === 'grouped' && (
        <div>
          <p className="text-sm text-gray-500 mb-3">
            <code className="text-accent-600">children</code> 配置多级表头（分组列头）
          </p>
          <DataTable
            columns={groupedColumns}
            dataSource={treeData.flatMap((item) => [
              { ...item, children: undefined },
              ...(item.children || []),
            ])}
            columnLayout="auto"
            loadMode="pagination"
            bordered
            pagination={false}
          />
        </div>
      )}
    </div>
  );
};

// 组件注册表
export const COMPONENT_REGISTRY: ComponentInfo[] = [
  // 数据展示组件
  {
    id: 'statistic-card',
    name: 'StatisticCard',
    cnName: '统计卡片',
    category: ComponentCategory.DATA_DISPLAY,
    description: '统计卡片组件，用于展示统计数据，支持显示趋势指示器。',
    component: StatisticCardDemo,
    propsDefinition: [
      { name: 'title', description: '卡片标题', type: 'string', default: '-' },
      { name: 'value', description: '数值', type: 'number | string', default: '-' },
      { name: 'suffix', description: '数值后缀', type: 'string', default: '-' },
      { name: 'prefix', description: '数值前缀', type: 'string', default: '-' },
      { name: 'trend', description: '趋势指示器配置', type: 'TrendConfig', default: '-' },
      { name: 'loading', description: '加载状态', type: 'boolean', default: 'false' },
      { name: 'precision', description: '数值精度', type: 'number', default: '0' },
    ],
    codeSnippet: `import { StatisticCard } from 'guanshu-component-library';

<StatisticCard
  title="总销售额"
  value={123456}
  suffix="元"
  trend={{ value: 12.5, type: 'up' }}
/>`,
  },
  {
    id: 'status-tag',
    name: 'StatusTag',
    cnName: '状态标签',
    category: ComponentCategory.DATA_DISPLAY,
    description: '状态标签组件，用于显示不同状态的标签。',
    component: StatusTagDemo,
    propsDefinition: [
      { name: 'status', description: '状态类型', type: "'success' | 'processing' | 'error' | 'warning' | 'default'", default: "'default'" },
      { name: 'children', description: '标签内容', type: 'ReactNode', default: '-' },
      { name: 'icon', description: '自定义图标', type: 'ReactNode', default: '-' },
    ],
    codeSnippet: `import { StatusTag } from 'guanshu-component-library';

<StatusTag status="success">成功</StatusTag>
<StatusTag status="processing">进行中</StatusTag>
<StatusTag status="error">失败</StatusTag>`,
  },
  {
    id: 'trend-indicator',
    name: 'TrendIndicator',
    cnName: '趋势指示器',
    category: ComponentCategory.DATA_DISPLAY,
    description: '趋势指示器组件，用于显示数据趋势，支持上升/下降趋势和颜色反转。',
    component: TrendIndicatorDemo,
    propsDefinition: [
      { name: 'value', description: '数值', type: 'number', default: '-' },
      { name: 'type', description: '趋势类型', type: "'up' | 'down'", default: '-' },
      { name: 'suffix', description: '后缀', type: 'string', default: "'%'" },
      { name: 'reverseColor', description: '反转颜色', type: 'boolean', default: 'false' },
      { name: 'showIcon', description: '显示图标', type: 'boolean', default: 'true' },
    ],
    codeSnippet: `import { TrendIndicator } from 'guanshu-component-library';

<TrendIndicator value={12.5} type="up" />
<TrendIndicator value={-8.3} type="down" />`,
  },
  {
    id: 'filter-tags',
    name: 'FilterTags',
    cnName: '筛选标签',
    category: ComponentCategory.DATA_DISPLAY,
    description: '可选择的标签筛选组件，支持多选和加载状态。',
    component: FilterTagsDemo,
    propsDefinition: [
      { name: 'tags', description: '标签列表', type: 'TagItem[]', default: '-' },
      { name: 'activeId', description: '当前选中ID', type: 'string', default: '-' },
      { name: 'onChange', description: '选中回调', type: '(id: string) => void', default: '-' },
      { name: 'loading', description: '加载状态', type: 'boolean', default: 'false' },
    ],
    codeSnippet: `import { FilterTags } from 'guanshu-component-library';

const [activeId, setActiveId] = useState('1');

<FilterTags
  tags={[
    { id: '1', name: '全部' },
    { id: '2', name: '进行中' },
    { id: '3', name: '已完成' },
  ]}
  activeId={activeId}
  onChange={setActiveId}
/>`,
  },
  {
    id: 'button',
    name: 'Button',
    cnName: '按钮',
    category: ComponentCategory.BASIC,
    description: '基础按钮组件，支持多种变体、尺寸和状态。',
    component: ButtonDemo,
    propsDefinition: [
      { name: 'variant', description: '按钮变体', type: "'solid' | 'outline' | 'ghost' | 'link'", default: "'solid'" },
      { name: 'type', description: 'Ant Design 按钮类型', type: "'primary' | 'default' | 'dashed' | 'text' | 'link'", default: '-' },
      { name: 'size', description: '按钮尺寸', type: "'large' | 'middle' | 'small'", default: "'middle'" },
      { name: 'loading', description: '加载状态', type: 'boolean', default: 'false' },
      { name: 'disabled', description: '禁用状态', type: 'boolean', default: 'false' },
      { name: 'icon', description: '图标', type: 'ReactNode', default: '-' },
      { name: 'onClick', description: '点击回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { Button } from 'guanshu-component-library';

// 使用 variant
<Button variant="solid">主要按钮</Button>
<Button variant="outline">次要按钮</Button>
<Button variant="ghost">文字按钮</Button>
<Button variant="link">链接按钮</Button>

// 尺寸和状态
<Button size="large">大按钮</Button>
<Button loading>加载中</Button>
<Button disabled>禁用</Button>`,
  },
  {
    id: 'data-item',
    name: 'DataItem',
    cnName: '数据项',
    category: ComponentCategory.BASIC,
    description: '数据项组件，用于展示单个数据指标，支持显示环比变化。',
    component: DataItemDemo,
    propsDefinition: [
      { name: 'label', description: '标签', type: 'string', default: '-' },
      { name: 'value', description: '数值', type: 'number | string', default: '-' },
      { name: 'changeRate', description: '变化率', type: 'number', default: '-' },
      { name: 'suffix', description: '后缀', type: 'string', default: '-' },
    ],
    codeSnippet: `import { DataItem } from 'guanshu-component-library';

<DataItem
  label="访客数"
  value={12345}
  changeRate={0.125}
/>`,
  },
  {
    id: 'expand-button',
    name: 'ExpandButton',
    cnName: '展开按钮',
    category: ComponentCategory.BASIC,
    description: '展开/收起按钮组件。',
    component: ExpandButtonDemo,
    propsDefinition: [
      { name: 'isExpanded', description: '是否展开', type: 'boolean', default: '-' },
      { name: 'onToggle', description: '切换回调', type: '() => void', default: '-' },
      { name: 'expandedText', description: '展开时文本', type: 'string', default: "'收起'" },
      { name: 'collapsedText', description: '收起时文本', type: 'string', default: "'展开更多'" },
    ],
    codeSnippet: `import { ExpandButton } from 'guanshu-component-library';

const [isExpanded, setIsExpanded] = useState(false);

<ExpandButton
  isExpanded={isExpanded}
  onToggle={() => setIsExpanded(!isExpanded)}
/>`,
  },
  {
    id: 'error-page',
    name: 'ErrorPage',
    cnName: '错误页面',
    category: ComponentCategory.FEEDBACK,
    description: '通用错误页面组件，支持多种错误状态展示（403/404/500/error/warning/info）。',
    component: ErrorPageDemo,
    propsDefinition: [
      { name: 'status', description: '错误状态', type: "'403' | '404' | '500' | 'error' | 'warning' | 'info'", default: "'404'" },
      { name: 'title', description: '标题', type: 'string', default: '-' },
      { name: 'subTitle', description: '副标题', type: 'string', default: '-' },
      { name: 'extra', description: '操作按钮', type: 'ReactNode', default: '-' },
      { name: 'onPrimaryAction', description: '主要操作回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { ErrorPage } from 'guanshu-component-library';

<ErrorPage
  status="404"
  onPrimaryAction={() => console.log('返回首页')}
/>`,
  },
  {
    id: 'mode-tabs',
    name: 'ModeTabs',
    cnName: '模式标签',
    category: ComponentCategory.DATA_DISPLAY,
    description: '模式选择标签组件，支持 tooltip 提示。',
    component: ModeTabsDemo,
    propsDefinition: [
      { name: 'value', description: '当前值', type: 'string', default: '-' },
      { name: 'options', description: '选项列表', type: 'ModeTabsOption[]', default: '-' },
      { name: 'onChange', description: '变化回调', type: '(value: string) => void', default: '-' },
      { name: 'size', description: '尺寸', type: "'large' | 'middle' | 'small'", default: "'middle'" },
    ],
    codeSnippet: `import { ModeTabs } from 'guanshu-component-library';

const [value, setValue] = useState('basic');

<ModeTabs
  value={value}
  options={[
    { value: 'basic', label: '基础模式' },
    { value: 'advanced', label: '高级模式', tooltip: '包含更多高级功能' },
  ]}
  onChange={setValue}
/>`,
  },
  {
    id: 'pagination-footer',
    name: 'PaginationFooter',
    cnName: '分页底栏',
    category: ComponentCategory.DATA_DISPLAY,
    description: '分页底部组件，支持自动加载和缓存状态显示。',
    component: PaginationFooterDemo,
    propsDefinition: [
      { name: 'current', description: '当前页码', type: 'number', default: '-' },
      { name: 'pageSize', description: '每页条数', type: 'number', default: '-' },
      { name: 'total', description: '总条数', type: 'number', default: '-' },
      { name: 'loadedCount', description: '已加载条数', type: 'number', default: '-' },
      { name: 'cachedPages', description: '已缓存页码', type: 'number[]', default: '[]' },
      { name: 'onChange', description: '页码变化回调', type: '(page: number) => void', default: '-' },
    ],
    codeSnippet: `import { PaginationFooter } from 'guanshu-component-library';

<PaginationFooter
  current={1}
  pageSize={10}
  total={100}
  loadedCount={50}
  cachedPages={[1, 2, 3, 4, 5]}
  onChange={(page) => console.log(page)}
/>`,
  },
  {
    id: 'media-preview',
    name: 'MediaPreview',
    cnName: '媒体预览',
    category: ComponentCategory.DATA_DISPLAY,
    description: '媒体预览组件，支持图片和视频缩略图展示，hover 时弹出预览。',
    component: MediaPreviewDemo,
    propsDefinition: [
      { name: 'media', description: '媒体列表', type: 'MediaItem[]', default: '-' },
      { name: 'maxDisplay', description: '最多展示数量', type: 'number', default: '3' },
      { name: 'popoverWidth', description: 'Popover 预览宽度', type: 'number', default: '300' },
      { name: 'videoMaxWidth', description: '视频预览最大宽度', type: 'number', default: '320' },
      { name: 'videoMaxHeight', description: '视频预览最大高度', type: 'number', default: '400' },
      { name: 'emptyText', description: '空数据时展示', type: 'ReactNode', default: "'-'" },
    ],
    codeSnippet: `import { MediaPreview } from 'guanshu-component-library';

<MediaPreview
  media={[
    { type: 'image', url: 'https://...', title: '图片1' },
    { type: 'video', url: 'https://...', title: '视频1' },
  ]}
  maxDisplay={3}
/>`,
  },
  {
    id: 'overview-item',
    name: 'OverviewItem',
    cnName: '概览项',
    category: ComponentCategory.DATA_DISPLAY,
    description: '概览数据卡片组件，支持多种对比模式。',
    component: OverviewItemDemo,
    propsDefinition: [
      { name: 'title', description: '标题', type: 'string', default: '-' },
      { name: 'value', description: '当前值', type: 'string | number', default: '-' },
      { name: 'compareRate', description: '较昨日同时段变化率', type: 'number', default: '-' },
      { name: 'yesterdaySameTimeValue', description: '昨日同时段值', type: 'string | number', default: '-' },
    ],
    codeSnippet: `import { OverviewItem } from 'guanshu-component-library';

<OverviewItem
  title="总访问量"
  value="123,456"
  compareRate={12.5}
  yesterdaySameTimeValue="110,000"
/>`,
  },
  {
    id: 'error-boundary',
    name: 'ErrorBoundary',
    cnName: '错误边界',
    category: ComponentCategory.BASIC,
    description: '错误边界组件，捕获子组件错误并显示降级UI。',
    component: ErrorBoundaryDemo,
    propsDefinition: [
      { name: 'children', description: '子组件', type: 'ReactNode', default: '-' },
      { name: 'fallback', description: '降级UI', type: 'ReactNode', default: '-' },
    ],
    codeSnippet: `import { ErrorBoundary } from 'guanshu-component-library';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>`,
  },
  {
    id: 'table-data-summary',
    name: 'TableDataSummary',
    cnName: '表格数据汇总',
    category: ComponentCategory.BASIC,
    description: '表格数据汇总组件，显示已选和总数。',
    component: TableDataSummaryDemo,
    propsDefinition: [
      { name: 'selectedCount', description: '已选数量', type: 'number', default: '-' },
      { name: 'totalCount', description: '总数量', type: 'number', default: '-' },
      { name: 'onClearSelection', description: '清除选择回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { TableDataSummary } from 'guanshu-component-library';

<TableDataSummary
  selectedCount={5}
  totalCount={100}
  onClearSelection={() => console.log('清除')}
/>`,
  },
  {
    id: 'export-button',
    name: 'ExportButton',
    cnName: '导出按钮',
    category: ComponentCategory.BASIC,
    description: '导出按钮组件。',
    component: ExportButtonDemo,
    propsDefinition: [
      { name: 'onExport', description: '导出回调', type: '() => void', default: '-' },
      { name: 'loading', description: '加载状态', type: 'boolean', default: 'false' },
    ],
    codeSnippet: `import { ExportButton } from 'guanshu-component-library';

<ExportButton
  onExport={() => console.log('导出')}
  loading={false}
/>`,
  },
  {
    id: 'nav-button',
    name: 'NavButton',
    cnName: '导航按钮',
    category: ComponentCategory.BASIC,
    description: '导航按钮组件，支持多种类型和下拉菜单。',
    component: NavButtonDemo,
    propsDefinition: [
      { name: 'label', description: '标签', type: 'string', default: '-' },
      { name: 'buttonType', description: '按钮类型', type: "'default' | 'value' | 'link'", default: "'default'" },
      { name: 'value', description: '值', type: 'string', default: '-' },
      { name: 'showCopy', description: '显示复制按钮', type: 'boolean', default: 'false' },
      { name: 'onClick', description: '点击回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { NavButton } from 'guanshu-component-library';

<NavButton label="主页" onClick={() => console.log('点击')} />
<NavButton label="数据" value="123" buttonType="value" showCopy />`,
  },
  {
    id: 'modal-action-header',
    name: 'ModalActionHeader',
    cnName: '弹窗操作头部',
    category: ComponentCategory.LAYOUT,
    description: '弹窗操作头部组件，支持自定义logo、标题和操作按钮。',
    component: ModalActionHeaderDemo,
    propsDefinition: [
      { name: 'title', description: '标题', type: 'string', default: '-' },
      { name: 'logo', description: 'Logo', type: 'string | ReactNode', default: '-' },
      { name: 'actions', description: '操作按钮列表', type: 'ActionItem[]', default: '[]' },
      { name: 'showSeparator', description: '显示分隔符', type: 'boolean', default: 'true' },
    ],
    codeSnippet: `import { ModalActionHeader } from 'guanshu-component-library';

<ModalActionHeader
  title="数据分析"
  actions={[
    { key: 'refresh', text: '刷新', onClick: () => {} },
    { key: 'export', text: '导出', onClick: () => {} },
  ]}
/>`,
    aiGuidance: {
      whenToUse: [
        '弹窗需要展示品牌 Logo 和标题时',
        '弹窗头部需要放置多个操作按钮（如刷新、导出、清除缓存）时',
        '需要统一弹窗头部样式规范时',
      ],
      whenNotToUse: [
        '简单确认弹窗 → 使用 Ant Design Modal 默认头部',
        '头部只需要标题无操作 → 使用 SimpleModalHeader',
        '移动端弹窗 → 考虑使用 Drawer 组件',
      ],
      constraints: [
        '必须传入 title 属性',
        'actions 数组中每项必须包含 key 和 text',
        '配合 Modal 使用时需设置 title={null} 避免重复标题',
      ],
      compositionWith: [
        'Modal - 作为 Modal 的自定义 title 使用',
        'FilterBar - 放在 Header 下方提供筛选功能',
        'ExportButton - 在 actions 中添加导出操作',
      ],
      commonMistakes: [
        '同时使用 Modal 的 title 和 ModalActionHeader，导致两个标题',
        'actions 中的 onClick 未绑定正确的处理函数',
        '忘记设置 showSeparator={false} 导致多余的分隔线',
      ],
    },
  },
  {
    id: 'simple-modal-header',
    name: 'SimpleModalHeader',
    cnName: '简洁弹窗头部',
    category: ComponentCategory.LAYOUT,
    description: '简洁版弹窗头部组件。',
    component: SimpleModalHeaderDemo,
    propsDefinition: [
      { name: 'title', description: '标题', type: 'string', default: '-' },
      { name: 'logo', description: 'Logo', type: 'ReactNode', default: '-' },
      { name: 'onClearCache', description: '清除缓存回调', type: '() => void', default: '-' },
      { name: 'onUserCenter', description: '个人中心回调', type: '() => void', default: '-' },
      { name: 'onFeedback', description: '反馈回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { SimpleModalHeader } from 'guanshu-component-library';

<SimpleModalHeader
  title="弹窗标题"
  onFeedback={() => console.log('反馈')}
  onUserCenter={() => console.log('个人中心')}
/>`,
    aiGuidance: {
      whenToUse: [
        '弹窗只需要简洁的标题展示时',
        '需要提供用户反馈和个人中心入口时',
        '需要清除缓存功能时',
      ],
      whenNotToUse: [
        '需要在头部放置多个自定义操作按钮 → 使用 ModalActionHeader',
        '简单确认弹窗 → 使用 Ant Design Modal 默认头部',
        '弹窗无需额外操作入口时',
      ],
      constraints: [
        '必须传入 title 属性',
        '配合 Modal 使用时需设置 title={null}',
        '回调函数需要正确处理业务逻辑',
      ],
      compositionWith: [
        'Modal - 作为 Modal 的自定义 title 使用',
        'DataTable - 弹窗内展示数据表格',
        'FilterBar - 放在 Header 下方',
      ],
      commonMistakes: [
        '同时使用 Modal 的 title 和 SimpleModalHeader',
        '未提供 onFeedback 但用户期望有反馈入口',
        'onClearCache 调用后未正确清理页面状态',
      ],
    },
  },
  {
    id: 'card-grid',
    name: 'CardGrid',
    cnName: '卡片网格',
    category: ComponentCategory.LAYOUT,
    description: '卡片网格布局组件，用于展示工具、功能等卡片列表。',
    component: CardGridDemo,
    propsDefinition: [
      { name: 'items', description: '卡片列表', type: 'CardItem[]', default: '-' },
      { name: 'columns', description: '列数', type: 'number', default: '4' },
      { name: 'onCardClick', description: '卡片点击回调', type: '(item: CardItem) => void', default: '-' },
    ],
    codeSnippet: `import { CardGrid } from 'guanshu-component-library';

<CardGrid
  items={[
    { id: '1', name: '工具 1' },
    { id: '2', name: '工具 2', showStatusDot: true },
  ]}
  columns={3}
  onCardClick={(item) => console.log(item.name)}
/>`,
  },
  {
    id: 'filter-bar',
    name: 'FilterBar',
    cnName: '筛选栏',
    category: ComponentCategory.FORM,
    description: '通用筛选栏组件，支持多种筛选控件组合。',
    component: FilterBarDemo,
    propsDefinition: [
      { name: 'filters', description: '筛选控件列表', type: 'FilterControl[]', default: '-' },
      { name: 'dataCount', description: '数据统计信息', type: 'number', default: '-' },
      { name: 'exportOptions', description: '导出选项', type: 'ExportOption[]', default: '-' },
      { name: 'onExport', description: '导出回调', type: '(key: string) => void', default: '-' },
    ],
    codeSnippet: `import { FilterBar } from 'guanshu-component-library';

<FilterBar
  filters={[
    {
      key: 'mode',
      type: 'segmented',
      value: mode,
      options: [
        { label: '全部', value: 'all' },
        { label: '进行中', value: 'processing' },
      ],
      onChange: setMode,
    },
  ]}
  dataCount={42}
/>`,
  },
  {
    id: 'date-type-selector',
    name: 'DateTypeSelector',
    cnName: '日期类型选择器',
    category: ComponentCategory.FORM,
    description: '日期类型选择器组件。',
    component: DateTypeSelectorDemo,
    propsDefinition: [
      { name: 'value', description: '当前值', type: 'string', default: '-' },
      { name: 'onChange', description: '变化回调', type: '(value: string) => void', default: '-' },
    ],
    codeSnippet: `import { DateTypeSelector } from 'guanshu-component-library';

const [value, setValue] = useState('day');

<DateTypeSelector
  value={value}
  onChange={setValue}
/>`,
  },
  {
    id: 'date-popover',
    name: 'DatePopover',
    cnName: '日期弹出框',
    category: ComponentCategory.FORM,
    description: '日期选择 Popover 组件，Hover 时展示日期选择面板。',
    component: DatePopoverDemo,
    propsDefinition: [
      { name: 'type', description: 'Picker 类型', type: "'day' | 'week' | 'month'", default: '-' },
      { name: 'value', description: '当前选中的日期', type: 'Dayjs | null', default: '-' },
      { name: 'onChange', description: '日期变化回调', type: '(date: Dayjs | null) => void', default: '-' },
      { name: 'visible', description: '是否显示 Popover', type: 'boolean', default: '-' },
      { name: 'onVisibleChange', description: '显示状态变化回调', type: '(visible: boolean) => void', default: '-' },
      { name: 'maxDateOffset', description: '最大可选日期偏移量', type: 'number', default: '1' },
      { name: 'label', description: '自定义触发文本', type: 'string', default: "'日'/'周'/'月'" },
    ],
    codeSnippet: `import { DatePopover } from 'guanshu-component-library';
import dayjs, { Dayjs } from 'dayjs';

const [value, setValue] = useState<Dayjs | null>(null);

<DatePopover
  type="day"
  value={value}
  onChange={setValue}
  label="选择日期"
/>`,
  },
  {
    id: 'update-modal',
    name: 'UpdateModal',
    cnName: '更新弹窗',
    category: ComponentCategory.FEEDBACK,
    description: '更新提示弹窗组件。',
    component: UpdateModalDemo,
    propsDefinition: [
      { name: 'visible', description: '是否可见', type: 'boolean', default: '-' },
      { name: 'onClose', description: '关闭回调', type: '() => void', default: '-' },
      { name: 'onUpdate', description: '更新回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { UpdateModal } from 'guanshu-component-library';

<UpdateModal
  visible={visible}
  onClose={() => setVisible(false)}
  onUpdate={() => console.log('更新')}
/>`,
    aiGuidance: {
      whenToUse: [
        '需要提示用户有新版本可用时',
        '应用启动时检测到版本更新时',
        '需要引导用户更新扩展/应用时',
      ],
      whenNotToUse: [
        '常规信息提示 → 使用 message 或 notification',
        '需要复杂交互的弹窗 → 使用 Modal + 自定义内容',
        '强制更新场景 → 需要禁用关闭按钮的自定义弹窗',
      ],
      constraints: [
        '必须提供 visible 状态控制显示',
        'onClose 和 onUpdate 回调必须正确处理',
        '更新操作应跳转到正确的更新地址',
      ],
      compositionWith: [
        '独立使用，通常不需要与其他组件组合',
      ],
      commonMistakes: [
        '忘记在 onClose 中设置 visible 为 false',
        'onUpdate 未正确处理更新逻辑（如跳转商店页面）',
        '频繁弹出更新提示影响用户体验',
      ],
    },
  },
  {
    id: 'loading-progress',
    name: 'LoadingProgress',
    cnName: '加载进度',
    category: ComponentCategory.FEEDBACK,
    description: '加载进度条组件，支持多种状态显示。',
    component: LoadingProgressDemo,
    propsDefinition: [
      { name: 'percent', description: '进度百分比 (0-100)', type: 'number', default: '-' },
      { name: 'status', description: '状态', type: "'loading' | 'completed' | 'error'", default: "'loading'" },
      { name: 'showStatus', description: '是否显示状态标签', type: 'boolean', default: 'true' },
      { name: 'statusText', description: '自定义状态文本', type: 'string', default: '-' },
      { name: 'size', description: '尺寸', type: "'default' | 'small'", default: "'default'" },
    ],
    codeSnippet: `import { LoadingProgress } from 'guanshu-component-library';

<LoadingProgress
  percent={50}
  status="loading"
  statusText="加载中..."
/>`,
  },
  {
    id: 'multi-step-progress',
    name: 'MultiStepProgress',
    cnName: '多步骤进度',
    category: ComponentCategory.FEEDBACK,
    description: '多步骤进度组件，自动根据步骤状态计算进度。',
    component: MultiStepProgressDemo,
    propsDefinition: [
      { name: 'title', description: '标题', type: 'string', default: "'任务进度'" },
      { name: 'steps', description: '步骤列表', type: 'StepItem[]', default: '-' },
      { name: 'visible', description: '是否可见', type: 'boolean', default: 'true' },
      { name: 'progressFormat', description: '进度显示格式', type: "'percentage' | 'fraction'", default: "'fraction'" },
    ],
    codeSnippet: `import { MultiStepProgress } from 'guanshu-component-library';

<MultiStepProgress
  title="任务进度"
  steps={[
    { key: '1', label: '准备数据', loading: false, completed: true },
    { key: '2', label: '处理数据', loading: true, completed: false },
  ]}
/>`,
  },
  {
    id: 'auto-load-control',
    name: 'AutoLoadControl',
    cnName: '自动加载控制',
    category: ComponentCategory.FEEDBACK,
    description: '自动加载控制组件。',
    component: AutoLoadControlDemo,
    propsDefinition: [
      { name: 'isLoading', description: '是否加载中', type: 'boolean', default: '-' },
      { name: 'batchSize', description: '批次大小', type: 'number', default: '-' },
      { name: 'onBatchSizeChange', description: '批次大小变化回调', type: '(size: number) => void', default: '-' },
      { name: 'onLoadNextPage', description: '加载下一页回调', type: '() => void', default: '-' },
      { name: 'onStartAutoLoad', description: '开始自动加载回调', type: '() => void', default: '-' },
      { name: 'onStopLoad', description: '停止加载回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { AutoLoadControl } from 'guanshu-component-library';

<AutoLoadControl
  isLoading={isLoading}
  batchSize={5}
  onBatchSizeChange={setBatchSize}
  onLoadNextPage={() => console.log('下一页')}
  onStartAutoLoad={() => setIsLoading(true)}
  onStopLoad={() => setIsLoading(false)}
/>`,
  },
  {
    id: 'export-progress-overlay',
    name: 'ExportProgressOverlay',
    cnName: '导出进度遮罩',
    category: ComponentCategory.FEEDBACK,
    description: '导出进度遮罩层组件，覆盖整个父容器，显示导出进度和取消按钮。',
    component: ExportProgressOverlayDemo,
    propsDefinition: [
      { name: 'progress', description: '进度信息，为 null 时不显示遮罩', type: 'ExportProgress | null', default: '-' },
      { name: 'onCancel', description: '取消回调', type: '() => void', default: '-' },
      { name: 'showCancel', description: '是否显示取消按钮', type: 'boolean', default: 'true' },
      { name: 'stageText', description: '自定义阶段文本', type: "Partial<Record<'downloading' | 'generating' | 'processing', string>>", default: '-' },
    ],
    codeSnippet: `import { ExportProgressOverlay } from 'guanshu-component-library';

const [progress, setProgress] = useState<ExportProgress | null>(null);

// 开始导出时
setProgress({ stage: 'downloading', current: 0, total: 100 });

<ExportProgressOverlay
  progress={progress}
  onCancel={() => setProgress(null)}
/>`,
  },
  {
    id: 'progress-status-panel',
    name: 'ProgressStatusPanel',
    cnName: '进度状态面板',
    category: ComponentCategory.FEEDBACK,
    description: '进度状态面板组件，用于展示多项任务的进度和状态。',
    component: ProgressStatusPanelDemo,
    propsDefinition: [
      { name: 'title', description: '标题', type: 'string', default: "'任务进度'" },
      { name: 'current', description: '当前进度', type: 'number', default: '-' },
      { name: 'total', description: '总数', type: 'number', default: '-' },
      { name: 'statusItems', description: '状态项列表', type: 'StatusItem[]', default: '-' },
      { name: 'visible', description: '是否可见', type: 'boolean', default: 'true' },
    ],
    codeSnippet: `import { ProgressStatusPanel } from 'guanshu-component-library';

<ProgressStatusPanel
  title="任务进度"
  current={3}
  total={5}
  statusItems={[
    { key: '1', label: '准备数据', loading: false, completed: true },
    { key: '2', label: '处理数据', loading: true, completed: false },
    { key: '3', label: '生成报告', loading: false, completed: false },
  ]}
/>`,
  },
  // 业务组件
  {
    id: 'data-table',
    name: 'DataTable',
    cnName: '数据表格',
    category: ComponentCategory.BUSINESS,
    description: '通用数据表格组件，支持排序、分页/无限滚动、自适应高度等功能。',
    component: DataTableDemo,
    propsDefinition: [
      { name: 'columns', description: '列配置', type: 'DataTableColumn[]', default: '-' },
      { name: 'dataSource', description: '数据源', type: 'T[]', default: '-' },
      { name: 'rowKey', description: '行唯一标识', type: "string | ((record: T) => string)", default: "'key'" },
      { name: 'columnLayout', description: '列布局模式', type: "'auto' | 'flex'", default: "'auto'" },
      { name: 'loadMode', description: '加载模式', type: "'pagination' | 'scroll'", default: "'pagination'" },
      { name: 'pagination', description: '分页配置', type: 'false | TableProps.pagination', default: '{ pageSize: 10 }' },
      { name: 'hasMore', description: '是否有更多数据（滚动模式）', type: 'boolean', default: 'false' },
      { name: 'onLoadMore', description: '加载更多回调', type: '() => void', default: '-' },
      { name: 'scrollThreshold', description: '滚动加载阈值', type: 'number', default: '100' },
      { name: 'heightMode', description: '高度模式', type: "'auto' | 'fixed'", default: "'fixed'" },
      { name: 'height', description: '固定高度', type: 'number | string', default: '-' },
      { name: 'loading', description: '加载状态', type: 'boolean | { spinning, delay }', default: 'false' },
      { name: 'onChange', description: '表格变化回调', type: 'TableProps.onChange', default: '-' },
      { name: 'rowSelection', description: '行选择配置', type: 'TableProps.rowSelection', default: '-' },
      { name: 'scrollX', description: '水平滚动宽度', type: "number | string | true", default: '-' },
      { name: 'bordered', description: '是否显示边框', type: 'boolean', default: 'false' },
      { name: 'size', description: '表格尺寸', type: "'large' | 'middle' | 'small'", default: '-' },
      { name: 'rowClassName', description: '行类名（支持条件高亮）', type: 'string | ((record, index) => string)', default: '-' },
      { name: 'expandable', description: '展开行配置（树形表格）', type: 'TableProps.expandable', default: '-' },
      { name: 'locale', description: '空数据时的显示内容', type: 'TableProps.locale', default: '-' },
      { name: 'title', description: '表格标题渲染函数', type: 'TableProps.title', default: '-' },
      { name: 'summary', description: '表格底部汇总渲染函数', type: 'TableProps.summary', default: '-' },
    ],
    codeSnippet: `import { DataTable } from 'guanshu-component-library';
import type { DataTableColumn } from 'guanshu-component-library';

const columns: DataTableColumn[] = [
  { title: '商品名称', dataIndex: 'productName', width: 200 },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 120,
    sorter: true,
    align: 'right',
    render: (text) => text.toLocaleString(),
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    align: 'center',
    render: (text) => <Tag color={text === 'active' ? 'green' : 'red'}>{text}</Tag>,
  },
];

// 分页加载 + 边框
<DataTable
  columns={columns}
  dataSource={data}
  loadMode="pagination"
  heightMode="fixed"
  height={300}
  bordered
/>

// 无限滚动
<DataTable
  columns={columns}
  dataSource={data}
  loadMode="scroll"
  heightMode="fixed"
  height={300}
  bordered
  hasMore={hasMore}
  onLoadMore={handleLoadMore}
/>

// 自动列宽（flex）
<DataTable
  columns={columns}
  dataSource={data}
  columnLayout="flex"
  bordered
/>`,
    aiGuidance: {
      whenToUse: [
        '需要展示结构化列表数据，且数据量超过 5 条时',
        '需要排序、筛选、分页等表格交互功能时',
        '数据量较大（100+ 条）需要无限滚动加载时',
        '表格需要展示图片、视频等媒体内容时',
        '需要用户选择多行数据进行批量操作时',
        '需要展示树形层级数据时（使用 expandable）',
        '需要多层级分组列头展示复杂数据结构时',
        '需要根据数据条件高亮特定行时（使用 rowClassName）',
      ],
      whenNotToUse: [
        '简单的键值对展示 → 使用 DataItem 或 Descriptions',
        '只有 2-3 行数据 → 直接使用原生 HTML table',
        '卡片式布局展示 → 使用 CardGrid',
        '只需要展示单个统计数值 → 使用 StatisticCard',
        '展示状态列表无需表格 → 使用 List 组件',
      ],
      constraints: [
        'columns 数组中每项必须包含 title 和 dataIndex',
        'dataSource 中每条数据必须有唯一的 key 字段，或通过 rowKey 指定',
        'loadMode="scroll" 时必须同时提供 hasMore 和 onLoadMore',
        'heightMode="fixed" 时必须提供 height 值',
        'columnLayout="auto" 时使用 width，columnLayout="flex" 时使用 minWidth',
        '多层级列头使用 children 配置，父列不需要 dataIndex',
        '树形表格需配置 expandable.childrenColumnName 指定子节点字段',
        'ellipsis 生效需要设置列 width，否则无法触发省略',
      ],
      compositionWith: [
        'MediaPreview - 在表格单元格中展示图片/视频预览',
        'StatusTag - 渲染状态列，展示不同状态标签',
        'FilterBar - 放在表格上方，提供筛选功能',
        'TableDataSummary - 展示已选数量和总数统计',
        'ExportButton - 表格数据导出功能',
        'PaginationFooter - 自定义分页底栏（如需显示缓存状态）',
        'Tooltip - 配合 ellipsis 展示完整文本',
        'DataItem - 在单元格内展示带变化率的数据',
      ],
      commonMistakes: [
        '忘记设置 height 导致 heightMode="fixed" 时表格高度为 0',
        'columnLayout="flex" 时错误使用 width 而非 minWidth，导致列宽不生效',
        'loadMode="scroll" 但未处理 loading 状态，导致重复触发加载',
        '大数据量时未使用虚拟滚动，导致页面卡顿（建议 500+ 条时考虑分页）',
        'render 函数中直接修改原数据，应返回新的 ReactNode',
        '使用 ellipsis 但未设置列宽，导致省略不生效',
        '树形表格数据中 children 字段名与 childrenColumnName 不匹配',
        'rowClassName 返回的类名未在 CSS 中定义，导致样式无效',
      ],
      performanceTips: [
        '数据量超过 100 条时，优先使用 loadMode="pagination" 分页加载',
        '无限滚动时，每次加载 10-20 条为宜，避免一次性加载过多',
        '复杂的 render 函数应使用 React.memo 或 useMemo 优化',
        '频繁更新的数据源，确保正确设置 rowKey 避免不必要的重渲染',
        '树形表格数据量大时，考虑使用 expandable.expandedRowKeys 控制展开状态',
        '大量使用 ellipsis 时，避免在 render 中重复创建 Tooltip 组件',
      ],
    },
  },
];
