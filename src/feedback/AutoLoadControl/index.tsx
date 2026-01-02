import React from 'react';
import { Button, Select, Progress, Typography } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import './index.less';

const { Link } = Typography;

export interface LoadingProgress {
  currentPage: number;
  totalPages: number;
  percentage: number;
}

export interface AutoLoadControlProps {
  isLoading: boolean;
  batchSize: number;
  loadingProgress?: LoadingProgress;
  disabled?: boolean;
  disableNextPage?: boolean;
  onBatchSizeChange: (size: number) => void;
  onLoadNextPage: () => void;
  onStartAutoLoad: () => void;
  onStopLoad: () => void;
  batchSizeOptions?: Array<{ label: string; value: number }>;
  style?: React.CSSProperties;
}

const DEFAULT_BATCH_SIZE_OPTIONS = [
  { label: '5页', value: 5 },
  { label: '10页', value: 10 },
  { label: '15页', value: 15 },
  { label: '30页', value: 30 },
];

export const AutoLoadControl: React.FC<AutoLoadControlProps> = ({
  isLoading,
  batchSize,
  loadingProgress,
  disabled = false,
  disableNextPage = false,
  onBatchSizeChange,
  onLoadNextPage,
  onStartAutoLoad,
  onStopLoad,
  batchSizeOptions = DEFAULT_BATCH_SIZE_OPTIONS,
  style,
}) => {
  if (isLoading && loadingProgress) {
    return (
      <div className="auto-load-control-loading" style={style}>
        <SyncOutlined spin className="auto-load-control-loading-icon" />
        <span className="auto-load-control-loading-text">
          正在加载第{loadingProgress.currentPage}/{loadingProgress.totalPages}页
        </span>
        <Progress percent={loadingProgress.percentage} type="line" size={[160, 8]} className="auto-load-control-progress" />
        <Link onClick={onStopLoad} className="auto-load-control-stop-link">
          停止加载
        </Link>
      </div>
    );
  }

  return (
    <div className="auto-load-control" style={style}>
      <Button type="primary" onClick={onLoadNextPage} disabled={disabled || disableNextPage}>
        加载下一页
      </Button>

      <div className="auto-load-control-combo">
        <div
          className="auto-load-control-combo-trigger"
          onClick={disabled ? undefined : onStartAutoLoad}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          <SyncOutlined className="auto-load-control-icon" />
          <span>自动加载</span>
        </div>
        <Select
          value={batchSize}
          onChange={onBatchSizeChange}
          options={batchSizeOptions}
          disabled={disabled}
          size="small"
          className="auto-load-control-select"
        />
      </div>
    </div>
  );
};
