import React from 'react';
import { designTokens } from '../../src/theme';

const SpacingDemo: React.FC<{
  name: string;
  value: number;
  usage: string;
}> = ({ name, value, usage }) => (
  <div className="flex items-center py-4 border-b border-neutral-800 last:border-0">
    <div className="w-16 text-sm text-neutral-500 font-mono">{name}</div>
    <div className="w-20 text-sm text-neutral-500">{value}px</div>
    <div className="flex-1 flex items-center">
      <div
        className="bg-accent-500 h-5 rounded"
        style={{ width: value * 4 }}
      />
    </div>
    <div className="w-40 text-sm text-neutral-500">{usage}</div>
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
    <div className="text-sm font-mono text-white">{value}px</div>
    <div className="text-xs text-neutral-400">{name}</div>
    <div className="text-xs text-neutral-500 mt-1">{usage}</div>
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
      <h1 className="text-3xl font-bold text-white mb-3">间距与圆角</h1>
      <p className="text-neutral-400 text-lg mb-10">
        统一的间距和圆角规范，保持界面的和谐统一。
      </p>

      {/* 间距 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">间距 Spacing</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          {spacings.map((s) => (
            <SpacingDemo key={s.name} {...s} />
          ))}
        </div>
      </div>

      {/* 圆角 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">圆角 Border Radius</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
          <div className="flex gap-12 justify-center">
            {radiuses.map((r) => (
              <RadiusDemo key={r.name} {...r} />
            ))}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 bg-accent-500 mb-3"
                style={{ borderRadius: '9999px' }}
              />
              <div className="text-sm font-mono text-white">full</div>
              <div className="text-xs text-neutral-400">pill</div>
              <div className="text-xs text-neutral-500 mt-1">标签、徽章</div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-base font-semibold text-white mb-4">使用方式</h3>
        <div className="text-sm text-neutral-400 space-y-3">
          <p>
            <span className="text-neutral-300 font-medium">间距:</span>{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@spacing-md</code>,{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@spacing-lg</code>
          </p>
          <p>
            <span className="text-neutral-300 font-medium">圆角:</span>{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@border-radius-base</code>,{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@border-radius-lg</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignSpacing;
