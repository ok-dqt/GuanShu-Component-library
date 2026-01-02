---
title: ExportProgressOverlay
description: 导出进度遮罩
nav:
  title: 组件
  order: 2
group:
  title: 反馈组件
  order: 6
toc: content
---

# ExportProgressOverlay 导出进度遮罩

覆盖整个父容器的导出进度遮罩层，支持显示导出阶段、进度百分比和取消操作。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| progress | 进度信息，为 null 时不显示遮罩 | `ExportProgress \| null` | - |
| onCancel | 取消回调 | `() => void` | - |
| showCancel | 是否显示取消按钮 | `boolean` | `true` |
| stageText | 自定义阶段文本 | `Partial<Record<ExportStage, string>>` | - |
| style | 自定义样式 | `CSSProperties` | - |

### ExportProgress

```typescript
interface ExportProgress {
  stage: 'downloading' | 'generating' | 'processing';
  current: number;
  total: number;
}
```

### ExportStage

```typescript
type ExportStage = 'downloading' | 'generating' | 'processing';
```

## 特性

- 覆盖整个父容器（绝对定位）
- 支持三种导出阶段：downloading / generating / processing
- 实时显示进度百分比和数量
- 可选的取消按钮
- 毛玻璃背景效果
- 自动计算进度百分比

## 使用场景

- 数据导出时的进度展示
- 文件下载进度
- 批量处理进度
- 任何需要遮罩整个容器并显示进度的场景

## 注意事项

- 父容器需要设置 `position: relative` 或其他非 `static` 定位
- `progress` 为 `null` 时组件不渲染
- 默认 z-index 为 1000，可通过 style 覆盖
