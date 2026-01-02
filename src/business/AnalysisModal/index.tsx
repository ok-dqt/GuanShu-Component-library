import React from 'react';
import { Modal } from 'antd';
import type { ModalProps } from 'antd';
import './index.less';

export interface AnalysisModalProps extends Omit<ModalProps, 'children'> {
  /** 弹窗标题 */
  title: string;
  /** 是否显示 */
  visible: boolean;
  /** 关闭回调 */
  onClose: () => void;
  /** 弹窗内容 */
  children: React.ReactNode;
  /** 弹窗宽度 */
  width?: number | string;
  /** 是否全屏 */
  fullscreen?: boolean;
  /** 是否显示头部操作按钮 */
  showHeaderActions?: boolean;
  /** 头部自定义内容 */
  headerExtra?: React.ReactNode;
}

/**
 * 分析弹窗
 *
 * 通用的数据分析弹窗组件。
 */
export const AnalysisModal: React.FC<AnalysisModalProps> = ({
  title,
  visible,
  onClose,
  children,
  width = '90%',
  fullscreen = false,
  showHeaderActions = true,
  headerExtra,
  ...restProps
}) => {
  return (
    <Modal
      title={
        <div className="analysis-modal__header">
          <span className="analysis-modal__title">{title}</span>
          {headerExtra && (
            <div className="analysis-modal__header-extra">{headerExtra}</div>
          )}
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={fullscreen ? '100%' : width}
      className={`analysis-modal ${fullscreen ? 'analysis-modal--fullscreen' : ''}`}
      centered
      destroyOnClose
      {...restProps}
    >
      <div className="analysis-modal__content">{children}</div>
    </Modal>
  );
};

