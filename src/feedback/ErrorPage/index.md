---
title: ErrorPage
description: 错误页面
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 6
toc: content
---

# ErrorPage 错误页面

通用错误页面组件，支持多种错误状态展示。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 错误状态 | `'403' \| '404' \| '500' \| 'error' \| 'warning' \| 'info'` | `'404'` |
| title | 标题 | `string` | 根据状态自动设置 |
| subTitle | 副标题 | `string` | 根据状态自动设置 |
| extra | 操作按钮 | `ReactNode` | - |
| onPrimaryAction | 主要操作回调 | `() => void` | - |
| onSecondaryAction | 次要操作回调 | `() => void` | - |
| onClose | 关闭回调 | `() => void` | - |
| primaryText | 主要操作文本 | `string` | `'返回首页'` |
| secondaryText | 次要操作文本 | `string` | `'联系客服'` |
| closeText | 关闭按钮文本 | `string` | `'关闭'` |
| style | 自定义样式 | `CSSProperties` | - |

### ErrorStatus

```typescript
type ErrorStatus = '403' | '404' | '500' | 'error' | 'warning' | 'info';
```

## 默认配置

| 状态 | 默认标题 | 默认副标题 |
| --- | --- | --- |
| 403 | 403 | 抱歉，您无权访问此页面 |
| 404 | 404 | 抱歉，您访问的页面不存在 |
| 500 | 500 | 抱歉，服务器出错了 |
| error | 操作失败 | 抱歉，操作失败，请稍后重试 |
| warning | 警告 | 请注意相关提示信息 |
| info | 提示 | 相关信息 |

## 特性

- 支持6种预设状态
- 自动默认文案
- 灵活的操作按钮配置
- 基于 Ant Design Result 组件
- 支持自定义按钮和回调

## 使用场景

- 403 权限不足页面
- 404 页面不存在
- 500 服务器错误
- 操作失败提示
- 警告信息展示
- 通用信息页面

## 注意事项

- `extra` 优先级高于默认按钮
- 只有提供了对应的回调函数，按钮才会显示
- 可以只提供部分回调，按钮会自动组合
