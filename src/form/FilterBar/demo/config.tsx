import React, { useState } from 'react';
import { FilterBar } from '../index';
import type { FilterControl } from '../index';
import { Card, Space, InputNumber, Input, Switch, message } from 'antd';

export default () => {
  const [dataCount, setDataCount] = useState(100);
  const [loading, setLoading] = useState(false);
  const [dataCountText, setDataCountText] = useState('当前表格中共有 {count} 条数据');

  const [segValue, setSegValue] = useState<string>('default');
  const [selectValue, setSelectValue] = useState<string>('all');
  const [multiValue, setMultiValue] = useState<(string | number)[]>([]);
  const [switchValue, setSwitchValue] = useState(false);

  const filters: FilterControl[] = [
    {
      key: 'seg',
      type: 'segmented',
      value: segValue,
      options: [
        { label: '默认', value: 'default' },
        { label: '自定义', value: 'custom' },
      ],
      onChange: (value) => setSegValue(value as string),
    },
    {
      key: 'select',
      type: 'select',
      placeholder: '选择分类',
      value: selectValue,
      options: [
        { label: '全部', value: 'all' },
        { label: '分类A', value: 'a' },
        { label: '分类B', value: 'b' },
      ],
      onChange: (value) => setSelectValue(value as string),
      allowClear: true,
    },
    {
      key: 'multi',
      type: 'multiSelect',
      placeholder: '多选标签',
      value: multiValue,
      options: [
        { label: '标签1', value: '1' },
        { label: '标签2', value: '2' },
        { label: '标签3', value: '3' },
      ],
      onChange: setMultiValue,
      allowClear: true,
    },
    {
      key: 'switch',
      type: 'switch',
      label: '启用过滤',
      checked: switchValue,
      onChange: setSwitchValue,
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>数据条数:</span>
            <InputNumber value={dataCount} onChange={(val) => setDataCount(val || 0)} min={0} />
          </Space>

          <Space wrap>
            <span>统计文本:</span>
            <Input
              value={dataCountText}
              onChange={(e) => setDataCountText(e.target.value)}
              placeholder="使用 {count} 作为数字占位符"
              style={{ width: 300 }}
            />
          </Space>

          <Space wrap>
            <span>加载状态:</span>
            <Switch checked={loading} onChange={setLoading} />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <FilterBar
          filters={filters}
          dataCount={dataCount}
          dataCountText={dataCountText}
          loading={loading}
          exportOptions={[
            { key: 'csv', label: 'CSV 格式' },
            { key: 'xlsx', label: 'Excel 格式' },
          ]}
          onExport={(key) => message.info(`导出为 ${key} 格式`)}
        />
      </Card>
    </Space>
  );
};
