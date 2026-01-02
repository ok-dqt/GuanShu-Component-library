import React, { useState, useEffect } from 'react';
import { MultiStepProgress } from '../index';
import type { StepItem } from '../index';
import { Card, Space, Button, message } from 'antd';

export default () => {
  const [steps1, setSteps1] = useState<StepItem[]>([
    { key: 'step1', label: '初始化', loading: false, completed: true },
    { key: 'step2', label: '数据加载', loading: true, completed: false },
    { key: 'step3', label: '数据处理', loading: false, completed: false },
    { key: 'step4', label: '完成', loading: false, completed: false },
  ]);

  const [steps2, setSteps2] = useState<StepItem[]>([
    { key: 'all', label: '总推广', loading: false, completed: true },
    { key: 'search', label: '关键词推广', loading: false, completed: true },
    { key: 'display', label: '人群推广', loading: true, completed: false },
    { key: 'site', label: '全站推广', loading: false, completed: false },
  ]);

  const handleNextStep1 = () => {
    setSteps1((prevSteps) => {
      const newSteps = [...prevSteps];
      const currentIndex = newSteps.findIndex((s) => s.loading);

      if (currentIndex !== -1) {
        // 完成当前步骤
        newSteps[currentIndex] = { ...newSteps[currentIndex], loading: false, completed: true };

        // 开始下一步骤
        if (currentIndex + 1 < newSteps.length) {
          newSteps[currentIndex + 1] = {
            ...newSteps[currentIndex + 1],
            loading: true,
          };
        } else {
          message.success('所有步骤已完成！');
        }
      }

      return newSteps;
    });
  };

  const handleReset1 = () => {
    setSteps1([
      { key: 'step1', label: '初始化', loading: false, completed: true },
      { key: 'step2', label: '数据加载', loading: true, completed: false },
      { key: 'step3', label: '数据处理', loading: false, completed: false },
      { key: 'step4', label: '完成', loading: false, completed: false },
    ]);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card
        size="small"
        title="数据处理流程"
        extra={
          <Space>
            <Button size="small" onClick={handleNextStep1}>
              下一步
            </Button>
            <Button size="small" onClick={handleReset1}>
              重置
            </Button>
          </Space>
        }
      >
        <MultiStepProgress title="处理进度" steps={steps1} />
      </Card>

      <Card size="small" title="推广数据获取">
        <MultiStepProgress title="推广数据获取状态" steps={steps2} />
      </Card>

      <Card size="small" title="所有步骤完成">
        <MultiStepProgress
          title="导出进度"
          steps={[
            { key: 'prepare', label: '准备数据', loading: false, completed: true },
            { key: 'format', label: '格式化', loading: false, completed: true },
            { key: 'export', label: '导出文件', loading: false, completed: true },
          ]}
        />
      </Card>
    </Space>
  );
};
