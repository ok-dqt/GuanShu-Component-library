import React from 'react';
import { CheckCircleOutlined, CopyOutlined, CheckOutlined } from '@ant-design/icons';

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="code-block rounded-lg p-4 overflow-x-auto border border-neutral-800">
        <pre className="text-sm text-neutral-300 font-mono whitespace-pre leading-relaxed">{code}</pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-neutral-800 text-neutral-400 hover:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity"
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
  children: React.ReactNode;
}> = ({ step, title, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-9 h-9 rounded-full bg-accent-600 text-white flex items-center justify-center font-semibold text-sm">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="ml-[52px]">{children}</div>
  </div>
);

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3">
    <CheckCircleOutlined className="text-success text-base" />
    <span className="text-neutral-300">{children}</span>
  </div>
);

export const GettingStarted: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-3">快速开始</h1>
      <p className="text-neutral-400 text-lg mb-10">
        5 分钟上手观数组件库，开始构建浏览器扩展界面。
      </p>

      {/* 特性 */}
      <div className="bg-accent-600/10 border border-accent-600/20 rounded-xl p-6 mb-10">
        <h3 className="text-base font-semibold text-accent-400 mb-4">特性</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <FeatureItem>31 个生产级组件</FeatureItem>
          <FeatureItem>完整 TypeScript 支持</FeatureItem>
          <FeatureItem>基于 Ant Design 5</FeatureItem>
          <FeatureItem>浏览器扩展优化</FeatureItem>
        </div>
      </div>

      {/* 步骤 */}
      <StepItem step={1} title="安装组件库">
        <p className="text-neutral-400 mb-4">在主项目中添加组件库依赖：</p>
        <CodeBlock
          code={`# 方式一：相对路径引用
npm install ../component

# 方式二：npm link（开发时）
cd component && npm link
cd ../xc-sealseek-extension-sycm && npm link guanshu-component-library`}
        />
      </StepItem>

      <StepItem step={2} title="引入样式">
        <p className="text-neutral-400 mb-4">在入口文件中引入组件库样式：</p>
        <CodeBlock
          code={`// 在 App.tsx 或入口文件中
import 'guanshu-component-library/style';`}
        />
      </StepItem>

      <StepItem step={3} title="配置主题">
        <p className="text-neutral-400 mb-4">使用 Ant Design ConfigProvider 应用主题：</p>
        <CodeBlock
          code={`import { ConfigProvider } from 'antd';
import { theme, prefix } from 'guanshu-component-library';

function App() {
  return (
    <ConfigProvider theme={theme} prefixCls={prefix}>
      {/* 你的应用 */}
    </ConfigProvider>
  );
}`}
        />
      </StepItem>

      <StepItem step={4} title="使用组件">
        <p className="text-neutral-400 mb-4">导入并使用组件：</p>
        <CodeBlock
          code={`import {
  StatisticCard,
  FilterBar,
  ErrorBoundary,
  type StatisticCardProps
} from 'guanshu-component-library';

function Dashboard() {
  return (
    <ErrorBoundary>
      <StatisticCard
        title="总销售额"
        value={123456}
        suffix="元"
        trend={{ value: 12.5, type: 'up' }}
      />
    </ErrorBoundary>
  );
}`}
        />
      </StepItem>

      {/* 构建命令 */}
      <div className="mt-10 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-base font-semibold text-white mb-4">常用命令</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <code className="w-44 text-accent-400 font-mono">npm run dev</code>
            <span className="text-neutral-400">启动 Showcase 开发服务</span>
          </div>
          <div className="flex items-center">
            <code className="w-44 text-accent-400 font-mono">npm run build:lib</code>
            <span className="text-neutral-400">构建组件库</span>
          </div>
          <div className="flex items-center">
            <code className="w-44 text-accent-400 font-mono">npm run build</code>
            <span className="text-neutral-400">构建 Showcase 文档</span>
          </div>
        </div>
      </div>

      {/* 项目结构 */}
      <div className="mt-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-base font-semibold text-white mb-4">项目结构</h3>
        <CodeBlock
          code={`src/
├── basic/          # 基础组件 (6)
├── layout/         # 布局组件 (3)
├── data-display/   # 数据展示 (8)
├── form/           # 表单组件 (3)
├── feedback/       # 反馈组件 (7)
├── business/       # 业务组件 (3)
├── theme/          # 主题配置
├── style/          # 全局样式
└── index.ts        # 导出入口`}
        />
      </div>
    </div>
  );
};

export default GettingStarted;
