/**
 * 视频缩略图组件
 * 单一职责：处理视频的缩略图展示和 hover Popover 自动播放
 */

import React, { memo } from 'react';
import { Popover } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import type { MediaItem } from './types';

interface VideoThumbnailProps {
  item: MediaItem;
  index: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const VideoThumbnail = memo(({
  item,
  index,
  maxWidth = 320,
  maxHeight = 400,
}: VideoThumbnailProps) => {
  return (
    <Popover
      key={`video-${item.url}-${index}`}
      content={
        <div className="media-preview__video-popover">
          <video
            src={item.url}
            autoPlay
            muted
            loop
            controls
            style={{ maxWidth, maxHeight }}
          />
        </div>
      }
      placement="top"
      trigger="hover"
      destroyTooltipOnHide
    >
      <div className="media-preview__video-placeholder">
        <PlayCircleOutlined className="media-preview__video-icon" />
      </div>
    </Popover>
  );
});

VideoThumbnail.displayName = 'VideoThumbnail';
