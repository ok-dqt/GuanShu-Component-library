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
} from '@ant-design/icons';
import { COMPONENT_REGISTRY } from './registry';
import { ComponentCategory } from './types';
import { GettingStarted, DesignColors, DesignTypography, DesignSpacing, DesignLogo } from './pages';

type PageType = 'getting-started' | 'colors' | 'typography' | 'spacing' | 'logo' | 'component';

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
          <div className="space-y-8">
            {/* Description */}
            <p className="text-neutral-400 text-base leading-relaxed">
              {selectedComponent.description}
            </p>

            {/* Preview / Code Card */}
            <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
              {/* Tab Bar */}
              <div className="border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1 p-1 bg-neutral-800/50 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`
                      px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-all
                      ${activeTab === 'preview'
                        ? 'bg-neutral-700 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200'
                      }
                    `}
                  >
                    <PlayCircleOutlined style={{ fontSize: '14px' }} />
                    预览
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`
                      px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-all
                      ${activeTab === 'code'
                        ? 'bg-neutral-700 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200'
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
                    className="p-2 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
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
                {activeTab === 'preview' ? (
                  <div className="preview-grid p-8 flex items-center justify-center min-h-[320px]">
                    <div className="w-full flex justify-center">
                      <selectedComponent.component />
                    </div>
                  </div>
                ) : (
                  <div className="code-block p-6 overflow-auto max-h-[500px]">
                    <pre className="text-sm leading-relaxed">
                      <code className="font-mono text-neutral-300">
                        {selectedComponent.codeSnippet}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* API Table */}
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
                    {selectedComponent.propsDefinition.map((prop, index) => (
                      <tr
                        key={prop.name}
                        className={`
                          border-b border-neutral-800/50 last:border-0
                          hover:bg-neutral-800/30 transition-colors
                        `}
                      >
                        <td className="py-4 px-6">
                          <code className="font-mono text-accent-400 bg-accent-500/10 px-2 py-1 rounded text-xs">
                            {prop.name}
                          </code>
                        </td>
                        <td className="py-4 px-6 text-neutral-300">{prop.description}</td>
                        <td className="py-4 px-6">
                          <code className="font-mono text-pink-400 text-xs">{prop.type}</code>
                        </td>
                        <td className="py-4 px-6">
                          <code className="font-mono text-neutral-500 text-xs">
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
    <div className="flex h-screen bg-neutral-950 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-neutral-800 flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}popup_logo.svg`}
            alt="观数"
            className="h-8 mr-3"
          />
          <span className="font-semibold text-lg text-white tracking-tight">组件库</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          {navGroups.map((group) => {
            if (group.items.length === 0) return null;

            return (
              <div key={group.title} className="mb-8">
                <h3 className="px-3 mb-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">
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
                              ? 'bg-neutral-800 text-white'
                              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                            }
                          `}
                        >
                          {item.icon && (
                            <span className={isActive ? 'text-accent-400' : 'text-neutral-500'}>
                              {item.icon}
                            </span>
                          )}
                          <span>{item.name}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-500" />
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
        <div className="px-5 py-4 border-t border-neutral-800 text-xs text-neutral-500">
          <span>v1.0.0</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800 flex items-center justify-between px-6 flex-shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-white">{getPageTitle()}</h1>
            {currentNav?.type === 'component' && selectedComponent && (
              <>
                <span className="text-sm text-neutral-500 font-mono">
                  {selectedComponent.name}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full">
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
              className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="GitHub"
            >
              <GithubOutlined style={{ fontSize: '20px' }} />
            </a>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
