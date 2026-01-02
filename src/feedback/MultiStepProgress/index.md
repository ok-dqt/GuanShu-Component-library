---
title: MultiStepProgress
description: 多步骤进度
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 6
toc: content
---

# MultiStepProgress 多步骤进度

多步骤进度组件，自动根据步骤状态计算总体进度，适用于多阶段异步任务的进度展示。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `'任务进度'` |
| steps | 步骤列表 | `StepItem[]` | - |
| visible | 是否可见 | `boolean` | `true` |
| progressFormat | 进度显示格式 | `'percentage' \| 'fraction'` | `'fraction'` |
| style | 自定义样式 | `CSSProperties` | - |

### StepItem

```typescript
interface StepItem {
  // 步骤标识
  key: string;
  // 步骤标签
  label: string;
  // 是否加载中
  loading: boolean;
  // 是否已完成
  completed: boolean;
}
```

## 特性

- 自动计算总体进度（无需手动传入 current/total）
- 根据步骤状态自动显示颜色和图标
  - 已完成：绿色 ✓
  - 加载中：蓝色 ...（进度条显示动画）
  - 等待中：灰色 ⏳
- 支持两种进度格式：分数(x/y) 或 百分比(%)
- 轻量简洁

## 使用场景

- 多阶段数据加载
- 异步任务进度跟踪
- 批量操作进度展示
- 工作流状态监控

## 注意事项

- `visible` 为 `false` 时组件不渲染
- 进度百分比自动根据 `completed` 步骤数计算
- `loading` 为 `true` 时进度条显示动态效果
- `progressFormat='fraction'` 显示 "x/y"，`'percentage'` 显示默认百分比

## 与 ProgressStatusPanel 的区别

- **MultiStepProgress**：自动从步骤状态计算进度，适合固定步骤的流程
- **ProgressStatusPanel**：手动提供 current/total，适合动态数量的任务跟踪
