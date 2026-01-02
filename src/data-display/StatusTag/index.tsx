import React from 'react';
import { Tag } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

export type StatusType = 'success' | 'processing' | 'error' | 'warning' | 'default' | 'loading';

export interface StatusTagProps {
  status: StatusType;
  text?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const statusConfig = {
  success: {
    color: 'success',
    icon: <CheckCircleOutlined />,
    text: '成功',
  },
  processing: {
    color: 'processing',
    icon: <SyncOutlined spin />,
    text: '进行中',
  },
  error: {
    color: 'error',
    icon: <CloseCircleOutlined />,
    text: '失败',
  },
  warning: {
    color: 'warning',
    icon: <ExclamationCircleOutlined />,
    text: '警告',
  },
  default: {
    color: 'default',
    icon: <MinusCircleOutlined />,
    text: '默认',
  },
  loading: {
    color: 'processing',
    icon: <ClockCircleOutlined />,
    text: '加载中',
  },
};

export const StatusTag: React.FC<StatusTagProps> = ({
  status,
  text,
  icon,
  style,
}) => {
  const config = statusConfig[status];
  const displayIcon = icon !== undefined ? icon : config.icon;
  const displayText = text || config.text;

  return (
    <Tag color={config.color} icon={displayIcon} style={style}>
      {displayText}
    </Tag>
  );
};
