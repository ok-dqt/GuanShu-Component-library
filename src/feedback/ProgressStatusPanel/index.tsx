/**
 * @module ProgressStatusPanel
 * @description 进度状态面板组件
 */

import React from 'react';
import { Progress, Space, Tag, Typography } from 'antd';
import './index.less';

const { Text } = Typography;

export interface StatusItem {
  /** 状态键 */
  key: string;
  /** 显示名称 */
  label: string;
  /** 是否加载中 */
  loading: boolean;
  /** 是否已完成 */
  completed: boolean;
}

export interface ProgressStatusPanelProps {
  /** 标题 */
  title?: string;
  /** 当前进度 */
  current: number;
  /** 总数 */
  total: number;
  /** 状态项列表 */
  statusItems: StatusItem[];
  /** 是否可见 */
  visible?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 进度状态面板组件
 * 用于展示多项任务的进度和状态
 */
export const ProgressStatusPanel: React.FC<ProgressStatusPanelProps> = ({
  title = '任务进度',
  current,
  total,
  statusItems,
  visible = true,
  style,
}) => {
  if (!visible) return null;

  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const hasLoading = statusItems.some((item) => item.loading);

  const getTagColor = (item: StatusItem) => {
    if (item.completed) return 'green';
    if (item.loading) return 'blue';
    return 'default';
  };

  const getTagIcon = (item: StatusItem) => {
    if (item.completed) return '✓';
    if (item.loading) return '...';
    return '⏳';
  };

  return (
    <div className="progress-status-panel" style={style}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Text strong>{title}</Text>
        <Progress
          percent={percentage}
          status={hasLoading ? 'active' : 'normal'}
          showInfo={true}
          format={() => `${current}/${total}`}
        />
        <Space wrap>
          {statusItems.map((item) => (
            <Tag key={item.key} color={getTagColor(item)}>
              {item.label} {getTagIcon(item)}
            </Tag>
          ))}
        </Space>
      </Space>
    </div>
  );
};

