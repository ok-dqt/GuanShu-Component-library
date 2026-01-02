---
title: TrendIndicator
description: 趋势指示器
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# TrendIndicator 趋势指示器

用于显示数据趋势的指示器组件，支持上升/下降趋势和颜色反转。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 趋势数值 | `number` | - |
| type | 趋势类型 | `'up' \| 'down'` | - |
| suffix | 后缀 | `string` | `'%'` |
| reverseColor | 反转颜色（下降为好时使用） | `boolean` | `false` |
| showIcon | 显示图标 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |

## 使用场景

- **普通指标**：上升为绿色（好），下降为红色（差），如销售额、访问量
- **反转指标**：设置 `reverseColor={true}`，下降为绿色（好），上升为红色（差），如成本、退货率
