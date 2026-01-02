import React, { useState } from 'react';
import { DatePopover } from '../index';
import { Space, Card, Select, InputNumber, Input } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { DatePickerType } from '../index';

export default () => {
  const [type, setType] = useState<DatePickerType>('day');
  const [value, setValue] = useState<Dayjs | null>(dayjs().subtract(1, 'day'));
  const [maxDateOffset, setMaxDateOffset] = useState<number>(1);
  const [label, setLabel] = useState<string>('');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>类型:</span>
            <Select
              value={type}
              onChange={(val) => {
                setType(val);
                setValue(dayjs().subtract(1, val === 'month' ? 'month' : val === 'week' ? 'week' : 'day'));
              }}
              style={{ width: 120 }}
              options={[
                { label: '日', value: 'day' },
                { label: '周', value: 'week' },
                { label: '月', value: 'month' },
              ]}
            />
          </Space>

          <Space wrap>
            <span>最大日期偏移:</span>
            <InputNumber
              value={maxDateOffset}
              onChange={(val) => setMaxDateOffset(val || 1)}
              min={0}
              max={365}
            />
            <span style={{ color: '#999', fontSize: 12 }}>
              (相对今天往前推多少天/周/月)
            </span>
          </Space>

          <Space wrap>
            <span>自定义标签:</span>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="留空使用默认"
              style={{ width: 200 }}
            />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <Space direction="vertical" size="middle">
          <div>
            Hover 在这里查看日期选择器：
            <DatePopover
              type={type}
              value={value}
              onChange={setValue}
              maxDateOffset={maxDateOffset}
              label={label || undefined}
            />
          </div>

          <div style={{ color: '#999' }}>
            已选日期：{value?.format(type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD') || '未选择'}
          </div>
        </Space>
      </Card>
    </Space>
  );
};
