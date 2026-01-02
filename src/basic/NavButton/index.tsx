import React, { useState, useCallback } from 'react';
import { Tooltip, Dropdown } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './index.less';

export interface DropdownItem {
  key: string;
  label: string;
}

export type ButtonType = 'default' | 'value' | 'link';

export interface NavButtonProps {
  label: string;
  buttonType?: ButtonType;
  value?: string;
  tooltip?: string;
  icon?: React.ReactNode;
  showCopy?: boolean;
  dropdownItems?: DropdownItem[];
  onClick?: () => void;
  onDropdownItemClick?: (item: DropdownItem) => void;
  style?: React.CSSProperties;
}

const COPY_SUCCESS_DURATION = 1500;

export const NavButton: React.FC<NavButtonProps> = ({
  label,
  buttonType = 'default',
  value,
  tooltip,
  icon,
  showCopy = false,
  dropdownItems,
  onClick,
  onDropdownItemClick,
  style,
}) => {
  const [copied, setCopied] = useState(false);

  const isClickable = !!onClick;
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  const handleClick = useCallback(() => {
    if (!isClickable) return;
    onClick?.();

    if (showCopy) {
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_SUCCESS_DURATION);
    }
  }, [isClickable, onClick, showCopy]);

  const CopyIcon = copied ? CheckOutlined : CopyOutlined;

  const content = (
    <div
      className={`nav-button nav-button--${buttonType} ${isClickable ? 'nav-button--clickable' : ''}`}
      onClick={handleClick}
      style={style}
    >
      {buttonType === 'value' ? (
        <>
          <span className="nav-button-label">{label}</span>
          <span className="nav-button-value">{value}</span>
          {showCopy && <CopyIcon className={`nav-button-copy ${copied ? 'nav-button-copy--success' : ''}`} />}
        </>
      ) : (
        <>
          {label}
          {icon && <span className="nav-button-icon">{icon}</span>}
        </>
      )}
    </div>
  );

  const dropdownMenuItems: MenuProps['items'] = dropdownItems?.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: () => onDropdownItemClick?.(item),
  }));

  if (hasDropdown) {
    return (
      <Dropdown menu={{ items: dropdownMenuItems }} trigger={['hover']}>
        {content}
      </Dropdown>
    );
  }

  return tooltip ? <Tooltip title={tooltip}>{content}</Tooltip> : content;
};
