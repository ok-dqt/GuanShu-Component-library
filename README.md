# 观数组件库

观数浏览器扩展项目的组件文档库。

## 特性

- 📦 **开箱即用** - 高质量的 React 组件
- 🎨 **基于 Ant Design** - 遵循 Ant Design 设计规范
- 📝 **完善的文档** - 详细的组件说明和示例代码
- 🛡 **TypeScript** - 完整的类型定义
- 🎯 **业务场景** - 针对观数业务场景优化

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:8000 查看组件文档。

### 构建文档

```bash
npm run build
```

## 组件分类

- **基础组件** (Basic) - DataItem、DateTypeSelector、ErrorBoundary 等
- **布局组件** (Layout) - Header、ModalHeader、ToolGrid 等
- **数据展示** (Data Display) - OverviewItem、TableDataSummary、FilterTags 等
- **表单组件** (Form) - DatePopover、AutoLoadControl、PaginationFooter 等
- **反馈组件** (Feedback) - UpdateModal、ExportProgressOverlay 等
- **业务组件** (Business) - AnalysisModal、ReviewAnalysisModal、ProductRankTable 等

## 项目结构

```
guanshu-component-library/
├── docs/                    # 文档
│   ├── guide/              # 使用指南
│   └── components/         # 组件文档
├── src/                    # 组件源码
│   ├── basic/              # 基础组件
│   ├── layout/             # 布局组件
│   ├── data-display/       # 数据展示组件
│   ├── form/               # 表单组件
│   ├── feedback/           # 反馈组件
│   └── business/           # 业务组件
├── .dumirc.ts              # Dumi 配置
├── tsconfig.json           # TypeScript 配置
└── package.json
```

## 技术栈

- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Ant Design 5](https://ant.design/)
- [Dumi 2](https://d.umijs.org/)
- [Less](https://lesscss.org/)

## 相关项目

- [观数浏览器扩展](../xc-sealseek-extension-sycm/)

## License

MIT
