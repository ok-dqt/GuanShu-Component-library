---
title: OverviewItem
description: 概览数据卡片
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# OverviewItem 概览数据卡片

用于展示单个指标的概览卡片组件，支持实时/日/周/月/自定义多种对比模式。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| value | 当前值 | `string \| number` | - |
| **实时维度专用** ||||
| yesterdaySameTimeValue | 昨日同时段值 | `string \| number` | - |
| yesterdayValue | 昨日全天值 | `string \| number` | - |
| compareRate | 较昨日同时段变化率 | `number` | - |
| **日/周/月维度专用** ||||
| rivalAvgValue | 同行同层平均 | `string \| number` | - |
| rivalGoodValue | 同行同层优秀 | `string \| number` | - |
| periodCompareRate | 较前1日/周/月变化率 | `number` | - |
| periodLabel | 周期标签 | `string` | - |
| **自定义维度专用** ||||
| customCompareValue | 对比周期值 | `string \| number` | - |
| customCompareRate | 对比变化率 | `number` | - |
| **其他** ||||
| style | 自定义样式 | `CSSProperties` | - |

## 特性

- 支持三种对比模式：实时/日周月/自定义
- 变化率自动显示箭头和颜色（上升红色/下降绿色/持平灰色）
- 卡片 hover 效果
- 圆角卡片设计
- 灵活的数据展示

## 使用场景

- 数据概览仪表板
- 电商数据分析
- 指标对比展示
- 实时数据监控

## 注意事项

- `compareRate` 为小数形式（如 0.15 表示 15%）
- 三种对比模式可以共存，组件会自动判断显示哪些信息
- 建议配合 Grid 布局使用（如 Ant Design 的 Row/Col）
