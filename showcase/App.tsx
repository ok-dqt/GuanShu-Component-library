import React, { useState } from 'react';
import {
  CodeOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  ColumnWidthOutlined,
  GithubOutlined,
  PictureOutlined,
  CopyOutlined,
  CheckOutlined,
  RobotOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { COMPONENT_REGISTRY } from './registry';
import { ComponentCategory } from './types';
import { GettingStarted, DeveloperGuide, DesignColors, DesignTypography, DesignSpacing, DesignLogo } from './pages';

type PageType = 'getting-started' | 'developer-guide' | 'colors' | 'typography' | 'spacing' | 'logo' | 'component';

interface NavItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: PageType;
  componentId?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const App = () => {
  const [selectedNavId, setSelectedNavId] = useState<string>('getting-started');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  // 复制代码
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 构建导航结构
  const navGroups: NavGroup[] = [
    {
      title: '开始',
      items: [
        { id: 'getting-started', name: '快速开始', icon: <RocketOutlined />, type: 'getting-started' },
        { id: 'developer-guide', name: '插件开发规范', icon: <FileTextOutlined />, type: 'developer-guide' },
      ],
    },
    {
      title: '设计规范',
      items: [
        { id: 'logo', name: 'Logo', icon: <PictureOutlined />, type: 'logo' },
        { id: 'colors', name: '颜色', icon: <BgColorsOutlined />, type: 'colors' },
        { id: 'typography', name: '字体', icon: <FontSizeOutlined />, type: 'typography' },
        { id: 'spacing', name: '间距', icon: <ColumnWidthOutlined />, type: 'spacing' },
      ],
    },
    ...Object.values(ComponentCategory).map((category) => ({
      title: category,
      items: COMPONENT_REGISTRY.filter((c) => c.category === category).map((comp) => ({
        id: comp.id,
        name: comp.cnName,
        icon: null,
        type: 'component' as PageType,
        componentId: comp.id,
      })),
    })),
  ];

  // 获取当前选中的导航项
  const getCurrentNavItem = (): NavItem | undefined => {
    for (const group of navGroups) {
      const item = group.items.find((i) => i.id === selectedNavId);
      if (item) return item;
    }
    return navGroups[0].items[0];
  };

  const currentNav = getCurrentNavItem();
  const selectedComponent = currentNav?.type === 'component'
    ? COMPONENT_REGISTRY.find((c) => c.id === currentNav.componentId)
    : null;

  // 渲染页面内容
  const renderContent = () => {
    switch (currentNav?.type) {
      case 'getting-started':
        return <GettingStarted />;
      case 'developer-guide':
        return <DeveloperGuide />;
      case 'colors':
        return <DesignColors />;
      case 'typography':
        return <DesignTypography />;
      case 'spacing':
        return <DesignSpacing />;
      case 'logo':
        return <DesignLogo />;
      case 'component':
        if (!selectedComponent) return null;
        return (
          <div className="space-y-6">
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {selectedComponent.description}
            </p>

            {/* Preview / Code Card */}
            <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              {/* Tab Bar - 分段器 */}
              <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50">
                <div className="flex p-0.5 bg-gray-100 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`
                      px-4 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all
                      ${activeTab === 'preview'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                      }
                    `}
                  >
                    <PlayCircleOutlined style={{ fontSize: '14px' }} />
                    预览
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`
                      px-4 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all
                      ${activeTab === 'code'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                      }
                    `}
                  >
                    <CodeOutlined style={{ fontSize: '14px' }} />
                    代码
                  </button>
                </div>

                {activeTab === 'code' && (
                  <button
                    onClick={() => handleCopyCode(selectedComponent.codeSnippet)}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
                    title="复制代码"
                  >
                    {copied ? (
                      <CheckOutlined style={{ fontSize: '16px', color: '#22c55e' }} />
                    ) : (
                      <CopyOutlined style={{ fontSize: '16px' }} />
                    )}
                  </button>
                )}
              </div>

              {/* Content Area */}
              <div className="min-h-[320px]">
                {activeTab === 'preview' && (
                  <div className="preview-grid p-6 flex items-center justify-center min-h-[320px]">
                    <div className="w-full flex justify-center">
                      <selectedComponent.component />
                    </div>
                  </div>
                )}
                {activeTab === 'code' && (
                  <div className="code-block p-6 overflow-auto max-h-[500px]">
                    <pre className="text-sm leading-relaxed">
                      <code className="font-mono text-gray-300">
                        {selectedComponent.codeSnippet}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* AI 指南 - 独立模块 */}
            {selectedComponent.aiGuidance && (
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
                  <RobotOutlined style={{ fontSize: '16px' }} className="text-accent-600" />
                  <h2 className="text-lg font-semibold text-gray-900">AI 指南</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 适用场景 */}
                    <div>
                      <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        适用场景
                      </h3>
                      <ul className="space-y-2">
                        {selectedComponent.aiGuidance.whenToUse.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 不适用场景 */}
                    {selectedComponent.aiGuidance.whenNotToUse && (
                      <div>
                        <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          不适用场景
                        </h3>
                        <ul className="space-y-2">
                          {selectedComponent.aiGuidance.whenNotToUse.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 关键约束 */}
                    {selectedComponent.aiGuidance.constraints && (
                      <div>
                        <h3 className="text-sm font-semibold text-amber-700 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          关键约束
                        </h3>
                        <ul className="space-y-2">
                          {selectedComponent.aiGuidance.constraints.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-amber-500 mt-0.5">!</span>
                              <code className="text-xs bg-amber-50 text-amber-800 px-1 py-0.5 rounded">
                                {item}
                              </code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 组合建议 */}
                    {selectedComponent.aiGuidance.compositionWith && (
                      <div>
                        <h3 className="text-sm font-semibold text-blue-700 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          组合建议
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedComponent.aiGuidance.compositionWith.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 常见错误 */}
                    {selectedComponent.aiGuidance.commonMistakes && (
                      <div>
                        <h3 className="text-sm font-semibold text-orange-700 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          常见错误
                        </h3>
                        <ul className="space-y-2">
                          {selectedComponent.aiGuidance.commonMistakes.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-orange-500 mt-0.5">⚠</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 性能提示 */}
                    {selectedComponent.aiGuidance.performanceTips && (
                      <div>
                        <h3 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500" />
                          性能提示
                        </h3>
                        <ul className="space-y-2">
                          {selectedComponent.aiGuidance.performanceTips.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-purple-500 mt-0.5">⚡</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* API Table */}
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
                    {selectedComponent.propsDefinition.map((prop) => (
                      <tr
                        key={prop.name}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <code className="font-mono text-accent-600 bg-accent-50 px-2 py-1 rounded text-xs">
                            {prop.name}
                          </code>
                        </td>
                        <td className="py-4 px-6 text-gray-700">{prop.description}</td>
                        <td className="py-4 px-6">
                          <code className="font-mono text-pink-600 text-xs">{prop.type}</code>
                        </td>
                        <td className="py-4 px-6">
                          <code className="font-mono text-gray-500 text-xs">
                            {prop.default || '-'}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getPageTitle = () => {
    if (currentNav?.type === 'component' && selectedComponent) {
      return selectedComponent.cnName;
    }
    return currentNav?.name || '';
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-gray-200 flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}popup_logo.svg`}
            alt="观数"
            className="h-8 mr-3"
          />
          <span className="font-semibold text-lg text-gray-900 tracking-tight">组件库</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          {navGroups.map((group) => {
            if (group.items.length === 0) return null;

            return (
              <div key={group.title} className="mb-8">
                <h3 className="px-3 mb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = selectedNavId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setSelectedNavId(item.id);
                            if (item.type === 'component') {
                              setActiveTab('preview');
                            }
                          }}
                          className={`
                            nav-item w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3
                            text-sm font-medium
                            ${isActive
                              ? 'bg-accent-50 text-accent-700'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }
                          `}
                        >
                          {item.icon && (
                            <span className={isActive ? 'text-accent-600' : 'text-gray-400'}>
                              {item.icon}
                            </span>
                          )}
                          <span>{item.name}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-600" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-200 text-xs text-gray-400">
          <span>v1.0.0</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
            {currentNav?.type === 'component' && selectedComponent && (
              <>
                <span className="text-sm text-gray-400 font-mono">
                  {selectedComponent.name}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                  {selectedComponent.category}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ok-dqt/GuanShu-Component-library"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubOutlined style={{ fontSize: '20px' }} />
            </a>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
