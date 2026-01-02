---
title: LoadingProgress
description: 加载进度
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 5
toc: content
---

# LoadingProgress 加载进度

进度条组件，支持显示加载状态标签。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度百分比 | `number` | - |
| status | 状态 | `'loading' \| 'completed' \| 'error'` | `'loading'` |
| showStatus | 是否显示状态标签 | `boolean` | `true` |
| statusText | 自定义状态文本 | `string` | - |
| size | 尺寸 | `'default' \| 'small'` | `'default'` |
| style | 自定义样式 | `CSSProperties` | - |
