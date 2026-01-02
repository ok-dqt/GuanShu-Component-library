---
title: MediaPreview
description: 媒体预览
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 3
toc: content
---

# MediaPreview 媒体预览

用于展示图片和视频列表的媒体预览组件，支持 hover 预览和自动播放。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

### 可交互配置

<code src="./demo/config.tsx"></code>

## API

### MediaPreview

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| media | 媒体列表 | `MediaItem[]` | - |
| maxDisplay | 最多展示的媒体数量 | `number` | `3` |
| popoverWidth | Popover 预览宽度 | `number` | `300` |
| videoMaxWidth | 视频预览最大宽度 | `number` | `320` |
| videoMaxHeight | 视频预览最大高度 | `number` | `400` |
| emptyText | 空数据时的展示 | `ReactNode` | `'-'` |
| style | 自定义样式 | `CSSProperties` | - |

### MediaItem

```typescript
interface MediaItem {
  // 媒体类型
  type: 'image' | 'video';
  // 完整 URL
  url: string;
  // 缩略图 URL（可选，图片类型时使用）
  thumbnail?: string;
}
```

### MediaType

```typescript
type MediaType = 'image' | 'video';
```

## 特性

- 支持图片和视频混合展示
- 图片 hover 时显示大图预览
- 视频 hover 时自动播放（静音、循环）
- 超过最大展示数量时显示 +x，hover 查看剩余媒体
- 支持图片懒加载
- 灰色视频占位符带播放图标
- 缩略图 hover 时边框高亮

## 使用场景

- 商品评价的买家秀
- 内容管理系统的媒体列表
- 表格中的媒体列展示
- 任何需要预览图片/视频的场景

## 注意事项

- 视频 URL 需要支持浏览器直接播放（如 MP4 格式）
- hover 视频时会自动播放，默认静音和循环
- 建议提供 `thumbnail` 缩略图 URL 以提升加载性能
- 剩余媒体 Popover 最多显示 280px 宽度，自动换行
