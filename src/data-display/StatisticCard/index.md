---
title: StatisticCard
description: 统计卡片
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# StatisticCard 统计卡片

用于展示统计数据的卡片组件，支持显示趋势指示器。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| value | 数值 | `number \| string` | - |
| precision | 数值精度 | `number` | - |
| prefix | 前缀 | `ReactNode` | - |
| suffix | 后缀 | `ReactNode` | - |
| trend | 趋势数据 | `{ value: number; type: 'up' \| 'down' }` | - |
| loading | 加载状态 | `boolean` | `false` |
| bordered | 是否显示边框 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |
