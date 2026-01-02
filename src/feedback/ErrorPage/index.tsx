/**
 * @module ErrorPage
 * @description 通用错误页面组件
 */

import React from 'react';
import { Button, Result } from 'antd';
import type { ResultProps } from 'antd';

export type ErrorStatus = '403' | '404' | '500' | 'error' | 'warning' | 'info';

export interface ErrorPageProps {
  /** 错误状态 */
  status?: ErrorStatus;
  /** 标题 */
  title?: string;
  /** 副标题 */
  subTitle?: string;
  /** 操作按钮 */
  extra?: React.ReactNode;
  /** 主要操作回调 */
  onPrimaryAction?: () => void;
  /** 次要操作回调 */
  onSecondaryAction?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 主要操作文本 */
  primaryText?: string;
  /** 次要操作文本 */
  secondaryText?: string;
  /** 关闭按钮文本 */
  closeText?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const DEFAULT_CONFIG: Record<ErrorStatus, { title: string; subTitle: string }> = {
  '403': {
    title: '403',
    subTitle: '抱歉，您无权访问此页面',
  },
  '404': {
    title: '404',
    subTitle: '抱歉，您访问的页面不存在',
  },
  '500': {
    title: '500',
    subTitle: '抱歉，服务器出错了',
  },
  error: {
    title: '操作失败',
    subTitle: '抱歉，操作失败，请稍后重试',
  },
  warning: {
    title: '警告',
    subTitle: '请注意相关提示信息',
  },
  info: {
    title: '提示',
    subTitle: '相关信息',
  },
};

/**
 * 通用错误页面组件
 * 支持多种错误状态展示
 */
export const ErrorPage: React.FC<ErrorPageProps> = ({
  status = '404',
  title,
  subTitle,
  extra,
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  primaryText = '返回首页',
  secondaryText = '联系客服',
  closeText = '关闭',
  style,
}) => {
  const config = DEFAULT_CONFIG[status];
  const displayTitle = title || config.title;
  const displaySubTitle = subTitle || config.subTitle;

  const defaultExtra = (
    <>
      {onPrimaryAction && (
        <Button type="primary" onClick={onPrimaryAction}>
          {primaryText}
        </Button>
      )}
      {onSecondaryAction && (
        <Button onClick={onSecondaryAction}>{secondaryText}</Button>
      )}
      {onClose && <Button onClick={onClose}>{closeText}</Button>}
    </>
  );

  return (
    <div style={{ padding: '20px 0', ...style }}>
      <Result
        status={status as ResultProps['status']}
        title={displayTitle}
        subTitle={displaySubTitle}
        extra={extra || defaultExtra}
      />
    </div>
  );
};

