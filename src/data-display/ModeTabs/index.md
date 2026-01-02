---
title: ModeTabs
description: 模式切换
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# ModeTabs 模式切换

模式切换组件，基于 Segmented 实现，支持提示信息。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string` | - |
| options | 选项配置 | `ModeTabsOption[]` | - |
| onChange | 值改变回调 | `(value: string) => void` | - |
| size | 尺寸 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| style | 自定义样式 | `CSSProperties` | - |

## ModeTabsOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `string` | - |
| label | 选项标签 | `string` | - |
| tooltip | 提示信息 | `string` | - |

## 使用场景

- 数据展示模式切换（精简/完整）
- 视图模式切换（列表/卡片）
- 显示模式切换（简单/高级）
