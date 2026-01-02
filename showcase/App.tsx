import React, { useState } from 'react';
import {
  MenuOutlined,
  CodeOutlined,
  PlayCircleOutlined,
  RightOutlined,
  RocketOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  ColumnWidthOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { COMPONENT_REGISTRY } from './registry';
import { ComponentCategory } from './types';
import { GettingStarted, DesignColors, DesignTypography, DesignSpacing } from './pages';

type PageType = 'getting-started' | 'colors' | 'typography' | 'spacing' | 'component';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
      case 'component':
        if (!selectedComponent) return null;
        return (
          <>
            <p className="text-gray-600 mb-8 text-base">{selectedComponent.description}</p>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="border-b border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
                <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`
                      px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium
                      ${activeTab === 'preview' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    <PlayCircleOutlined style={{ fontSize: '12px' }} /> 预览
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`
                      px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium
                      ${activeTab === 'code' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    <CodeOutlined style={{ fontSize: '12px' }} /> 代码
                  </button>
                </div>
              </div>

              <div className="p-8 min-h-[300px] flex items-center justify-center bg-[#fafafa]">
                {activeTab === 'preview' ? (
                  <div className="w-full flex justify-center">
                    <selectedComponent.component />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-900 rounded p-4 text-gray-100 font-mono text-sm overflow-auto max-h-[500px]">
                    <pre className="whitespace-pre-wrap">{selectedComponent.codeSnippet}</pre>
                  </div>
                )}
              </div>
            </div>

            {/* API Table */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-4">API</h2>
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
                    {selectedComponent.propsDefinition.map((prop) => (
                      <tr key={prop.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-3 px-2 text-blue-600 font-mono">{prop.name}</td>
                        <td className="py-3 px-2 text-gray-600">{prop.description}</td>
                        <td className="py-3 px-2 text-pink-600 font-mono text-xs">{prop.type}</td>
                        <td className="py-3 px-2 text-gray-500 font-mono">{prop.default || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
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
    <div className="flex h-screen bg-[#f5f5f5] overflow-hidden text-sm">
      {/* Sidebar */}
      <div
        className={`
        ${isSidebarOpen ? 'w-64' : 'w-0'}
        bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-20 overflow-hidden
      `}
      >
        <div className="h-14 flex items-center px-4 border-b border-gray-100 flex-shrink-0">
          <img src="/popup_logo.svg" alt="观数" className="h-8 mr-2" />
          <span className="font-bold text-lg text-gray-900">组件库</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {navGroups.map((group) => {
            if (group.items.length === 0) return null;

            return (
              <div key={group.title} className="mb-6">
                <h3 className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setSelectedNavId(item.id);
                          if (item.type === 'component') {
                            setActiveTab('preview');
                          }
                        }}
                        className={`
                          w-full text-left px-6 py-2 flex items-center justify-between group hover:text-blue-600 transition-colors
                          ${selectedNavId === item.id ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600' : 'text-gray-700'}
                        `}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <span className="text-gray-400">{item.icon}</span>}
                          {item.name}
                        </span>
                        {selectedNavId === item.id && <RightOutlined className="w-4 h-4" style={{ fontSize: '12px' }} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
          v1.0.0
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-4 p-1 rounded hover:bg-gray-100 text-gray-500"
            >
              <MenuOutlined className="w-5 h-5" style={{ fontSize: '20px' }} />
            </button>
            <h1 className="text-xl font-medium text-gray-900">{getPageTitle()}</h1>
            {currentNav?.type === 'component' && selectedComponent && (
              <>
                <span className="ml-2 text-sm text-gray-400 font-mono">{selectedComponent.name}</span>
                <span className="ml-4 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">
                  {selectedComponent.category}
                </span>
              </>
            )}
          </div>
          <a
            href="https://github.com/ok-dqt/GuanShu-Component-library"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <GithubOutlined style={{ fontSize: '20px' }} />
          </a>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="max-w-5xl mx-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
