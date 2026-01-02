import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './index.less';

export interface DataCardProps {
  /** 卡片标题 */
  title: string;
  /** 数据值 */
  value: number | string;
  /** 前缀（如货币符号） */
  prefix?: string;
  /** 后缀（如单位） */
  suffix?: string;
  /** 环比变化 */
  trend?: {
    /** 变化值 */
    value: number;
    /** 变化类型 */
    type: 'up' | 'down';
  };
  /** 竞品平均值 */
  rivalAvg?: number | string;
  /** 竞品优秀值 */
  rivalGood?: number | string;
  /** 加载状态 */
  loading?: boolean;
}

/**
 * 数据卡片
 *
 * 用于展示数据指标，支持显示环比趋势和竞品对比。
 */
export const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  trend,
  rivalAvg,
  rivalGood,
  loading = false,
}) => {
  return (
    <Card className="data-card" loading={loading}>
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{ fontSize: 24, fontWeight: 600 }}
      />

      {trend && (
        <div className="data-card__trend">
          {trend.type === 'up' ? (
            <span style={{ color: '#cf1322' }}>
              <ArrowUpOutlined /> {trend.value}%
            </span>
          ) : (
            <span style={{ color: '#3f8600' }}>
              <ArrowDownOutlined /> {Math.abs(trend.value)}%
            </span>
          )}
          <span style={{ marginLeft: 4, color: '#666' }}>环比</span>
        </div>
      )}

      {(rivalAvg !== undefined || rivalGood !== undefined) && (
        <div className="data-card__rival">
          <Row gutter={16}>
            {rivalAvg !== undefined && (
              <Col span={12}>
                <div className="data-card__rival-item">
                  <div className="data-card__rival-label">竞品均值</div>
                  <div className="data-card__rival-value">
                    {prefix}
                    {rivalAvg}
                    {suffix}
                  </div>
                </div>
              </Col>
            )}
            {rivalGood !== undefined && (
              <Col span={12}>
                <div className="data-card__rival-item">
                  <div className="data-card__rival-label">优秀值</div>
                  <div className="data-card__rival-value">
                    {prefix}
                    {rivalGood}
                    {suffix}
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>
      )}
    </Card>
  );
};

export default DataCard;
