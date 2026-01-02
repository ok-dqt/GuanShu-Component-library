import React, { useState } from 'react';
import { ModeTabs } from '../index';
import { Space, Select, Switch, Card } from 'antd';

export default () => {
  const [mode, setMode] = useState('simple');
  const [showTooltip, setShowTooltip] = useState(true);
  const [size, setSize] = useState<'large' | 'middle' | 'small'>('middle');

  const optionsWithTooltip = [
    { value: 'simple', label: '精简模式', tooltip: '仅展示最新一条回复' },
    { value: 'detail', label: '完整模式', tooltip: '展示所有回复' },
  ];

  const optionsWithoutTooltip = [
    { value: 'simple', label: '精简模式' },
    { value: 'detail', label: '完整模式' },
  ];

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>显示提示:</span>
            <Switch checked={showTooltip} onChange={setShowTooltip} />

            <span>尺寸:</span>
            <Select value={size} onChange={setSize} style={{ width: 100 }}>
              <Select.Option value="small">小</Select.Option>
              <Select.Option value="middle">中</Select.Option>
              <Select.Option value="large">大</Select.Option>
            </Select>
          </Space>
        </div>

        <ModeTabs
          value={mode}
          options={showTooltip ? optionsWithTooltip : optionsWithoutTooltip}
          onChange={setMode}
          size={size}
        />

        <Card size="small">
          <div>当前模式: {mode === 'simple' ? '精简模式' : '完整模式'}</div>
        </Card>
      </Space>
    </div>
  );
};
