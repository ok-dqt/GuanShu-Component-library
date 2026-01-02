import React, { useState, useEffect } from 'react';
import { ProgressStatusPanel } from '../index';
import type { StatusItem } from '../index';
import { Button, Card, Space } from 'antd';

export default () => {
  const [current, setCurrent] = useState(1);
  const [statusItems, setStatusItems] = useState<StatusItem[]>([
    { key: 'task1', label: '任务1', loading: true, completed: false },
    { key: 'task2', label: '任务2', loading: false, completed: false },
    { key: 'task3', label: '任务3', loading: false, completed: false },
    { key: 'task4', label: '任务4', loading: false, completed: false },
  ]);

  useEffect(() => {
    if (current <= 4 && current > 0) {
      const timer = setTimeout(() => {
        setStatusItems((prev) =>
          prev.map((item, idx) => ({
            ...item,
            loading: idx === current,
            completed: idx < current,
          }))
        );
        setCurrent(current + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const handleReset = () => {
    setCurrent(1);
    setStatusItems([
      { key: 'task1', label: '任务1', loading: true, completed: false },
      { key: 'task2', label: '任务2', loading: false, completed: false },
      { key: 'task3', label: '任务3', loading: false, completed: false },
      { key: 'task4', label: '任务4', loading: false, completed: false },
    ]);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="基础用法">
        <Space direction="vertical" style={{ width: '100%' }}>
          <ProgressStatusPanel
            title="数据加载进度"
            current={Math.min(current, 4)}
            total={4}
            statusItems={statusItems}
          />
          <Button onClick={handleReset} block>
            重置演示
          </Button>
        </Space>
      </Card>
    </Space>
  );
};
