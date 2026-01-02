import React from 'react';
import { Progress, Space, Tag } from 'antd';
import { LoadingOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './index.less';

export type LoadingStatus = 'loading' | 'completed' | 'error';

export interface LoadingProgressProps {
  percent: number;
  status?: LoadingStatus;
  showStatus?: boolean;
  statusText?: string;
  size?: 'default' | 'small';
  style?: React.CSSProperties;
}

export const LoadingProgress: React.FC<LoadingProgressProps> = ({
  percent,
  status = 'loading',
  showStatus = true,
  statusText,
  size = 'default',
  style,
}) => {
  const getStatusTag = () => {
    if (!showStatus) return null;

    const statusConfig = {
      loading: {
        icon: <LoadingOutlined />,
        color: 'processing',
        text: statusText || '加载中',
      },
      completed: {
        icon: <CheckCircleOutlined />,
        color: 'success',
        text: statusText || '已完成',
      },
      error: {
        icon: null,
        color: 'error',
        text: statusText || '加载失败',
      },
    };

    const config = statusConfig[status];

    return (
      <Tag icon={config.icon} color={config.color}>
        {config.text}
      </Tag>
    );
  };

  const getProgressStatus = () => {
    if (status === 'error') return 'exception';
    if (status === 'completed') return 'success';
    return 'active';
  };

  return (
    <div className="loading-progress" style={style}>
      <Space direction="vertical" style={{ width: '100%' }} size={size === 'small' ? 4 : 8}>
        <Progress
          percent={percent}
          status={getProgressStatus()}
          size={size}
        />
        {getStatusTag()}
      </Space>
    </div>
  );
};
