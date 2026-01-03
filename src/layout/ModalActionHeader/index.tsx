/**
 * @module ModalActionHeader
 * @description 弹窗操作头部组件，支持自定义logo、标题和操作按钮
 */

import React from 'react';
import { Divider } from 'antd';
import './index.less';

export interface ActionItem {
  /** 操作标识 */
  key: string;
  /** 图标（React节点或iconfont类名） */
  icon?: React.ReactNode | string;
  /** 操作文本 */
  text?: string;
  /** 点击回调 */
  onClick?: () => void;
}

export interface ModalActionHeaderProps {
  /** 标题 */
  title: string;
  /** logo图标（图片URL或React节点） */
  logo?: string | React.ReactNode;
  /** 操作按钮列表 */
  actions?: ActionItem[];
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 弹窗操作头部组件
 * 提供统一的头部布局和灵活的操作按钮配置
 */
export const ModalActionHeader: React.FC<ModalActionHeaderProps> = ({
  title,
  logo,
  actions = [],
  style,
}) => {
  const renderIcon = (icon: React.ReactNode | string) => {
    if (typeof icon === 'string') {
      // 如果是字符串，当作iconfont类名使用
      return <i className={`iconfont ${icon}`} />;
    }
    return icon;
  };

  return (
    <div className="modal-action-header" style={style}>
      <div className="modal-action-header__left">
        {logo && (
          <div className="modal-action-header__logo-wrap">
            {typeof logo === 'string' ? (
              <img src={logo} alt="logo" className="modal-action-header__logo" />
            ) : (
              logo
            )}
          </div>
        )}
        {logo && <Divider type="vertical" />}
        <span className="modal-action-header__title">{title}</span>
      </div>

      {actions.length > 0 && (
        <div className="modal-action-header__right">
          {actions.map((action, index) => (
            <React.Fragment key={action.key}>
              <span
                className="modal-action-header__action-item"
                onClick={action.onClick}
              >
                {action.icon && renderIcon(action.icon)}
                {action.text && <span>{action.text}</span>}
              </span>
              {index < actions.length - 1 && <Divider type="vertical" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

