import React, { useState } from 'react';
import { TrendIndicator } from '../index';
import { Space, Select, InputNumber, Switch, Input } from 'antd';

export default () => {
  const [value, setValue] = useState(12.5);
  const [type, setType] = useState<'up' | 'down'>('up');
  const [suffix, setSuffix] = useState('%');
  const [reverseColor, setReverseColor] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>数值:</span>
            <InputNumber
              value={value}
              onChange={(val) => setValue(val || 0)}
              style={{ width: 120 }}
              step={0.1}
            />

            <span>趋势方向:</span>
            <Select value={type} onChange={setType} style={{ width: 100 }}>
              <Select.Option value="up">上升</Select.Option>
              <Select.Option value="down">下降</Select.Option>
            </Select>

            <span>后缀:</span>
            <Input
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              style={{ width: 80 }}
            />

            <span>反转颜色:</span>
            <Switch checked={reverseColor} onChange={setReverseColor} />

            <span>显示图标:</span>
            <Switch checked={showIcon} onChange={setShowIcon} />
          </Space>
        </div>

        <div style={{ fontSize: 16 }}>
          销售额: ¥125,000
          <TrendIndicator
            value={value}
            type={type}
            suffix={suffix}
            reverseColor={reverseColor}
            showIcon={showIcon}
            style={{ marginLeft: 8 }}
          />
        </div>
      </Space>
    </div>
  );
};
