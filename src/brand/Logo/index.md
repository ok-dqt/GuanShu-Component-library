# Logo 观数品牌标识

## 概述

观数（GuanShu）品牌标识，用于浏览器扩展和组件库网站。

## 资源文件

| 文件 | 格式 | 用途 |
|------|------|------|
| `logo.svg` | SVG | 主要 Logo 文件，推荐使用 |

## 使用规范

### 基础用法

```tsx
import logoUrl from '@/brand/Logo/logo.svg';

<img src={logoUrl} alt="观数" className="h-8" />
```

### 在组件库中使用

```tsx
import { Logo } from 'guanshu-component-library';

<Logo size="default" />
<Logo size="small" />
<Logo size="large" />
```

### 尺寸规范

| 场景 | 推荐高度 | 说明 |
|------|----------|------|
| 网站头部 | 32px | 侧边栏和顶栏 Logo |
| 弹窗标题 | 24px | Modal 头部 Logo |
| 图标尺寸 | 16px | 小型展示场景 |

### 配色

Logo 主色调：`#2563eb`（品牌蓝）

### 使用禁忌

- 不要拉伸或压缩 Logo
- 不要更改 Logo 颜色
- 保持 Logo 周围足够的留白空间
- 不要在复杂背景上直接使用

## Logo 展示

![观数 Logo](./logo.svg)

## 相关组件

- [ModalActionHeader](/src/layout/ModalActionHeader/index.md) - 弹窗操作头部，支持 Logo 展示
- [SimpleModalHeader](/src/layout/SimpleModalHeader/index.md) - 简洁弹窗头部，支持 Logo 展示
