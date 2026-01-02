---
title: FilterBar
description: 筛选栏
nav:
  title: 组件
  order: 2
group:
  title: 表单组件
  order: 5
toc: content
---

# FilterBar 筛选栏

通用筛选栏组件，支持多种筛选控件的灵活组合，适用于表格、列表等数据展示场景。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filters | 筛选控件列表 | `FilterControl[]` | - |
| dataCount | 数据统计数量 | `number` | - |
| dataCountText | 数据统计文本 | `string` | `'当前表格中共有 {count} 条数据'` |
| exportOptions | 导出选项 | `ExportOption[]` | - |
| onExport | 导出回调 | `(key: string) => void` | - |
| exportButtonText | 导出按钮文本 | `string` | `'导出表格'` |
| loading | 是否加载中 | `boolean` | `false` |
| style | 自定义样式 | `CSSProperties` | - |

### FilterControl

筛选控件配置，根据 `type` 不同有不同的属性：

#### SegmentedFilterControl

```typescript
{
  key: string;
  type: 'segmented';
  value: string | number;
  options: FilterOption[];
  onChange: (value: string | number) => void;
  disabled?: boolean;
}
```

#### SelectFilterControl

```typescript
{
  key: string;
  type: 'select';
  placeholder?: string;
  value: string | number;
  options: FilterOption[];
  onChange: (value: string | number) => void;
  minWidth?: number;
  allowClear?: boolean;
  disabled?: boolean;
}
```

#### MultiSelectFilterControl

```typescript
{
  key: string;
  type: 'multiSelect';
  placeholder?: string;
  value: (string | number)[];
  options: FilterOption[];
  onChange: (value: (string | number)[]) => void;
  minWidth?: number;
  allowClear?: boolean;
  maxTagCount?: number | 'responsive';
  disabled?: boolean;
}
```

#### SwitchFilterControl

```typescript
{
  key: string;
  type: 'switch';
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'small' | 'default';
  disabled?: boolean;
}
```

### FilterOption

```typescript
interface FilterOption {
  label: string;
  value: string | number;
}
```

### ExportOption

```typescript
interface ExportOption {
  key: string;
  label: string;
}
```

## 特性

- 支持 4 种筛选控件类型（Segmented、Select、MultiSelect、Switch）
- 灵活的控件组合配置
- 自动数据统计显示（支持自定义文本模板）
- 导出下拉菜单（可配置多种导出格式）
- 统一的加载状态管理
- 响应式布局

## 使用场景

- 数据表格筛选
- 列表页面过滤
- 搜索结果筛选
- 数据分析界面

## 注意事项

- `dataCountText` 中使用 `{count}` 作为数字占位符，会自动替换为实际数量
- 所有筛选控件在 `loading` 状态下会自动禁用
- `filters` 数组的顺序决定了控件在界面上的显示顺序
- `exportOptions` 为空或未提供时不显示导出按钮
