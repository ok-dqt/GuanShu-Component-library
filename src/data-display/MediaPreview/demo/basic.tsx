import React from 'react';
import { MediaPreview } from '../index';
import { Card, Space } from 'antd';
import type { MediaItem } from '../types';

export default () => {
  const imageMedia: MediaItem[] = [
    {
      type: 'image',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbnail: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
      thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
      thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/8qtvlmqPs6/photo-1449452198679-05c7fd30f416.webp',
      thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/8qtvlmqPs6/photo-1449452198679-05c7fd30f416.webp',
    },
  ];

  const mixedMedia: MediaItem[] = [
    {
      type: 'image',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      type: 'video',
      url: 'https://gw.alipayobjects.com/v/huamei_0prmtq/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="仅图片">
        <MediaPreview media={imageMedia} />
      </Card>

      <Card size="small" title="图片+视频混合">
        <MediaPreview media={mixedMedia} />
      </Card>

      <Card size="small" title="空数据">
        <MediaPreview media={[]} />
      </Card>

      <Card size="small" title="提示：Hover 在缩略图上可预览大图或播放视频">
        <div style={{ color: '#999', fontSize: 12 }}>
          - 图片会显示大图预览
          <br />
          - 视频会自动播放（带播放图标）
          <br />
          - 超过3个媒体会显示 +x，hover 可查看全部
        </div>
      </Card>
    </Space>
  );
};
