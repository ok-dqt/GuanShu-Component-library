/**
 * 媒体预览组件类型定义
 */

/** 媒体类型 */
export type MediaType = 'image' | 'video';

/** 媒体项 */
export interface MediaItem {
  /** 媒体类型 */
  type: MediaType;
  /** 完整 URL */
  url: string;
  /** 缩略图 URL（可选，图片类型时使用） */
  thumbnail?: string;
}
