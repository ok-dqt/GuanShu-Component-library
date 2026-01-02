import React from 'react';
import { Button, Select, Progress, Typography } from 'antd';
import { SyncOutlined, LoadingOutlined } from '@ant-design/icons';
import './index.less';

const { Link } = Typography;

export interface LoadingProgress {
  currentPage: number;
  totalPages: number;
  percentage: number;
}

export interface AutoLoadControlProps {
  /** 是否正在加载 */
  isLoading: boolean;
  /** 批量加载页数 */
  batchSize: number;
  /** 加载进度信息 */
  loadingProgress?: LoadingProgress;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否禁用"加载下一页"按钮（最后一页时） */
  disableNextPage?: boolean;
  /** 批量页数变更回调 */
  onBatchSizeChange: (size: number) => void;
  /** 加载下一页回调 */
  onLoadNextPage: () => void;
  /** 开始自动加载回调 */
  onStartAutoLoad: () => void;
  /** 停止加载回调 */
  onStopLoad: () => void;
  /** 批量页数选项 */
  batchSizeOptions?: Array<{ label: string; value: number }>;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const DEFAULT_BATCH_SIZE_OPTIONS = [
  { label: '5页', value: 5 },
  { label: '10页', value: 10 },
  { label: '15页', value: 15 },
  { label: '30页', value: 30 },
];

/**
 * 自动加载控制组件 - 纯 UI 组件
 * 支持正常态（按钮组）和 Loading 态（进度条）
 */
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
    // Loading 态
    return (
      <div className="auto-load-control__loading-container" style={style}>
        <LoadingOutlined spin className="auto-load-control__loading-icon" />
        <span className="auto-load-control__loading-text">
          正在加载第{loadingProgress.currentPage}/{loadingProgress.totalPages}页
        </span>
        <Progress
          percent={loadingProgress.percentage}
          type="line"
          size={[160, 8]}
          className="auto-load-control__progress"
        />
        <Link onClick={onStopLoad} className="auto-load-control__stop-link">
          停止加载
        </Link>
      </div>
    );
  }

  // 正常态
  return (
    <div className="auto-load-control" style={style}>
      <Button
        type="primary"
        onClick={onLoadNextPage}
        disabled={disabled || disableNextPage}
      >
        加载下一页
      </Button>

      {/* 自动加载组合按钮：左侧触发区 + 右侧下拉选择器 */}
      <div className="auto-load-control__combo-btn">
        <div
          className="auto-load-control__combo-trigger"
          onClick={disabled ? undefined : onStartAutoLoad}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          <SyncOutlined className="auto-load-control__icon" />
          <span>自动加载</span>
        </div>
        <Select
          value={batchSize}
          onChange={onBatchSizeChange}
          options={batchSizeOptions}
          disabled={disabled}
          size="small"
          className="auto-load-control__select"
          popupClassName="auto-load-control__select-popup"
        />
      </div>
    </div>
  );
};
