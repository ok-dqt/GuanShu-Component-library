/**
 * @module MultiStepProgress
 * @description 多步骤进度组件，自动根据步骤状态计算进度
 */

import React, { useMemo } from 'react';
import { Progress, Space, Tag, Typography } from 'antd';
import './index.less';

const { Text } = Typography;

export interface StepItem {
  /** 步骤标识 */
  key: string;
  /** 步骤标签 */
  label: string;
  /** 是否加载中 */
  loading: boolean;
  /** 是否已完成 */
  completed: boolean;
}

export interface MultiStepProgressProps {
  /** 标题 */
  title?: string;
  /** 步骤列表 */
  steps: StepItem[];
  /** 是否可见 */
  visible?: boolean;
  /** 进度显示格式 */
  progressFormat?: 'percentage' | 'fraction';
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 多步骤进度组件
 * 根据步骤状态自动计算总体进度
 */
export const MultiStepProgress: React.FC<MultiStepProgressProps> = ({
  title = '任务进度',
  steps,
  visible = true,
  progressFormat = 'fraction',
  style,
}) => {
  // 计算进度
  const progress = useMemo(() => {
    const total = steps.length;
    const completed = steps.filter((s) => s.completed).length;
    const loading = steps.filter((s) => s.loading && !s.completed).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, loading, percentage };
  }, [steps]);

  if (!visible) return null;

  const getTagColor = (step: StepItem) => {
    if (step.completed) return 'green';
    if (step.loading) return 'blue';
    return 'default';
  };

  const getStepIcon = (step: StepItem) => {
    if (step.completed) return '✓';
    if (step.loading) return '...';
    return '⏳';
  };

  const formatProgress = () => {
    if (progressFormat === 'fraction') {
      return `${progress.completed}/${progress.total}`;
    }
    return undefined; // 显示默认百分比
  };

  return (
    <div className="multi-step-progress" style={style}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Text strong>{title}</Text>
        <Progress
          percent={progress.percentage}
          status={progress.loading > 0 ? 'active' : 'normal'}
          showInfo={true}
          format={formatProgress}
        />
        <Space wrap>
          {steps.map((step) => (
            <Tag key={step.key} color={getTagColor(step)}>
              {step.label} {getStepIcon(step)}
            </Tag>
          ))}
        </Space>
      </Space>
    </div>
  );
};

export default MultiStepProgress;
