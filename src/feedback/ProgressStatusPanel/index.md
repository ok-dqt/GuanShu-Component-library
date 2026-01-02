---
title: ProgressStatusPanel
description: 进度状态面板
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 6
toc: content
---

# ProgressStatusPanel 进度状态面板

用于展示多项任务的进度和状态的面板组件。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `'任务进度'` |
| current | 当前进度 | `number` | - |
| total | 总数 | `number` | - |
| statusItems | 状态项列表 | `StatusItem[]` | - |
| visible | 是否可见 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |

### StatusItem

```typescript
interface StatusItem {
  // 状态键
  key: string;
  // 显示名称
  label: string;
  // 是否加载中
  loading: boolean;
  // 是否已完成
  completed: boolean;
}
```

## 特性

- 进度条展示总体进度
- 标签展示各子任务状态
- 自动识别加载状态（蓝色、动态进度条）
- 完成状态（绿色✓）
- 等待状态（灰色⏳）
- 轻量简洁

## 使用场景

- 批量任务进度展示
- 数据加载状态
- 多步骤流程
- 任务队列监控

## 注意事项

- `visible` 为 `false` 时组件不渲染
- 进度百分比自动根据 `current/total` 计算
- 标签颜色根据状态自动变化
