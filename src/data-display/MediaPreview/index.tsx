/**
 * @module MediaPreview
 * @description 媒体预览组件，用于展示图片和视频列表
 */

import React, { memo } from 'react';
import type { MediaItem } from './types';
import { ImageThumbnail } from './ImageThumbnail';
import { VideoThumbnail } from './VideoThumbnail';
import { RemainingMedia } from './RemainingMedia';
import './index.less';

export type { MediaItem, MediaType } from './types';

export interface MediaPreviewProps {
  /** 媒体列表 */
  media: MediaItem[];
  /** 最多展示的媒体数量 */
  maxDisplay?: number;
  /** Popover 预览宽度 */
  popoverWidth?: number;
  /** 视频预览最大宽度 */
  videoMaxWidth?: number;
  /** 视频预览最大高度 */
  videoMaxHeight?: number;
  /** 空数据时的展示 */
  emptyText?: React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 媒体预览组件
 * - 最多展示指定数量的缩略图
 * - 图片：hover 触发 Popover 预览
 * - 视频：灰色背景 + 播放图标，hover 触发 Popover 自动播放
 * - +x：hover 展示剩余媒体列表
 */
export const MediaPreview = memo(({
  media,
  maxDisplay = 3,
  popoverWidth = 300,
  videoMaxWidth = 320,
  videoMaxHeight = 400,
  emptyText = '-',
  style,
}: MediaPreviewProps) => {
  if (!media?.length) {
    return <span>{emptyText}</span>;
  }

  // 展示列表（最多 maxDisplay 个）
  const displayList = media.slice(0, maxDisplay);
  const remainingItems = media.slice(maxDisplay);
  const remainingCount = remainingItems.length;

  return (
    <div className="media-preview" style={style}>
      <div className="media-preview__list">
        {displayList.map((item, index) =>
          item.type === 'video' ? (
            <VideoThumbnail
              key={`video-${item.url}-${index}`}
              item={item}
              index={index}
              maxWidth={videoMaxWidth}
              maxHeight={videoMaxHeight}
            />
          ) : (
            <ImageThumbnail
              key={`img-${item.url}-${index}`}
              item={item}
              index={index}
              popoverWidth={popoverWidth}
            />
          )
        )}
        <RemainingMedia
          remainingItems={remainingItems}
          count={remainingCount}
          maxWidth={videoMaxWidth}
          maxHeight={videoMaxHeight}
        />
      </div>
    </div>
  );
});

MediaPreview.displayName = 'MediaPreview';

export default MediaPreview;
