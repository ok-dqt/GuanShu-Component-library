import React, { useState } from 'react';
import { LoadingProgress } from '../index';
import { Space, Switch, Select, Slider, Input } from 'antd';

export default () => {
  const [percent, setPercent] = useState(50);
  const [status, setStatus] = useState<'loading' | 'completed' | 'error'>('loading');
  const [showStatus, setShowStatus] = useState(true);
  const [statusText, setStatusText] = useState('');
  const [size, setSize] = useState<'default' | 'small'>('default');

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>进度:</span>
            <Slider
              value={percent}
              onChange={setPercent}
              style={{ width: 200 }}
              min={0}
              max={100}
            />
            <span>{percent}%</span>
          </Space>
        </div>

        <div>
          <Space wrap>
            <span>状态:</span>
            <Select value={status} onChange={setStatus} style={{ width: 120 }}>
              <Select.Option value="loading">加载中</Select.Option>
              <Select.Option value="completed">已完成</Select.Option>
              <Select.Option value="error">错误</Select.Option>
            </Select>

            <span>显示状态标签:</span>
            <Switch checked={showStatus} onChange={setShowStatus} />

            <span>自定义状态文本:</span>
            <Input
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              placeholder="默认文本"
              style={{ width: 150 }}
            />

            <span>尺寸:</span>
            <Select value={size} onChange={setSize} style={{ width: 100 }}>
              <Select.Option value="default">默认</Select.Option>
              <Select.Option value="small">小</Select.Option>
            </Select>
          </Space>
        </div>

        <LoadingProgress
          percent={percent}
          status={status}
          showStatus={showStatus}
          statusText={statusText || undefined}
          size={size}
        />
      </Space>
    </div>
  );
};
