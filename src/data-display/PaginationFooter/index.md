---
title: PaginationFooter
description: 分页底部
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# PaginationFooter 分页底部

表格分页底部组件，集成了自动加载控制、加载进度显示和分页器。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页码 | `number` | - |
| pageSize | 每页条数 | `number` | - |
| total | 数据总数 | `number` | - |
| loadedCount | 已加载数据条数 | `number` | - |
| cachedPages | 已缓存的页码数组 | `number[]` | `[]` |
| showTotal | 是否显示总数 | `((total: number) => ReactNode) \| false` | `(total) => '共 ${total} 条'` |
| onChange | 页码改变回调 | `(page: number) => void` | - |
| loading | 是否加载中 | `boolean` | `false` |
| loadingProgress | 加载进度 | `LoadingProgress` | - |
| onStopLoading | 停止加载回调 | `() => void` | - |
| isAutoLoading | 是否自动加载中 | `boolean` | `false` |
| autoLoadProgress | 自动加载进度 | `LoadingProgress` | - |
| onLoadNextPage | 加载下一页回调 | `() => void` | - |
| onStartAutoLoad | 开始自动加载回调 | `(batchSize: number) => void` | - |
| showAutoLoad | 是否显示自动加载控制 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |

## 特性

- 显示已加载数据统计
- 集成自动加载控制组件
- 未加载的页码显示红点标记
- 支持加载进度显示
- 当加载完全部数据且在最后一页时自动隐藏加载控制

## 使用场景

- 表格分页加载
- 支持批量自动加载的数据列表
- 需要显示加载进度和缓存状态的分页场景
