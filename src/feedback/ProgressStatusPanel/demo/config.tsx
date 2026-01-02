import React, { useState } from 'react';
import { ProgressStatusPanel } from '../index';
import type { StatusItem } from '../index';
import { Card, Space, InputNumber, Input, Checkbox } from 'antd';

export default () => {
  const [title, setTitle] = useState('任务进度');
  const [current, setCurrent] = useState(2);
  const [total, setTotal] = useState(4);
  const [visible, setVisible] = useState(true);

  const statusItems: StatusItem[] = [
    { key: '1', label: '下载数据', loading: false, completed: true },
    { key: '2', label: '处理数据', loading: true, completed: false },
    { key: '3', label: '生成报告', loading: false, completed: false },
    { key: '4', label: '发送通知', loading: false, completed: false },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>标题:</span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: 200 }}
            />
          </Space>

          <Space wrap>
            <span>当前进度:</span>
            <InputNumber
              value={current}
              onChange={(val) => setCurrent(val || 0)}
              min={0}
              max={total}
            />
          </Space>

          <Space wrap>
            <span>总数:</span>
            <InputNumber
              value={total}
              onChange={(val) => setTotal(val || 1)}
              min={1}
              max={10}
            />
          </Space>

          <Space wrap>
            <Checkbox checked={visible} onChange={(e) => setVisible(e.target.checked)}>
              显示面板
            </Checkbox>
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <ProgressStatusPanel
          title={title}
          current={current}
          total={total}
          statusItems={statusItems}
          visible={visible}
        />
      </Card>
    </Space>
  );
};
