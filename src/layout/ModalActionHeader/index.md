---
title: ModalActionHeader
description: 弹窗操作头部
nav:
  title: 组件
  order: 2
group:
  title: 布局组件
  order: 3
toc: content
---

# ModalActionHeader 弹窗操作头部

弹窗操作头部组件，提供统一的头部布局和灵活的操作按钮配置。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| logo | logo图标 | `string \| ReactNode` | - |
| actions | 操作按钮列表 | `ActionItem[]` | `[]` |
| showSeparator | 是否显示分隔符 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |

### ActionItem

```typescript
interface ActionItem {
  // 操作标识
  key: string;
  // 图标（React节点或iconfont类名）
  icon?: ReactNode | string;
  // 操作文本
  text?: string;
  // 点击回调
  onClick?: () => void;
}
```

## 特性

- 灵活的操作按钮配置
- 支持自定义 logo（图片URL 或 React节点）
- 支持 iconfont 图标类名和 React 图标组件
- 自动处理分隔符显示
- 悬停交互效果
- 统一的头部布局规范

## 使用场景

- 弹窗头部
- 模态框头部
- 侧边抽屉头部
- 任何需要头部操作区的场景

## 注意事项

- `actions` 中的 `icon` 可以是字符串（iconfont类名）或React节点
- 关闭按钮通常不需要 `text`，只显示图标
- `showSeparator` 控制 logo/标题 之间以及操作按钮之间的分隔符显示
