import React from 'react';
import { Logo } from '../../src/brand/Logo';

export const DesignLogo: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-3">Logo 品牌标识</h1>
      <p className="text-neutral-400 text-lg mb-10">
        观数（GuanShu）品牌标识，用于浏览器扩展和组件库网站。
      </p>

      {/* Logo 展示 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">Logo 展示</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          <div className="flex items-center gap-8 p-8 bg-neutral-800/50 rounded-lg justify-center">
            <Logo size="large" />
          </div>
        </div>
      </div>

      {/* 尺寸规范 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">尺寸规范</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-8 py-4 border-b border-neutral-800 last:border-0">
              <div className="w-28 text-sm text-neutral-500 font-mono">Large (48px)</div>
              <Logo size="large" />
            </div>
            <div className="flex items-center gap-8 py-4 border-b border-neutral-800 last:border-0">
              <div className="w-28 text-sm text-neutral-500 font-mono">Default (32px)</div>
              <Logo size="default" />
            </div>
            <div className="flex items-center gap-8 py-4">
              <div className="w-28 text-sm text-neutral-500 font-mono">Small (16px)</div>
              <Logo size="small" />
            </div>
          </div>
        </div>
      </div>

      {/* 使用场景 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">使用场景</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 text-left font-medium">场景</th>
                  <th className="py-4 px-6 text-left font-medium">推荐尺寸</th>
                  <th className="py-4 px-6 text-left font-medium">说明</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                  <td className="py-4 px-6 text-neutral-300">网站头部</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-400 font-mono text-xs">32px</code>
                  </td>
                  <td className="py-4 px-6 text-neutral-500">侧边栏和顶栏 Logo</td>
                </tr>
                <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                  <td className="py-4 px-6 text-neutral-300">弹窗标题</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-400 font-mono text-xs">24px</code>
                  </td>
                  <td className="py-4 px-6 text-neutral-500">Modal 头部 Logo</td>
                </tr>
                <tr className="hover:bg-neutral-800/30 transition-colors">
                  <td className="py-4 px-6 text-neutral-300">图标尺寸</td>
                  <td className="py-4 px-6">
                    <code className="text-accent-400 font-mono text-xs">16px</code>
                  </td>
                  <td className="py-4 px-6 text-neutral-500">小型展示场景</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">代码示例</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          <div className="code-block rounded-lg p-4 overflow-x-auto border border-neutral-800">
            <pre className="text-sm text-neutral-300 font-mono whitespace-pre leading-relaxed">{`import { Logo } from 'guanshu-component-library';

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
        <h3 className="text-lg font-semibold text-white mb-5">使用禁忌</h3>
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
          <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex items-start gap-3">
              <span className="text-error mt-0.5">✕</span>
              <span>不要拉伸或压缩 Logo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error mt-0.5">✕</span>
              <span>不要更改 Logo 颜色</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error mt-0.5">✕</span>
              <span>保持 Logo 周围足够的留白空间</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error mt-0.5">✕</span>
              <span>不要在复杂背景上直接使用</span>
            </li>
          </ul>
        </div>
      </div>

      {/* API */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <div className="px-6 py-4 border-b border-neutral-800">
          <h2 className="text-lg font-semibold text-white">API</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-6 text-left font-medium">属性</th>
                <th className="py-4 px-6 text-left font-medium">说明</th>
                <th className="py-4 px-6 text-left font-medium">类型</th>
                <th className="py-4 px-6 text-left font-medium">默认值</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">size</code>
                </td>
                <td className="py-4 px-6 text-neutral-300">Logo 尺寸</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-400 text-xs">'small' | 'default' | 'large'</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-neutral-500 text-xs">'default'</code>
                </td>
              </tr>
              <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">height</code>
                </td>
                <td className="py-4 px-6 text-neutral-300">自定义高度</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-400 text-xs">number | string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-neutral-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">className</code>
                </td>
                <td className="py-4 px-6 text-neutral-300">自定义类名</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-400 text-xs">string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-neutral-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">style</code>
                </td>
                <td className="py-4 px-6 text-neutral-300">自定义样式</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-400 text-xs">React.CSSProperties</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-neutral-500 text-xs">-</code>
                </td>
              </tr>
              <tr className="hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-6">
                  <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">alt</code>
                </td>
                <td className="py-4 px-6 text-neutral-300">alt 文本</td>
                <td className="py-4 px-6">
                  <code className="font-mono text-pink-400 text-xs">string</code>
                </td>
                <td className="py-4 px-6">
                  <code className="font-mono text-neutral-500 text-xs">'观数'</code>
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
