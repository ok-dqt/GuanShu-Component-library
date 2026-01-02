---
title: ModalHeader
description: 弹窗头部
nav:
  title: 组件
  order: 2
group:
  title: 布局组件
  order: 2
toc: content
---

# ModalHeader 弹窗头部

弹窗顶部头部组件，提供统一的头部布局和常用操作按钮。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| logo | Logo 内容 | `ReactNode` | - |
| customBtn | 自定义按钮 | `ReactNode` | - |
| onClearCache | 清除缓存回调 | `() => void` | - |
| showClearCacheMessage | 是否显示清除缓存提示 | `boolean` | `true` |
| onUserCenter | 个人中心回调 | `() => void` | - |
| onFeedback | 反馈回调 | `() => void` | - |
| style | 自定义样式 | `CSSProperties` | - |

## 使用说明

- 只有提供对应回调函数时，相应的操作按钮才会显示
- `onClearCache` - 显示"清除缓存"按钮
- `onUserCenter` - 显示"个人中心"按钮
- `onFeedback` - 显示"反馈"按钮
- 可通过 `customBtn` 添加自定义按钮
