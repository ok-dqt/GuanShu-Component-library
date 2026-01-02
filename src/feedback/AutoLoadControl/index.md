---
title: AutoLoadControl
description: 自动加载控制
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 5
toc: content
---

# AutoLoadControl 自动加载控制

自动加载控制组件，支持正常态（按钮组）和加载态（进度条）。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isLoading | 是否正在加载 | `boolean` | - |
| batchSize | 批量加载页数 | `number` | - |
| loadingProgress | 加载进度信息 | `LoadingProgress` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| disableNextPage | 是否禁用"加载下一页"按钮 | `boolean` | `false` |
| onBatchSizeChange | 批量页数变更回调 | `(size: number) => void` | - |
| onLoadNextPage | 加载下一页回调 | `() => void` | - |
| onStartAutoLoad | 开始自动加载回调 | `() => void` | - |
| onStopLoad | 停止加载回调 | `() => void` | - |
| batchSizeOptions | 批量页数选项 | `Array<{ label: string; value: number }>` | `[5, 10, 15, 30]` |
| style | 自定义样式 | `CSSProperties` | - |

## LoadingProgress

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| currentPage | 当前加载页 | `number` |
| totalPages | 总页数 | `number` |
| percentage | 进度百分比 | `number` |

## 使用场景

- 表格数据分页加载
- 列表数据批量加载
- 支持手动加载和自动批量加载两种模式
