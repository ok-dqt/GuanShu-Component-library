import React, { useState } from 'react';
import { OverviewItem } from '../index';
import { Card, Space, Radio, InputNumber, Input } from 'antd';

export default () => {
  const [mode, setMode] = useState<'realtime' | 'period' | 'custom'>('realtime');
  const [title, setTitle] = useState('访客数');
  const [value, setValue] = useState('12,345');
  const [compareRate, setCompareRate] = useState(0.15);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>展示模式:</span>
            <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
              <Radio.Button value="realtime">实时维度</Radio.Button>
              <Radio.Button value="period">日/周/月维度</Radio.Button>
              <Radio.Button value="custom">自定义维度</Radio.Button>
            </Radio.Group>
          </Space>

          <Space wrap>
            <span>标题:</span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: 150 }}
            />
          </Space>

          <Space wrap>
            <span>当前值:</span>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ width: 150 }}
            />
          </Space>

          <Space wrap>
            <span>变化率:</span>
            <InputNumber
              value={compareRate}
              onChange={(val) => setCompareRate(val || 0)}
              min={-1}
              max={1}
              step={0.01}
              style={{ width: 150 }}
            />
            <span style={{ color: '#999', fontSize: 12 }}>
              ({(compareRate * 100).toFixed(2)}%)
            </span>
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览" style={{ maxWidth: 400 }}>
        {mode === 'realtime' && (
          <OverviewItem
            title={title}
            value={value}
            compareRate={compareRate}
            yesterdaySameTimeValue="10,735"
            yesterdayValue="18,520"
          />
        )}

        {mode === 'period' && (
          <OverviewItem
            title={title}
            value={value}
            rivalAvgValue="38,520"
            rivalGoodValue="62,100"
            periodCompareRate={compareRate}
            periodLabel="较前1日"
          />
        )}

        {mode === 'custom' && (
          <OverviewItem
            title={title}
            value={value}
            customCompareValue="108,520"
            customCompareRate={compareRate}
          />
        )}
      </Card>
    </Space>
  );
};
