import React from 'react';
import { Logo } from '../../src/brand/Logo';

export const DesignLogo: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-medium mb-4">Logo 观数品牌标识</h2>
        <p className="text-gray-600 mb-6">
          观数（GuanShu）品牌标识，用于浏览器扩展和组件库网站。
        </p>
      </section>

      {/* Logo 展示 */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">Logo 展示</h3>
        <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-lg justify-center">
          <Logo size="large" />
        </div>
      </section>

      {/* 尺寸规范 */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">尺寸规范</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-8">
            <div className="w-24 text-sm text-gray-500">Large (48px)</div>
            <Logo size="large" />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-24 text-sm text-gray-500">Default (32px)</div>
            <Logo size="default" />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-24 text-sm text-gray-500">Small (16px)</div>
            <Logo size="small" />
          </div>
        </div>
      </section>

      {/* 使用场景 */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">使用场景</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                <th className="py-3 px-2 font-semibold">场景</th>
                <th className="py-3 px-2 font-semibold">推荐尺寸</th>
                <th className="py-3 px-2 font-semibold">说明</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">网站头部</td>
                <td className="py-3 px-2 text-blue-600 font-mono">32px</td>
                <td className="py-3 px-2 text-gray-600">侧边栏和顶栏 Logo</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">弹窗标题</td>
                <td className="py-3 px-2 text-blue-600 font-mono">24px</td>
                <td className="py-3 px-2 text-gray-600">Modal 头部 Logo</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">图标尺寸</td>
                <td className="py-3 px-2 text-blue-600 font-mono">16px</td>
                <td className="py-3 px-2 text-gray-600">小型展示场景</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 代码示例 */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">代码示例</h3>
        <div className="bg-gray-900 rounded p-4 text-gray-100 font-mono text-sm overflow-auto">
          <pre className="whitespace-pre-wrap">{`import { Logo } from 'guanshu-component-library';

// 使用预设尺寸
<Logo size="small" />   // 16px
<Logo size="default" /> // 32px
<Logo size="large" />   // 48px

// 自定义高度
<Logo height={24} />
<Logo height="2rem" />`}</pre>
        </div>
      </section>

      {/* 使用禁忌 */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">使用禁忌</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
          <li>不要拉伸或压缩 Logo</li>
          <li>不要更改 Logo 颜色</li>
          <li>保持 Logo 周围足够的留白空间</li>
          <li>不要在复杂背景上直接使用</li>
        </ul>
      </section>

      {/* API */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium mb-4">API</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                <th className="py-3 px-2 font-semibold">属性</th>
                <th className="py-3 px-2 font-semibold">说明</th>
                <th className="py-3 px-2 font-semibold">类型</th>
                <th className="py-3 px-2 font-semibold">默认值</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-blue-600 font-mono">size</td>
                <td className="py-3 px-2 text-gray-600">Logo 尺寸</td>
                <td className="py-3 px-2 text-pink-600 font-mono text-xs">'small' | 'default' | 'large'</td>
                <td className="py-3 px-2 text-gray-500 font-mono">'default'</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-blue-600 font-mono">height</td>
                <td className="py-3 px-2 text-gray-600">自定义高度</td>
                <td className="py-3 px-2 text-pink-600 font-mono text-xs">number | string</td>
                <td className="py-3 px-2 text-gray-500 font-mono">-</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-blue-600 font-mono">className</td>
                <td className="py-3 px-2 text-gray-600">自定义类名</td>
                <td className="py-3 px-2 text-pink-600 font-mono text-xs">string</td>
                <td className="py-3 px-2 text-gray-500 font-mono">-</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-blue-600 font-mono">style</td>
                <td className="py-3 px-2 text-gray-600">自定义样式</td>
                <td className="py-3 px-2 text-pink-600 font-mono text-xs">React.CSSProperties</td>
                <td className="py-3 px-2 text-gray-500 font-mono">-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-2 text-blue-600 font-mono">alt</td>
                <td className="py-3 px-2 text-gray-600">alt 文本</td>
                <td className="py-3 px-2 text-pink-600 font-mono text-xs">string</td>
                <td className="py-3 px-2 text-gray-500 font-mono">'观数'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DesignLogo;
