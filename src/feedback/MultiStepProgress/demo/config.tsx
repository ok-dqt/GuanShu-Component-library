import React, { useState } from 'react';
import { MultiStepProgress } from '../index';
import type { StepItem } from '../index';
import { Card, Space, Input, Switch, Select, Button } from 'antd';

export default () => {
  const [title, setTitle] = useState('任务进度');
  const [visible, setVisible] = useState(true);
  const [progressFormat, setProgressFormat] = useState<'percentage' | 'fraction'>('fraction');
  const [steps, setSteps] = useState<StepItem[]>([
    { key: 'step1', label: '步骤一', loading: false, completed: true },
    { key: 'step2', label: '步骤二', loading: true, completed: false },
    { key: 'step3', label: '步骤三', loading: false, completed: false },
  ]);

  const toggleStepStatus = (index: number, field: 'loading' | 'completed') => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[index] = {
        ...newSteps[index],
        [field]: !newSteps[index][field],
      };
      return newSteps;
    });
  };

  const updateStepLabel = (index: number, label: string) => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[index] = { ...newSteps[index], label };
      return newSteps;
    });
  };

  const addStep = () => {
    setSteps((prevSteps) => [
      ...prevSteps,
      {
        key: `step${prevSteps.length + 1}`,
        label: `步骤${prevSteps.length + 1}`,
        loading: false,
        completed: false,
      },
    ]);
  };

  const removeLastStep = () => {
    if (steps.length > 1) {
      setSteps((prevSteps) => prevSteps.slice(0, -1));
    }
  };

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
            <span>进度格式:</span>
            <Select
              value={progressFormat}
              onChange={setProgressFormat}
              style={{ width: 150 }}
              options={[
                { label: '分数 (x/y)', value: 'fraction' },
                { label: '百分比 (%)', value: 'percentage' },
              ]}
            />
          </Space>

          <Space wrap>
            <span>显示组件:</span>
            <Switch checked={visible} onChange={setVisible} />
          </Space>

          <Space wrap>
            <Button size="small" onClick={addStep}>
              添加步骤
            </Button>
            <Button size="small" onClick={removeLastStep} disabled={steps.length <= 1}>
              删除最后步骤
            </Button>
          </Space>

          <div style={{ marginTop: 8 }}>
            <div style={{ marginBottom: 8, fontWeight: 600 }}>步骤配置:</div>
            {steps.map((step, index) => (
              <Card key={step.key} size="small" style={{ marginBottom: 8 }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space wrap>
                    <span>标签:</span>
                    <Input
                      value={step.label}
                      onChange={(e) => updateStepLabel(index, e.target.value)}
                      style={{ width: 120 }}
                    />
                  </Space>
                  <Space wrap>
                    <span>加载中:</span>
                    <Switch
                      checked={step.loading}
                      onChange={() => toggleStepStatus(index, 'loading')}
                      size="small"
                    />
                    <span style={{ marginLeft: 16 }}>已完成:</span>
                    <Switch
                      checked={step.completed}
                      onChange={() => toggleStepStatus(index, 'completed')}
                      size="small"
                    />
                  </Space>
                </Space>
              </Card>
            ))}
          </div>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <MultiStepProgress
          title={title}
          steps={steps}
          visible={visible}
          progressFormat={progressFormat}
        />
      </Card>
    </Space>
  );
};
