import React, { useState } from 'react';
import { FilterBar } from '../index';
import type { FilterControl } from '../index';
import { Card, Space, message } from 'antd';

export default () => {
  const [orderType, setOrderType] = useState<string>('default');
  const [filterTypes, setFilterTypes] = useState<(string | number)[]>([]);
  const [selectedSkus, setSelectedSkus] = useState<(string | number)[]>([]);
  const [filterDefault, setFilterDefault] = useState(false);

  const filters: FilterControl[] = [
    {
      key: 'order',
      type: 'segmented',
      value: orderType,
      options: [
        { label: '默认排序', value: 'default' },
        { label: '按时间排序', value: 'feedbackdate' },
      ],
      onChange: (value) => setOrderType(value as string),
    },
    {
      key: 'reviewType',
      type: 'multiSelect',
      placeholder: '筛选评价类型',
      value: filterTypes,
      options: [
        { label: '好评', value: 'good' },
        { label: '中评', value: 'medium' },
        { label: '差评', value: 'bad' },
        { label: '晒图', value: 'withImage' },
      ],
      onChange: setFilterTypes,
      allowClear: true,
    },
    {
      key: 'sku',
      type: 'multiSelect',
      placeholder: '筛选SKU',
      value: selectedSkus,
      options: [
        { label: '红色-L', value: 'red-l' },
        { label: '蓝色-M', value: 'blue-m' },
        { label: '黑色-S', value: 'black-s' },
      ],
      onChange: setSelectedSkus,
      allowClear: true,
    },
    {
      key: 'filterDefault',
      type: 'switch',
      label: '过滤默认评价',
      checked: filterDefault,
      onChange: setFilterDefault,
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="完整筛选栏">
        <FilterBar
          filters={filters}
          dataCount={156}
          exportOptions={[
            { key: 'csv', label: 'CSV 格式' },
            { key: 'xlsx', label: 'Excel 格式' },
            { key: 'xlsx-image', label: 'Excel 格式（含图片）' },
          ]}
          onExport={(key) => message.info(`导出为 ${key} 格式`)}
        />
      </Card>

      <Card size="small" title="简单筛选栏（无导出）">
        <FilterBar
          filters={[
            {
              key: 'status',
              type: 'select',
              placeholder: '选择状态',
              value: 'all',
              options: [
                { label: '全部', value: 'all' },
                { label: '已完成', value: 'completed' },
                { label: '进行中', value: 'inProgress' },
              ],
              onChange: (value) => message.info(`选择: ${value}`),
            },
          ]}
          dataCount={42}
        />
      </Card>
    </Space>
  );
};
