---
title: DateTypeSelector
description: 日期类型选择器
nav:
  title: 组件
  order: 2
group:
  title: 表单组件
  order: 4
toc: content
---

# DateTypeSelector 日期类型选择器

日期类型选择组件，支持快速选择（7天/30天）和自定义日期（日/周/月）。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的日期类型 | `DateType` | - |
| customDate | 自定义日期（当选择日/周/月时） | `Dayjs \| null` | - |
| loading | 加载状态 | `boolean` | `false` |
| onChange | 日期改变回调 | `(dateType: DateType, customDate: Dayjs \| null) => void` | - |
| style | 自定义样式 | `CSSProperties` | - |

## DateType 枚举

```typescript
enum DateType {
  Recent7 = 'recent7',   // 最近7天
  Recent30 = 'recent30', // 最近30天
  Day = 'day',           // 自定义日
  Week = 'week',         // 自定义周
  Month = 'month',       // 自定义月
}
```

## 使用说明

- 7天/30天选择会自动计算日期范围，`customDate` 为 `null`
- 日/周/月选择需要用户在日历中选择具体日期，`customDate` 为选中的日期
- 周选择时，会高亮显示整周的日期范围
- 所有日期选择都有最大可选日期限制（默认为昨天）
