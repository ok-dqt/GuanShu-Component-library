import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { designTokens } from '../../theme';
import './index.less';

export interface StatisticCardProps {
  title: string;
  value: number | string;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: {
    value: number;
    type: 'up' | 'down';
  };
  loading?: boolean;
  bordered?: boolean;
  style?: React.CSSProperties;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  precision,
  prefix,
  suffix,
  trend,
  loading = false,
  bordered = true,
  style,
}) => {
  const renderTrend = () => {
    if (!trend) return null;

    const isUp = trend.type === 'up';
    const color = isUp ? designTokens.colors.success : designTokens.colors.error;
    const Icon = isUp ? ArrowUpOutlined : ArrowDownOutlined;

    return (
      <div className="statistic-card-trend" style={{ color }}>
        <Icon />
        <span style={{ marginLeft: 4 }}>
          {Math.abs(trend.value)}%
        </span>
      </div>
    );
  };

  return (
    <Card bordered={bordered} loading={loading} style={style} className="statistic-card">
      <Statistic
        title={title}
        value={value}
        precision={precision}
        prefix={prefix}
        suffix={suffix}
      />
      {renderTrend()}
    </Card>
  );
};
