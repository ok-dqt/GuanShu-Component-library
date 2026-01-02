---
title: ExportButton
description: 导出按钮
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: 1
toc: content
---

# ExportButton 导出按钮

表格数据导出按钮组件，支持 Excel 和 CSV 两种格式。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 要导出的数据 | `any[]` | - |
| fileName | 导出文件名（不含扩展名） | `string` | - |
| onExportExcel | 导出 Excel 回调 | `(data: any[], fileName: string) => void` | - |
| onExportCsv | 导出 CSV 回调 | `(data: any[], fileName: string) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| style | 自定义样式 | `CSSProperties` | - |

## 使用说明

- 当 `data` 为空数组时，按钮会自动禁用
- 需要自行实现 `onExportExcel` 和 `onExportCsv` 回调函数
- 文件名会自动添加 `.xlsx` 或 `.csv` 扩展名
