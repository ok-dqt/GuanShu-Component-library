---
title: CardGrid
description: 卡片网格布局
nav:
  title: 组件
  order: 2
group:
  title: 布局组件
  order: 2
toc: content
---

# CardGrid 卡片网格布局

通用的卡片网格布局组件，用于展示工具、功能等卡片列表。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

### CardGrid

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 卡片列表 | `CardItem[]` | - |
| columns | 列数 | `number` | `4` |
| onCardClick | 点击回调 | `(item: CardItem) => void` | - |
| emptyText | 空数据文本 | `string` | `'暂无数据'` |
| showFooter | 是否显示底部说明 | `boolean` | `false` |
| footerLegendText | 底部说明文本 | `string` | `'表示已启用'` |
| footerRightText | 底部右侧文本 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

### CardItem

```typescript
interface CardItem {
  // 唯一标识
  id: string;
  // 卡片名称
  name: string;
  // 图标 URL
  iconUrl?: string;
  // 是否显示状态点
  showStatusDot?: boolean;
  // 点击链接
  link?: string;
  // 自定义数据
  data?: any;
}
```

## 特性

- 响应式网格布局，支持自定义列数
- Hover 效果和点击交互
- 状态点标识（绿色圆点）
- 图标加载失败自动降级
- 空状态展示
- 可选的底部说明栏
- 轻量级设计

## 使用场景

- 功能入口展示
- 工具集合
- 应用市场
- 插件列表
- 服务导航

## 注意事项

- 卡片图标建议使用 SVG 格式，尺寸 22x22px
- `onCardClick` 优先级高于 `link`
- 状态点通常用于标识功能是否已启用/配置
