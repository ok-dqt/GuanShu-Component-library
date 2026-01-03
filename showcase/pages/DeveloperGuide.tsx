import React from 'react';
import {
  CheckCircleOutlined,
  CopyOutlined,
  CheckOutlined,
  ThunderboltOutlined,
  ApiOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  ExportOutlined,
  SafetyOutlined,
  FileTextOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="code-block rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-gray-300 font-mono whitespace-pre leading-relaxed">{code}</pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-gray-700 text-gray-400 hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
        title="复制代码"
      >
        {copied ? (
          <CheckOutlined style={{ fontSize: '14px', color: '#22c55e' }} />
        ) : (
          <CopyOutlined style={{ fontSize: '14px' }} />
        )}
      </button>
    </div>
  );
};

const StepItem: React.FC<{
  step: number;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ step, title, icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-9 h-9 rounded-full bg-accent-600 text-white flex items-center justify-center font-semibold text-sm">
        {step}
      </div>
      <div className="flex items-center gap-2">
        {icon && <span className="text-accent-600">{icon}</span>}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <div className="ml-[52px]">{children}</div>
  </div>
);

const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-accent-600 text-xl">{icon}</span>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
);

const FileLink: React.FC<{ path: string; description: string }> = ({ path, description }) => (
  <div className="flex items-start gap-3 py-2">
    <code className="text-xs bg-gray-100 text-accent-600 px-2 py-1 rounded font-mono flex-shrink-0">
      {path}
    </code>
    <span className="text-sm text-gray-600">{description}</span>
  </div>
);

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3">
    <CheckCircleOutlined className="text-green-500 text-base" />
    <span className="text-gray-700">{children}</span>
  </div>
);

