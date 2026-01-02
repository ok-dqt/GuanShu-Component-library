import React, { useState } from 'react';
import { StatusTag } from '../index';
import { Space, Select, Input, Switch } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default () => {
  const [status, setStatus] = useState<'success' | 'processing' | 'error' | 'warning' | 'default' | 'loading'>('success');
  const [text, setText] = useState('');
  const [showCustomIcon, setShowCustomIcon] = useState(false);

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>状态类型:</span>
            <Select value={status} onChange={setStatus} style={{ width: 120 }}>
              <Select.Option value="success">成功</Select.Option>
              <Select.Option value="processing">进行中</Select.Option>
              <Select.Option value="error">失败</Select.Option>
              <Select.Option value="warning">警告</Select.Option>
              <Select.Option value="default">默认</Select.Option>
              <Select.Option value="loading">加载中</Select.Option>
            </Select>

            <span>自定义文本:</span>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="使用默认文本"
              style={{ width: 150 }}
            />

            <span>自定义图标:</span>
            <Switch checked={showCustomIcon} onChange={setShowCustomIcon} />
          </Space>
        </div>

        <StatusTag
          status={status}
          text={text || undefined}
          icon={showCustomIcon ? <SmileOutlined /> : undefined}
        />
      </Space>
    </div>
  );
};
