---
title: ExpandButton
description: 展开/收起按钮
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: 4
toc: content
---

# ExpandButton 展开/收起按钮

用于展开或收起更多内容的按钮组件。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isExpanded | 是否展开 | `boolean` | - |
| onToggle | 切换回调 | `() => void` | - |
| expandedText | 展开时的文本 | `string` | `'收起'` |
| collapsedText | 收起时的文本 | `string` | `'展开更多'` |
| style | 自定义样式 | `CSSProperties` | - |

## 特性

- 自动切换图标（向上/向下箭头）
- Hover 高亮效果
- 简洁轻量
- 可自定义文本

## 使用场景

- 卡片列表展开/收起
- 表单项显示更多选项
- 列表项展开详情
- 任何需要展开收起的场景

## 注意事项

- 组件本身不控制内容的显示/隐藏，需要父组件配合使用
- 建议配合条件渲染使用（如示例中的 `{expanded && <div>...</div>}`）
