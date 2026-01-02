/**
 * 剩余媒体组件
 * 单一职责：展示 +x 剩余媒体数量，hover 展示剩余媒体列表
 */

import React, { memo } from 'react';
import { Popover, Image } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import type { MediaItem } from './types';

interface RemainingMediaProps {
  remainingItems: MediaItem[];
  count: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const RemainingMedia = memo(({
  remainingItems,
  count,
  maxWidth = 320,
  maxHeight = 400,
}: RemainingMediaProps) => {
  if (count <= 0) return null;

  return (
    <Popover
      content={
        <div className="media-preview__remaining-popover">
          {remainingItems.map((item, idx) => (
            <div
              key={`remaining-${item.url}-${idx}`}
              className="media-preview__remaining-item"
            >
              {item.type === 'image' ? (
                <Image
                  src={item.thumbnail || item.url}
                  alt=""
                  width={60}
                  height={60}
                  style={{ objectFit: 'cover', borderRadius: 4 }}
                  preview={{ src: item.url }}
                  loading="lazy"
                />
              ) : (
                <Popover
                  content={
                    <video
                      src={item.url}
                      autoPlay
                      muted
                      loop
                      controls
                      style={{
                        maxWidth,
                        maxHeight,
                        borderRadius: 4,
                      }}
                    />
                  }
                  placement="top"
                  trigger="hover"
                  destroyTooltipOnHide
                >
                  <div className="media-preview__remaining-video">
                    <PlayCircleOutlined />
                  </div>
                </Popover>
              )}
            </div>
          ))}
        </div>
      }
      placement="top"
      trigger="hover"
    >
      <div className="media-preview__more">+{count}</div>
    </Popover>
  );
});

RemainingMedia.displayName = 'RemainingMedia';
