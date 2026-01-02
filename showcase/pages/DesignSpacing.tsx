import React from 'react';
import { designTokens } from '../../src/theme';

const SpacingDemo: React.FC<{
  name: string;
  value: number;
  usage: string;
}> = ({ name, value, usage }) => (
  <div className="flex items-center py-3 border-b border-gray-100 last:border-0">
    <div className="w-16 text-sm text-gray-500 font-mono">{name}</div>
    <div className="w-16 text-sm text-gray-500">{value}px</div>
    <div className="flex-1 flex items-center">
      <div
        className="bg-blue-500 h-4 rounded"
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
      className="w-16 h-16 bg-blue-500 mb-2"
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
      <h1 className="text-2xl font-bold text-gray-900 mb-2">间距与圆角</h1>
      <p className="text-gray-600 mb-8">
        统一的间距和圆角规范，保持界面的和谐统一。
      </p>

      {/* 间距 */}
      <div className="mb-8">
        <h3 className="text-base font-medium text-gray-900 mb-4">间距 Spacing</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          {spacings.map((s) => (
            <SpacingDemo key={s.name} {...s} />
          ))}
        </div>
      </div>

      {/* 圆角 */}
      <div className="mb-8">
        <h3 className="text-base font-medium text-gray-900 mb-4">圆角 Border Radius</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex gap-8 justify-center">
            {radiuses.map((r) => (
              <RadiusDemo key={r.name} {...r} />
            ))}
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 bg-blue-500 mb-2"
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
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-base font-medium text-gray-900 mb-2">使用方式</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>间距:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">@spacing-md</code>,{' '}
            <code className="bg-gray-200 px-1 rounded">@spacing-lg</code>
          </p>
          <p>
            <strong>圆角:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">@border-radius-base</code>,{' '}
            <code className="bg-gray-200 px-1 rounded">@border-radius-lg</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignSpacing;
