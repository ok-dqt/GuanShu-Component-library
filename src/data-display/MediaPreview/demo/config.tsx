import React, { useState } from 'react';
import { MediaPreview } from '../index';
import { Card, Space, InputNumber, Input } from 'antd';
import type { MediaItem } from '../types';

export default () => {
  const [maxDisplay, setMaxDisplay] = useState(3);
  const [popoverWidth, setPopoverWidth] = useState(300);
  const [videoMaxWidth, setVideoMaxWidth] = useState(320);
  const [videoMaxHeight, setVideoMaxHeight] = useState(400);
  const [emptyText, setEmptyText] = useState('-');

  const sampleMedia: MediaItem[] = [
    {
      type: 'image',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
    {
      type: 'video',
      url: 'https://gw.alipayobjects.com/v/huamei_0prmtq/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    },
    {
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/8qtvlmqPs6/photo-1449452198679-05c7fd30f416.webp',
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>最多展示数量:</span>
            <InputNumber
              value={maxDisplay}
              onChange={(val) => setMaxDisplay(val || 3)}
              min={1}
              max={10}
            />
          </Space>

          <Space wrap>
            <span>图片预览宽度:</span>
            <InputNumber
              value={popoverWidth}
              onChange={(val) => setPopoverWidth(val || 300)}
              min={200}
              max={600}
            />
            <span>px</span>
          </Space>

          <Space wrap>
            <span>视频最大宽度:</span>
            <InputNumber
              value={videoMaxWidth}
              onChange={(val) => setVideoMaxWidth(val || 320)}
              min={200}
              max={800}
            />
            <span>px</span>
          </Space>

          <Space wrap>
            <span>视频最大高度:</span>
            <InputNumber
              value={videoMaxHeight}
              onChange={(val) => setVideoMaxHeight(val || 400)}
              min={200}
              max={600}
            />
            <span>px</span>
          </Space>

          <Space wrap>
            <span>空数据文本:</span>
            <Input
              value={emptyText}
              onChange={(e) => setEmptyText(e.target.value)}
              style={{ width: 200 }}
              placeholder="输入空数据时的展示文本"
            />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <div style={{ marginBottom: 8, color: '#666' }}>
              有数据（共 {sampleMedia.length} 个媒体）:
            </div>
            <MediaPreview
              media={sampleMedia}
              maxDisplay={maxDisplay}
              popoverWidth={popoverWidth}
              videoMaxWidth={videoMaxWidth}
              videoMaxHeight={videoMaxHeight}
              emptyText={emptyText}
            />
          </div>

          <div>
            <div style={{ marginBottom: 8, color: '#666' }}>空数据:</div>
            <MediaPreview
              media={[]}
              emptyText={emptyText}
            />
          </div>
        </Space>
      </Card>
    </Space>
  );
};
