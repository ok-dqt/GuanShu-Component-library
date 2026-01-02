import React from 'react';
import { designTokens } from '../../src/theme';

const FontSizeDemo: React.FC<{
  name: string;
  size: number;
  usage: string;
}> = ({ name, size, usage }) => (
  <div className="flex items-baseline py-4 border-b border-neutral-800 last:border-0">
    <div className="w-24 text-sm text-neutral-500 font-mono">{size}px</div>
    <div className="w-24 text-sm text-neutral-500">{name}</div>
    <div className="flex-1 text-white" style={{ fontSize: size }}>
      观数浏览器扩展 GuanShu
    </div>
    <div className="w-32 text-sm text-neutral-500">{usage}</div>
  </div>
);

const FontWeightDemo: React.FC<{
  name: string;
  weight: number;
  usage: string;
}> = ({ name, weight, usage }) => (
  <div className="flex items-baseline py-4 border-b border-neutral-800 last:border-0">
    <div className="w-24 text-sm text-neutral-500 font-mono">{weight}</div>
    <div className="w-24 text-sm text-neutral-500">{name}</div>
    <div className="flex-1 text-base text-white" style={{ fontWeight: weight }}>
      观数浏览器扩展 GuanShu Extension
    </div>
    <div className="w-32 text-sm text-neutral-500">{usage}</div>
  </div>
);

export const DesignTypography: React.FC = () => {
  const fontSizes = [
    { name: 'xl', size: designTokens.typography.fontSize.xl, usage: '大标题' },
    { name: 'lg', size: designTokens.typography.fontSize.lg, usage: '标题' },
    { name: 'base', size: designTokens.typography.fontSize.base, usage: '正文' },
    { name: 'sm', size: designTokens.typography.fontSize.sm, usage: '辅助文本' },
    { name: 'xs', size: designTokens.typography.fontSize.xs, usage: '标签、说明' },
  ];

  const fontWeights = [
    { name: 'normal', weight: designTokens.typography.fontWeight.normal, usage: '正文' },
    { name: 'medium', weight: designTokens.typography.fontWeight.medium, usage: '强调' },
    { name: 'semibold', weight: designTokens.typography.fontWeight.semibold, usage: '小标题' },
    { name: 'bold', weight: designTokens.typography.fontWeight.bold, usage: '大标题' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-3">字体规范</h1>
      <p className="text-neutral-400 text-lg mb-10">
        统一的字体大小和字重规范，确保界面的一致性和可读性。
      </p>

      {/* 字体族 */}
      <div className="mb-10 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-base font-semibold text-white mb-3">字体族</h3>
        <code className="text-sm text-neutral-400 font-mono break-all">
          {designTokens.typography.fontFamily}
        </code>
      </div>

      {/* 字号 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">字号 Font Size</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          {fontSizes.map((f) => (
            <FontSizeDemo key={f.name} {...f} />
          ))}
        </div>
      </div>

      {/* 字重 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">字重 Font Weight</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          {fontWeights.map((f) => (
            <FontWeightDemo key={f.name} {...f} />
          ))}
        </div>
      </div>

      {/* 使用说明 */}
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-base font-semibold text-white mb-4">使用方式</h3>
        <div className="text-sm text-neutral-400 space-y-3">
          <p>
            <span className="text-neutral-300 font-medium">Less 变量:</span>{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@font-size-base</code>,{' '}
            <code className="bg-neutral-800 text-accent-400 px-2 py-1 rounded font-mono text-xs">@font-weight-medium</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignTypography;
