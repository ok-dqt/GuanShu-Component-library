---
title: NavButton
description: 导航按钮
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: 1
toc: content
---

# NavButton 导航按钮

导航操作按钮组件，支持多种类型和交互方式。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 按钮标签 | `string` | - |
| buttonType | 按钮类型 | `'default' \| 'value' \| 'link'` | `'default'` |
| value | 值（buttonType='value'时有效） | `string` | - |
| tooltip | 提示信息 | `string` | - |
| icon | 图标 | `ReactNode` | - |
| showCopy | 是否显示复制图标 | `boolean` | `false` |
| dropdownItems | 下拉菜单项 | `DropdownItem[]` | - |
| onClick | 点击回调 | `() => void` | - |
| onDropdownItemClick | 下拉菜单项点击回调 | `(item: DropdownItem) => void` | - |
| style | 自定义样式 | `CSSProperties` | - |

## DropdownItem

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| key | 唯一键 | `string` |
| label | 显示文本 | `string` |

## ButtonType 说明

- `default`: 默认按钮样式
- `value`: 带标签和值的按钮，支持复制功能
- `link`: 链接样式按钮

## 使用场景

- 工具栏操作按钮
- 带值展示和复制功能的信息按钮
- 下拉菜单触发器
