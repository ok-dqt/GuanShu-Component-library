# 观数组件库

观数浏览器扩展项目的 React 组件库，包含 32 个生产级组件。

## 特性

- 📦 **开箱即用** - 32 个高质量 React 组件
- 🎨 **统一设计** - 基于 Ant Design 5，使用观数品牌色 (#2563EB)
- 🛡 **TypeScript** - 完整的类型定义
- 📝 **在线文档** - Showcase 文档站，包含设计规范和组件示例
- 🎯 **业务场景** - 针对浏览器扩展场景优化

## 快速开始

### 安装

```bash
# 方式一：相对路径引用
npm install ../component

# 方式二：npm link（开发时）
cd component && npm link
cd ../xc-sealseek-extension-sycm && npm link guanshu-component-library
```

### 引入样式

```typescript
// 在入口文件中
import 'guanshu-component-library/style';
```

### 配置主题

```typescript
import { ConfigProvider } from 'antd';
import { theme, prefix } from 'guanshu-component-library';

function App() {
  return (
    <ConfigProvider theme={theme} prefixCls={prefix}>
      {/* 你的应用 */}
    </ConfigProvider>
  );
}
```

### 使用组件

```typescript
import {
  StatisticCard,
  FilterBar,
  ErrorBoundary,
  type StatisticCardProps
} from 'guanshu-component-library';

function Dashboard() {
  return (
    <ErrorBoundary>
      <StatisticCard
        title="总销售额"
        value={123456}
        suffix="元"
        trend={{ value: 12.5, type: 'up' }}
      />
    </ErrorBoundary>
  );
}
```

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 启动 Showcase 开发服务 (localhost:5173)
npm run build        # 构建 Showcase 文档
npm run build:lib    # 构建组件库 (dist/)
```

## 组件分类 (32个)

| 分类 | 组件数 | 组件 |
|------|--------|------|
| **基础组件** | 7 | Button, DataItem, DateTypeSelector, ErrorBoundary, FilterBar, FilterTags, ModeTabs |
| **布局组件** | 3 | Header, ModalHeader, ToolGrid |
| **数据展示** | 8 | CircleProgress, OverviewItem, RingProgress, SectionTitle, SkeletonCard, StatisticCard, TableDataSummary, TablePagination |
| **表单组件** | 3 | AutoLoadControl, DatePopover, PaginationFooter |
| **反馈组件** | 7 | EmptyState, ExportProgressOverlay, LoadingCard, LoadingState, StatusCard, UpdateModal, UpdateNotice |
| **业务组件** | 4 | AnalysisModal, ProductRankTable, ReviewAnalysisModal, TrendTag |

## 设计规范

组件库提供统一的设计 Token，可在 TypeScript 和 Less 中使用：

### 颜色

- **主色**: `#2563EB` (观数蓝)
- **成功**: `#16A34A`
- **警告**: `#EA580C`
- **错误**: `#DC2626`

### 使用设计 Token

```typescript
import { designTokens } from 'guanshu-component-library';

// 访问颜色
designTokens.colors.primary    // #2563EB
designTokens.colors.success    // #16A34A

// 访问间距
designTokens.spacing.md        // 12

// 访问字体
designTokens.typography.fontSize.base  // 14
```

```less
@import 'guanshu-component-library/style/variables.less';

.my-component {
  color: @color-primary;
  padding: @spacing-md;
  font-size: @font-size-base;
}
```

## 项目结构

```
component/
├── src/                    # 组件源码
│   ├── basic/              # 基础组件 (6)
│   ├── layout/             # 布局组件 (3)
│   ├── data-display/       # 数据展示 (8)
│   ├── form/               # 表单组件 (3)
│   ├── feedback/           # 反馈组件 (7)
│   ├── business/           # 业务组件 (4)
│   ├── theme/              # 主题配置 & 设计 Token
│   ├── style/              # 全局样式 & Less 变量
│   └── index.ts            # 导出入口
├── showcase/               # Showcase 文档站
│   ├── pages/              # 文档页面
│   ├── registry.ts         # 组件注册
│   └── App.tsx             # 应用入口
├── dist/                   # 构建输出 (build:lib)
├── vite.config.ts          # Showcase 构建配置
├── vite.lib.config.ts      # 组件库构建配置
└── package.json
```

## 技术栈

- [React 19](https://react.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- [Ant Design 5.24](https://ant.design/)
- [Vite 6](https://vite.dev/)
- [Less](https://lesscss.org/)

## 相关项目

- [观数浏览器扩展](../xc-sealseek-extension-sycm/)

## License

MIT