export const DeveloperGuide: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">插件开发规范</h1>
      <p className="text-gray-500 text-lg mb-10">
        观数插件功能按钮的标准开发流程与规范
      </p>

      {/* 最佳参考 */}
      <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 mb-10">
        <h3 className="text-base font-semibold text-accent-700 mb-4">最佳参考实现</h3>
        <p className="text-sm text-gray-600 mb-3">
          完整功能参考目录：<code className="bg-white px-2 py-0.5 rounded text-accent-600">entrypoints/market-rank.content/</code>
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <FeatureItem>按钮注入 (index.tsx)</FeatureItem>
          <FeatureItem>主组件 (main.tsx)</FeatureItem>
          <FeatureItem>API 服务 (common/service/)</FeatureItem>
          <FeatureItem>类型定义 (common/types/)</FeatureItem>
          <FeatureItem>弹窗组件 (components/)</FeatureItem>
          <FeatureItem>缓存 Hook (hooks/)</FeatureItem>
        </div>
      </div>

      {/* 开发步骤 */}
      <Section title="开发步骤" icon={<ThunderboltOutlined />}>
        <StepItem step={1} title="按钮注入" icon={<AppstoreOutlined />}>
          <p className="text-gray-500 mb-4">将按钮注入到页面指定位置</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">核心要点</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 使用唯一 ID 的包装器 div</li>
              <li>• 通过 CSS 选择器 + 文本匹配精确定位锚点</li>
              <li>• 配置重试机制处理 SPA 延迟渲染</li>
              <li>• 监听 popstate 事件处理路由变化</li>
            </ul>
          </div>

          <CodeBlock
            code={`const WRAPPER_ID = 'guanshu-xxx-xxx'; // 唯一标识

// 按钮样式：使用 Ant Design Button，不设置 size="small"
<Button type="primary" onClick={handleClick}>
  功能名称
</Button>`}
          />

          <div className="mt-4 text-sm">
            <span className="text-gray-500">参考文件：</span>
            <code className="ml-2 bg-gray-100 px-2 py-0.5 rounded text-accent-600">
              entrypoints/ci-monitor.content/index.tsx
            </code>
          </div>
        </StepItem>

        <StepItem step={2} title="API 数据获取" icon={<ApiOutlined />}>
          <p className="text-gray-500 mb-4">调研页面接口并封装 API 服务</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">调研方法</h4>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>打开开发者工具 Network 面板</li>
              <li>筛选 Fetch/XHR 请求</li>
              <li>分析请求的 URL、参数、响应结构</li>
            </ol>
          </div>

          <CodeBlock
            code={`// Token 获取（不要重复造轮子）
import { getTbToken } from '@/common/utils/getToken';

// API Service 标准模式
const API_URL = 'https://sycm.taobao.com/xxx/xxx.json';

export const CONFIG = {
  PAGE_SIZE: 50,
  REQUEST_DELAY_MIN: 800,
  REQUEST_DELAY_MAX: 1500,
};

// 从 URL 获取参数（动态获取，不硬编码）
export function getUrlParams() { ... }

// 获取单页数据
export async function fetchPage(page: number, signal?: AbortSignal) { ... }

// 获取全部数据（带进度回调）
export async function fetchAll(onProgress?, signal?) { ... }`}
          />
        </StepItem>

        <StepItem step={3} title="弹窗设计" icon={<AppstoreOutlined />}>
          <p className="text-gray-500 mb-4">保持所有弹窗的设计一致性</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">弹窗结构</h4>
            <CodeBlock
              code={`Modal
├── title: ModalHeader (Logo + 标题 + 右上角按钮)
├── 筛选操作区
│   ├── 左侧: 筛选条件
│   └── 右侧: TableDataSummary + 导出按钮
├── 表格区域: Table
└── 分页区域: PaginationFooter`}
            />
          </div>

          <CodeBlock
            code={`// 使用组件库的 ModalActionHeader
import { ModalActionHeader } from 'guanshu-component-library';

<ModalActionHeader
  title="功能名称"
  logo={<Logo />}
  actions={[
    { key: 'clear', icon: 'icon-hengfu_qingchuhuancun', label: '清除缓存' },
    { key: 'user', icon: 'icon-hengfu_gerenzhongxin', label: '个人中心' },
    { key: 'feedback', icon: 'icon-fankui', label: '反馈' },
  ]}
/>`}
          />
        </StepItem>

        <StepItem step={4} title="缓存设计" icon={<DatabaseOutlined />}>
          <p className="text-gray-500 mb-4">缓存键必须包含所有影响数据的因素</p>

          <CodeBlock
            code={`interface CacheKey {
  dateRange: string;    // 日期范围
  dateType: string;     // 日期类型（day/week/month）
  orderBy: string;      // 排序字段
  order: string;        // 排序方向
  // ... 其他 API 参数
}

const getCacheKey = () => {
  const params = getUrlParams();
  return JSON.stringify({
    dateRange: params.dateRange,
    dateType: params.dateType,
    orderBy: params.orderBy,
    order: params.order,
  });
};

// 缓存失效条件
// 1. 用户修改筛选条件
// 2. 用户点击"清除缓存"按钮
// 3. 缓存键发生变化`}
          />

          <div className="mt-4 text-sm">
            <span className="text-gray-500">公共 Hook：</span>
            <code className="ml-2 bg-gray-100 px-2 py-0.5 rounded text-accent-600">
              common/hooks/use-table-cache.ts
            </code>
          </div>
        </StepItem>

        <StepItem step={5} title="导出功能" icon={<ExportOutlined />}>
          <p className="text-gray-500 mb-4">支持 CSV 和 Excel（带图片）两种格式</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">文件命名规范</h4>
            <code className="text-sm text-accent-600">观数_$&#123;功能路径&#125;_$&#123;时间范围&#125;.$&#123;扩展名&#125;</code>
            <p className="text-xs text-gray-500 mt-2">示例：观数_市场排行_商品_2026-01-01.csv</p>
          </div>

          <CodeBlock
            code={`const exportMenuItems = [
  { key: 'csv', label: '导出为 CSV' },
  { key: 'xlsx', label: '导出为 XLSX' },
  { key: 'xlsx-images', label: '导出为 XLSX (带图片)' },
];

const handleExport = async (format) => {
  const dateRange = getDateRangeFromDOM();
  const fileName = \`观数_功能名称_\${dateRange}\`;

  if (format === 'csv') {
    exportToCsv(data, columns, fileName);
  } else if (format === 'xlsx') {
    exportToExcel(data, columns, fileName);
  } else {
    await exportWithImages(data, columns, fileName);
  }
};`}
          />
        </StepItem>

        <StepItem step={6} title="登录检查" icon={<SafetyOutlined />}>
          <p className="text-gray-500 mb-4">所有需要会员权限的功能都需要登录检查</p>

          <CodeBlock
            code={`import { useLoginCheck } from '@/common/hooks/use-auch-action';

const MyComponent = () => {
  const { withLogin } = useLoginCheck();

  const handleClick = () => {
    withLogin(() => {
      // 登录后执行的操作
      setModalOpen(true);
    });
  };

  return <Button onClick={handleClick}>打开弹窗</Button>;
};

// 监听登出消息，关闭弹窗
import { useExtensionMessage } from '@/common/hooks/use-message';
import { SET_LOGIN } from '@/common/constant/message';

const { onMessage } = useExtensionMessage();

useEffect(() => {
  const off = onMessage(SET_LOGIN, () => {
    setModalOpen(false);
  });
  return off;
}, [onMessage]);`}
          />
        </StepItem>
      </Section>

      {/* 类型定义规范 */}
      <Section title="类型定义规范" icon={<FileTextOutlined />}>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">目录结构</h4>
          <CodeBlock
            code={`entrypoints/xxx.content/
├── common/
│   ├── types/           # 类型定义
│   │   ├── xxx.ts       # 功能相关类型
│   │   └── index.ts     # 导出
│   ├── service/         # API 服务
│   └── utils/           # 工具函数
├── components/          # UI 组件
├── hooks/               # 自定义 Hooks
├── index.tsx            # 入口
└── main.tsx             # 主组件`}
          />
        </div>

        <CodeBlock
          code={`// common/types/xxx.ts

/** 单条数据 DTO */
export interface XxxItemDTO {
  id: string;
  name: string;
  // ...
}

/** API 响应结构 */
export interface XxxListResponse {
  code: number;
  message: string;
  data: {
    data: XxxItemDTO[];
    recordCount: number;
  };
}`}
        />
      </Section>

      {/* 公共工具函数 */}
      <Section title="公共工具函数" icon={<ToolOutlined />}>
        <p className="text-gray-500 mb-4">避免重复造轮子，先查看 common/ 目录</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">common/utils/</h4>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
              <FileLink path="getToken.ts" description="获取淘宝 Token" />
              <FileLink path="delay.ts" description="延迟执行" />
              <FileLink path="export.ts" description="基础导出" />
              <FileLink path="exportWithImages.ts" description="带图片导出" />
              <FileLink path="formatNumber.ts" description="数字格式化" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">common/hooks/</h4>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
              <FileLink path="use-auch-action.ts" description="登录检查" />
              <FileLink path="use-message.ts" description="扩展消息通信" />
              <FileLink path="use-table-cache.ts" description="表格缓存" />
              <FileLink path="use-table-data.ts" description="表格数据" />
              <FileLink path="use-smart-login.ts" description="智能登录" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">common/components/</h4>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
              <FileLink path="ModalHeader/" description="弹窗头部（Logo + 标题 + 操作按钮）" />
              <FileLink path="TableDataSummary/" description="数据统计摘要" />
              <FileLink path="ErrorBoundary.tsx" description="错误边界" />
              <FileLink path="UpdateModal.tsx" description="更新提示弹窗" />
            </div>
          </div>
        </div>
      </Section>

      {/* 快速开始 */}
      <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">快速开始</h3>
        <ol className="space-y-3 text-sm text-gray-600 list-decimal list-inside">
          <li>复制 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-accent-600">entrypoints/market-rank.content/</code> 目录结构</li>
          <li>修改 index.tsx 中的锚点选择器和页面检测逻辑</li>
          <li>修改 API 服务调用目标接口</li>
          <li>修改弹窗组件的表格列定义</li>
          <li>测试功能</li>
        </ol>
      </div>

      {/* 注意事项 */}
      <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
        <h3 className="text-base font-semibold text-amber-800 mb-4">注意事项</h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li>• 不要重复造轮子，先查看 common/ 目录</li>
          <li>• 保持 UI 一致性，使用 ModalHeader 组件</li>
          <li>• 缓存键必须包含所有 API 参数</li>
          <li>• 导出文件名遵循规范</li>
          <li>• Content Script 异常不能影响宿主页面</li>
        </ul>
      </div>
    </div>
  );
};

export default DeveloperGuide;
