import React, { useState } from 'react';
import { MenuOutlined, CodeOutlined, PlayCircleOutlined, AppstoreOutlined, RightOutlined } from '@ant-design/icons';
import { COMPONENT_REGISTRY } from './registry';
import { ComponentCategory } from './types';

const App = () => {
  const [selectedComponentId, setSelectedComponentId] = useState<string>(COMPONENT_REGISTRY[0].id);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectedComponent = COMPONENT_REGISTRY.find(c => c.id === selectedComponentId) || COMPONENT_REGISTRY[0];

  const categories = Object.values(ComponentCategory);

  return (
    <div className="flex h-screen bg-[#f5f5f5] overflow-hidden text-sm">

      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'w-64' : 'w-0'}
        bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-20 overflow-hidden
      `}>
        <div className="h-14 flex items-center px-6 border-b border-gray-100 flex-shrink-0">
          <AppstoreOutlined className="w-6 h-6 text-ant-primary mr-2" style={{ fontSize: '24px' }} />
          <span className="font-bold text-lg text-ant-text">观数组件库</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {categories.map(category => {
            const categoryComponents = COMPONENT_REGISTRY.filter(c => c.category === category);
            if (categoryComponents.length === 0) return null;

            return (
              <div key={category} className="mb-6">
                <h3 className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{category}</h3>
                <ul>
                  {categoryComponents.map(comp => (
                    <li key={comp.id}>
                      <button
                        onClick={() => {
                           setSelectedComponentId(comp.id);
                           setActiveTab('preview');
                        }}
                        className={`
                          w-full text-left px-6 py-2 flex items-center justify-between group hover:text-ant-primary transition-colors
                          ${selectedComponentId === comp.id ? 'text-ant-primary bg-blue-50 border-r-2 border-ant-primary' : 'text-ant-text'}
                        `}
                      >
                        {comp.name}
                        {selectedComponentId === comp.id && <RightOutlined className="w-4 h-4" style={{ fontSize: '16px' }} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
            <h1 className="text-xl font-medium text-ant-text">{selectedComponent.name}</h1>
            <span className="ml-4 px-2 py-0.5 text-xs bg-blue-100 text-ant-primary rounded">{selectedComponent.category}</span>
          </div>
        </header>

        {/* Component Display Area */}
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="max-w-5xl mx-auto">

            <p className="text-gray-600 mb-8 text-base">{selectedComponent.description}</p>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="border-b border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
                <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`
                      px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium
                      ${activeTab === 'preview' ? 'bg-white text-ant-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    <PlayCircleOutlined style={{ fontSize: '12px' }} /> 预览
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`
                      px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium
                      ${activeTab === 'code' ? 'bg-white text-ant-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}
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
                    {selectedComponent.propsDefinition.map(prop => (
                      <tr key={prop.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-3 px-2 text-ant-primary font-mono">{prop.name}</td>
                        <td className="py-3 px-2 text-gray-600">{prop.description}</td>
                        <td className="py-3 px-2 text-pink-600 font-mono text-xs">{prop.type}</td>
                        <td className="py-3 px-2 text-gray-500 font-mono">{prop.default || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
