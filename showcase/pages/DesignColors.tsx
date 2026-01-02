import React from 'react';
import { designTokens } from '../../src/theme';

const ColorBlock: React.FC<{
  name: string;
  color: string;
  textColor?: string;
}> = ({ name, color, textColor = '#fff' }) => (
  <div className="flex flex-col">
    <div
      className="w-full h-16 rounded-lg flex items-end p-2 shadow-sm"
      style={{ backgroundColor: color, color: textColor }}
    >
      <span className="text-xs font-mono opacity-90">{color}</span>
    </div>
    <span className="mt-2 text-sm text-gray-600">{name}</span>
  </div>
);

const ColorRow: React.FC<{
  title: string;
  colors: { name: string; color: string; textColor?: string }[];
}> = ({ title, colors }) => (
  <div className="mb-8">
    <h3 className="text-base font-medium text-gray-900 mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {colors.map((c) => (
        <ColorBlock key={c.name} {...c} />
      ))}
    </div>
  </div>
);

export const DesignColors: React.FC = () => {
  const brandColors = [
    { name: 'Primary', color: designTokens.colors.primary },
    { name: 'Primary Hover', color: designTokens.colors.primaryHover },
    { name: 'Primary Active', color: designTokens.colors.primaryActive },
  ];

  const semanticColors = [
    { name: 'Success', color: designTokens.colors.success },
    { name: 'Warning', color: designTokens.colors.warning },
    { name: 'Error', color: designTokens.colors.error },
    { name: 'Info', color: designTokens.colors.info },
  ];

  const neutralColors = [
    { name: '50', color: designTokens.neutral[50], textColor: '#171717' },
    { name: '100', color: designTokens.neutral[100], textColor: '#171717' },
    { name: '200', color: designTokens.neutral[200], textColor: '#171717' },
    { name: '300', color: designTokens.neutral[300], textColor: '#171717' },
    { name: '400', color: designTokens.neutral[400], textColor: '#171717' },
    { name: '500', color: designTokens.neutral[500] },
    { name: '600', color: designTokens.neutral[600] },
    { name: '700', color: designTokens.neutral[700] },
    { name: '800', color: designTokens.neutral[800] },
    { name: '900', color: designTokens.neutral[900] },
  ];

  const textColors = [
    { name: 'Primary', color: designTokens.text.primary },
    { name: 'Secondary', color: designTokens.text.secondary },
    { name: 'Tertiary', color: designTokens.text.tertiary },
    { name: 'Disabled', color: designTokens.text.disabled, textColor: '#171717' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">颜色系统</h1>
      <p className="text-gray-600 mb-8">
        观数组件库的颜色规范，与主项目保持一致。主色为观数蓝 #2563EB。
      </p>

      <ColorRow title="品牌色" colors={brandColors} />
      <ColorRow title="语义色" colors={semanticColors} />
      <ColorRow title="中性色" colors={neutralColors} />
      <ColorRow title="文本色" colors={textColors} />

      {/* 使用说明 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-base font-medium text-gray-900 mb-2">使用方式</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>TypeScript:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">
              {`import { designTokens } from 'guanshu-component-library'`}
            </code>
          </p>
          <p>
            <strong>Less:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">@color-primary</code>,{' '}
            <code className="bg-gray-200 px-1 rounded">@neutral-500</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignColors;
