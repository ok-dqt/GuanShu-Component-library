import React from 'react';
import { designTokens } from '../../src/theme';

const SpacingDemo: React.FC<{
  name: string;
  value: number;
  usage: string;
}> = ({ name, value, usage }) => (
  <div className="flex items-center py-4 border-b border-gray-200 last:border-0">
    <div className="w-16 text-sm text-gray-400 font-mono">{name}</div>
    <div className="w-20 text-sm text-gray-500">{value}px</div>
    <div className="flex-1 flex items-center">
      <div
        className="bg-accent-500 h-5 rounded"
        style={{ width: value * 4 }}
      />
    </div>
    <div className="w-40 text-sm text-gray-400">{usage}</div>
  </div>
);

const RadiusDemo: React.FC<{
  name: string;
  value: number;
  usage: string;
}> = ({ name, value, usage }) => (
  <div className="flex flex-col items-center">
    <div
      className="w-20 h-20 bg-accent-500 mb-3"
      style={{ borderRadius: value }}
    />
    <div className="text-sm font-mono text-gray-900">{value}px</div>
    <div className="text-xs text-gray-500">{name}</div>
    <div className="text-xs text-gray-400 mt-1">{usage}</div>
  </div>
);

export const DesignSpacing: React.FC = () => {
  const spacings = [
    { name: 'xs', value: designTokens.spacing.xs, usage: '图标间距' },
    { name: 'sm', value: designTokens.spacing.sm, usage: '紧凑元素' },
    { name: 'md', value: designTokens.spacing.md, usage: '默认间距' },
    { name: 'lg', value: designTokens.spacing.lg, usage: '区块间距' },
    { name: 'xl', value: designTokens.spacing.xl, usage: '大区块' },
    { name: 'xxl', value: designTokens.spacing.xxl, usage: '页面边距' },
  ];

  const radiuses = [
    { name: 'sm', value: designTokens.borderRadius.sm, usage: '按钮' },
    { name: 'base', value: designTokens.borderRadius.base, usage: '卡片' },
    { name: 'lg', value: designTokens.borderRadius.lg, usage: '弹窗' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">间距与圆角</h1>
      <p className="text-gray-500 text-lg mb-10">
        统一的间距和圆角规范，保持界面的和谐统一。
      </p>

      {/* 间距 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">间距 Spacing</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          {spacings.map((s) => (
            <SpacingDemo key={s.name} {...s} />
          ))}
        </div>
      </div>

      {/* 圆角 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">圆角 Border Radius</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="flex gap-12 justify-center">
            {radiuses.map((r) => (
              <RadiusDemo key={r.name} {...r} />
            ))}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 bg-accent-500 mb-3"
                style={{ borderRadius: '9999px' }}
              />
              <div className="text-sm font-mono text-gray-900">full</div>
              <div className="text-xs text-gray-500">pill</div>
              <div className="text-xs text-gray-400 mt-1">标签、徽章</div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">使用方式</h3>
        <div className="text-sm text-gray-500 space-y-3">
          <p>
            <span className="text-gray-700 font-medium">间距:</span>{' '}
            <code className="bg-gray-100 text-accent-600 px-2 py-1 rounded font-mono text-xs">@spacing-md</code>,{' '}
            <code className="bg-gray-100 text-accent-600 px-2 py-1 rounded font-mono text-xs">@spacing-lg</code>
          </p>
          <p>
            <span className="text-gray-700 font-medium">圆角:</span>{' '}
            <code className="bg-gray-100 text-accent-600 px-2 py-1 rounded font-mono text-xs">@border-radius-base</code>,{' '}
            <code className="bg-gray-100 text-accent-600 px-2 py-1 rounded font-mono text-xs">@border-radius-lg</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignSpacing;
