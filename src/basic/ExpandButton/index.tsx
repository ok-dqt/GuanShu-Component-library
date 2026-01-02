/**
 * @module ExpandButton
 * @description 展开/收起按钮组件
 */

import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './index.less';

export interface ExpandButtonProps {
  /** 是否展开 */
  isExpanded: boolean;
  /** 切换回调 */
  onToggle: () => void;
  /** 展开时的文本 */
  expandedText?: string;
  /** 收起时的文本 */
  collapsedText?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 展开/收起按钮组件
 * 用于展开或收起更多内容的按钮
 */
export const ExpandButton: React.FC<ExpandButtonProps> = ({
  isExpanded,
  onToggle,
  expandedText = '收起',
  collapsedText = '展开更多',
  style,
}) => (
  <div onClick={onToggle} className="expand-button" style={style}>
    <span>{isExpanded ? expandedText : collapsedText}</span>
    {isExpanded ? (
      <UpOutlined className="expand-button__icon" />
    ) : (
      <DownOutlined className="expand-button__icon" />
    )}
  </div>
);

export default ExpandButton;
