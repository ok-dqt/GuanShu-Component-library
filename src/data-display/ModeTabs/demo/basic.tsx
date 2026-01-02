import React, { useState } from 'react';
import { ModeTabs } from '../index';
import { Space, Card } from 'antd';

export default () => {
  const [mode, setMode] = useState('simple');

  const options = [
    { value: 'simple', label: '精简模式', tooltip: '仅展示最新一条回复' },
    { value: 'detail', label: '完整模式', tooltip: '展示所有回复' },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <ModeTabs value={mode} options={options} onChange={setMode} />

      <Card size="small">
        <div>当前模式: {mode === 'simple' ? '精简模式' : '完整模式'}</div>
      </Card>
    </Space>
  );
};
