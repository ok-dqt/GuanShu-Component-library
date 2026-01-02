---
title: DatePopover
description: 日期选择 Popover
nav:
  title: 组件
  order: 2
group:
  title: 表单组件
  order: 5
toc: content
---

# DatePopover 日期选择 Popover

Hover 时展示日期选择面板的 Popover 组件，支持日/周/月三种选择模式。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | Picker 类型 | `'day' \| 'week' \| 'month'` | - |
| value | 当前选中的日期 | `Dayjs \| null` | - |
| onChange | 日期变化回调 | `(date: Dayjs \| null) => void` | - |
| visible | 是否显示 Popover | `boolean` | - |
| onVisibleChange | 显示状态变化回调 | `(visible: boolean) => void` | - |
| maxDateOffset | 最大可选日期偏移量（相对今天） | `number` | 根据类型自动设置 |
| label | 自定义触发文本 | `string` | 根据类型自动设置 |
| style | 自定义样式 | `CSSProperties` | - |

### DatePickerType

```typescript
type DatePickerType = 'day' | 'week' | 'month';
```

## 特性

- Hover 触发，无需点击
- 支持日/周/月三种选择模式
- 自动限制最大可选日期
- 中文本地化
- 轻量级，基于 Ant Design DatePicker

## 使用场景

- 日期选择器的简化版
- 需要快速选择日期但不希望占用太多空间
- 配合其他表单组件使用
- 数据分析场景的日期筛选
