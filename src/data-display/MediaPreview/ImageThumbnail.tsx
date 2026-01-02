/**
 * 图片缩略图组件
 * 单一职责：处理图片的缩略图展示和 Popover 预览
 */

import React, { memo } from 'react';
import { Image, Popover } from 'antd';
import type { MediaItem } from './types';

interface ImageThumbnailProps {
  item: MediaItem;
  index: number;
  popoverWidth?: number;
}

export const ImageThumbnail = memo(({ item, index, popoverWidth = 300 }: ImageThumbnailProps) => {
  const thumbnailUrl = item.thumbnail || item.url;

  return (
    <Popover
      key={`${item.url}-${index}`}
      content={
        <div className="media-preview__popover-content">
          <Image
            src={item.url}
            alt=""
            style={{ maxWidth: popoverWidth - 24 }}
            preview={false}
          />
        </div>
      }
      placement="top"
      trigger="hover"
      overlayStyle={{ maxWidth: popoverWidth }}
    >
      <div className="media-preview__thumbnail">
        <Image
          src={thumbnailUrl}
          alt=""
          className="media-preview__thumbnail-img"
          preview={false}
          loading="lazy"
        />
      </div>
    </Popover>
  );
});

ImageThumbnail.displayName = 'ImageThumbnail';
