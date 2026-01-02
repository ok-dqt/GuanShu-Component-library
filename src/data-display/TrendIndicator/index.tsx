import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './index.less';

export type TrendType = 'up' | 'down';

export interface TrendIndicatorProps {
  value: number;
  type: TrendType;
  suffix?: string;
  reverseColor?: boolean;
  showIcon?: boolean;
  style?: React.CSSProperties;
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  value,
  type,
  suffix = '%',
  reverseColor = false,
  showIcon = true,
  style,
}) => {
  const isUp = type === 'up';

  const getColor = () => {
    if (reverseColor) {
      return isUp ? '#cf1322' : '#3f8600';
    }
    return isUp ? '#3f8600' : '#cf1322';
  };

  const Icon = isUp ? ArrowUpOutlined : ArrowDownOutlined;

  return (
    <span className="trend-indicator" style={{ color: getColor(), ...style }}>
      {showIcon && <Icon style={{ marginRight: 4 }} />}
      <span>
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  );
};
