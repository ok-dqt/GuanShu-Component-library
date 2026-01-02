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

const MediaPreviewDemo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>预览媒体</button>
      <MediaPreview
        visible={visible}
        mediaList={[
          { type: 'image', url: 'https://via.placeholder.com/800x600', title: '图片1' },
        ]}
        current={0}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

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
  const [date, setDate] = React.useState(new Date());
  return (
    <DatePopover
      date={date}
      onChange={setDate}
    >
      <button>选择日期</button>
    </DatePopover>
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
    current={50}
    total={100}
    status="loading"
    text="加载中..."
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
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>显示导出进度</button>
      <ExportProgressOverlay
        visible={visible}
        progress={65}
        status="exporting"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

const ProgressStatusPanelDemo = () => (
  <ProgressStatusPanel
    status="processing"
    progress={75}
    message="正在处理数据..."
  />
);

// 组件注册表
export const COMPONENT_REGISTRY: ComponentInfo[] = [
  // 数据展示组件
  {
    id: 'statistic-card',
    name: 'StatisticCard',
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
    id: 'data-item',
    name: 'DataItem',
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
    category: ComponentCategory.DATA_DISPLAY,
    description: '媒体预览组件，支持图片和视频预览。',
    component: MediaPreviewDemo,
    propsDefinition: [
      { name: 'visible', description: '是否可见', type: 'boolean', default: '-' },
      { name: 'mediaList', description: '媒体列表', type: 'MediaItem[]', default: '-' },
      { name: 'current', description: '当前索引', type: 'number', default: '-' },
      { name: 'onClose', description: '关闭回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { MediaPreview } from 'guanshu-component-library';

<MediaPreview
  visible={visible}
  mediaList={[
    { type: 'image', url: 'https://...', title: '图片1' },
  ]}
  current={0}
  onClose={() => setVisible(false)}
/>`,
  },
  {
    id: 'overview-item',
    name: 'OverviewItem',
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
  },
  {
    id: 'simple-modal-header',
    name: 'SimpleModalHeader',
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
  },
  {
    id: 'card-grid',
    name: 'CardGrid',
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
    category: ComponentCategory.FORM,
    description: '日期弹出选择器组件。',
    component: DatePopoverDemo,
    propsDefinition: [
      { name: 'date', description: '日期', type: 'Date', default: '-' },
      { name: 'onChange', description: '变化回调', type: '(date: Date) => void', default: '-' },
      { name: 'children', description: '触发器', type: 'ReactNode', default: '-' },
    ],
    codeSnippet: `import { DatePopover } from 'guanshu-component-library';

<DatePopover
  date={date}
  onChange={setDate}
>
  <button>选择日期</button>
</DatePopover>`,
  },
  {
    id: 'update-modal',
    name: 'UpdateModal',
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
  },
  {
    id: 'loading-progress',
    name: 'LoadingProgress',
    category: ComponentCategory.FEEDBACK,
    description: '加载进度组件。',
    component: LoadingProgressDemo,
    propsDefinition: [
      { name: 'current', description: '当前值', type: 'number', default: '-' },
      { name: 'total', description: '总数', type: 'number', default: '-' },
      { name: 'status', description: '状态', type: 'string', default: '-' },
      { name: 'text', description: '提示文本', type: 'string', default: '-' },
    ],
    codeSnippet: `import { LoadingProgress } from 'guanshu-component-library';

<LoadingProgress
  current={50}
  total={100}
  status="loading"
  text="加载中..."
/>`,
  },
  {
    id: 'multi-step-progress',
    name: 'MultiStepProgress',
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
    category: ComponentCategory.FEEDBACK,
    description: '导出进度遮罩组件。',
    component: ExportProgressOverlayDemo,
    propsDefinition: [
      { name: 'visible', description: '是否可见', type: 'boolean', default: '-' },
      { name: 'progress', description: '进度百分比', type: 'number', default: '-' },
      { name: 'status', description: '状态', type: 'string', default: '-' },
      { name: 'onCancel', description: '取消回调', type: '() => void', default: '-' },
    ],
    codeSnippet: `import { ExportProgressOverlay } from 'guanshu-component-library';

<ExportProgressOverlay
  visible={visible}
  progress={65}
  status="exporting"
  onCancel={() => setVisible(false)}
/>`,
  },
  {
    id: 'progress-status-panel',
    name: 'ProgressStatusPanel',
    category: ComponentCategory.FEEDBACK,
    description: '进度状态面板组件。',
    component: ProgressStatusPanelDemo,
    propsDefinition: [
      { name: 'status', description: '状态', type: 'string', default: '-' },
      { name: 'progress', description: '进度', type: 'number', default: '-' },
      { name: 'message', description: '消息', type: 'string', default: '-' },
    ],
    codeSnippet: `import { ProgressStatusPanel } from 'guanshu-component-library';

<ProgressStatusPanel
  status="processing"
  progress={75}
  message="正在处理数据..."
/>`,
  },
];
