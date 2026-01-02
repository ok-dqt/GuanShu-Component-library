/**
 * @module ExportProgressOverlay
 * @description 导出进度遮罩层组件
 */

import React from 'react';
import { Progress, Button, Space } from 'antd';
import './index.less';

/** 导出阶段 */
export type ExportStage = 'downloading' | 'generating' | 'processing';

/** 进度信息 */
export interface ExportProgress {
  /** 当前阶段 */
  stage: ExportStage;
  /** 当前进度 */
  current: number;
  /** 总数 */
  total: number;
}

/** 阶段显示文本 */
const STAGE_TEXT: Record<ExportStage, string> = {
  downloading: '正在下载数据',
  generating: '正在生成文件',
  processing: '正在处理',
};

export interface ExportProgressOverlayProps {
  /** 进度信息，为 null 时不显示遮罩 */
  progress: ExportProgress | null;
  /** 取消回调 */
  onCancel: () => void;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 自定义阶段文本 */
  stageText?: Partial<Record<ExportStage, string>>;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 导出进度遮罩层组件
 * 覆盖整个父容器，显示导出进度和取消按钮
 */
export const ExportProgressOverlay: React.FC<ExportProgressOverlayProps> = ({
  progress,
  onCancel,
  showCancel = true,
  stageText,
  style,
}) => {
  if (!progress) return null;

  const { stage, current, total } = progress;
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  const displayText = stageText?.[stage] || STAGE_TEXT[stage];

  return (
    <div className="export-progress-overlay" style={style}>
      <div className="export-progress-overlay__content">
        <Space direction="vertical" align="center" size="middle">
          <div className="export-progress-overlay__text">{displayText}</div>
          <Progress
            percent={percent}
            status="active"
            style={{ width: 240 }}
          />
          <div className="export-progress-overlay__count">
            {current} / {total}
          </div>
          {showCancel && (
            <Button size="small" onClick={onCancel}>
              取消
            </Button>
          )}
        </Space>
      </div>
    </div>
  );
};

