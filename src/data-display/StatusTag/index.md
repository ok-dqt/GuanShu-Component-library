---
title: StatusTag
description: 状态标签
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# StatusTag 状态标签

用于显示不同状态的标签组件。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 状态类型 | `'success' \| 'processing' \| 'error' \| 'warning' \| 'default' \| 'loading'` | - |
| text | 自定义文本 | `string` | 根据状态自动显示 |
| icon | 自定义图标 | `ReactNode` | 根据状态自动显示 |
| style | 自定义样式 | `CSSProperties` | - |

## 状态说明

- `success`: 成功状态，绿色
- `processing`: 进行中状态，蓝色，图标旋转
- `error`: 失败状态，红色
- `warning`: 警告状态，橙色
- `default`: 默认状态，灰色
- `loading`: 加载中状态，蓝色
