import React from 'react';
import { Logo } from '../../src/brand/Logo';

export const DesignLogo: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Logo 品牌标识</h1>
      <p className="text-gray-500 text-lg mb-10">
        观数（GuanShu）品牌标识，用于浏览器扩展和组件库网站。
      </p>

      {/* Logo 展示 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">Logo 展示</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-lg justify-center">
            <Logo size="large" />
          </div>
        </div>
      </div>

      {/* 尺寸规范 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">尺寸规范</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-8 py-4 border-b border-gray-200 last:border-0">
              <div className="w-28 text-sm text-gray-400 font-mono">Large (48px)</div>
              <Logo size="large" />
            </div>
            <div className="flex items-center gap-8 py-4 border-b border-gray-200 last:border-0">
              <div className="w-28 text-sm text-gray-400 font-mono">Default (32px)</div>
              <Logo size="default" />
            </div>
            <div className="flex items-center gap-8 py-4">
              <div className="w-28 text-sm text-gray-400 font-mono">Small (16px)</div>
              <Logo size="small" />
            </div>
          </div>
        </div>
      </div>

      {/* 使用场景 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">使用场景</h3>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider bg-gray-50">
                  <th className="py-4 px-6 text-left font-medium">场景</th>
                  <th className="py-4 px-6 text-left font-medium">推荐尺寸</th>
                  <th className="py-4 px-6 text-left font-medium">说明</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-700">网站头部</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-600 font-mono text-xs">32px</code>
                  </td>
                  <td className="py-4 px-6 text-gray-500">侧边栏和顶栏 Logo</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-700">弹窗标题</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-600 font-mono text-xs">24px</code>
                  </td>
                  <td className="py-4 px-6 text-gray-500">Modal 头部 Logo</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-700">图标尺寸</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-600 font-mono text-xs">16px</code>
                  </td>
                  <td className="py-4 px-6 text-gray-500">小型展示场景</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">代码示例</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="code-block rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono whitespace-pre leading-relaxed">{`import { Logo } from 'guanshu-component-library';

// 使用预设尺寸
<Logo size="small" />   // 16px
<Logo size="default" /> // 32px
<Logo size="large" />   // 48px

// 自定义高度
<Logo height={24} />
<Logo height="2rem" />`}</pre>
          </div>
        </div>
      </div>

      {/* 使用禁忌 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">使用禁忌</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">✕</span>
              <span>不要拉伸或压缩 Logo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">✕</span>
              <span>不要更改 Logo 颜色</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">✕</span>
              <span>保持 Logo 周围足够的留白空间</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">✕</span>
              <span>不要在复杂背景上直接使用</span>
            </li>
          </ul>
        </div>
      </div>

      {/* API */}
      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900">API</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider bg-gray-50">
                <th className="py-4 px-6 text-left font-medium">属性</th>
                <th className="py-4 px-6 text-left font-medium">说明</th>
                <th className="py-4 px-6 text-left font-medium">类型</th>
                <th className="py-4 px-6 text-left font-medium">默认值</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">size</code>
                </td>
                <td className="py-4 px-6 text-gray-700">Logo 尺寸</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-600 text-xs">'small' | 'default' | 'large'</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-gray-500 text-xs">'default'</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">height</code>
                </td>
                <td className="py-4 px-6 text-gray-700">自定义高度</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-600 text-xs">number | string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-gray-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">className</code>
                </td>
                <td className="py-4 px-6 text-gray-700">自定义类名</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-600 text-xs">string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-gray-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">style</code>
                </td>
                <td className="py-4 px-6 text-gray-700">自定义样式</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-600 text-xs">React.CSSProperties</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-gray-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">alt</code>
                </td>
                <td className="py-4 px-6 text-gray-700">alt 文本</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-600 text-xs">string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-gray-500 text-xs">'观数'</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DesignLogo;
