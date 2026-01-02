/**
 * @module OverviewItem
 * @description 概览数据卡片组件，支持多种对比模式
 */

import React from 'react';
import { Card } from 'antd';
import { formatChangeRate, getRateClassName } from './utils';
import './index.less';

export interface OverviewItemProps {
  /** 标题 */
  title: string;
  /** 当前值 */
  value: string | number;
  // 实时维度专用
  /** 昨日同时段值 */
  yesterdaySameTimeValue?: string | number;
  /** 昨日全天值 */
  yesterdayValue?: string | number;
  /** 较昨日同时段变化率 */
  compareRate?: number;
  // 日/周/月维度专用
  /** 同行同层平均 */
  rivalAvgValue?: string | number;
  /** 同行同层优秀 */
  rivalGoodValue?: string | number;
  /** 较前1日/周/月变化率 */
  periodCompareRate?: number;
  /** 周期标签，如"较前1日" */
  periodLabel?: string;
  // 自定义维度专用
  /** 对比周期值 */
  customCompareValue?: string | number;
  /** 对比变化率 */
  customCompareRate?: number;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 概览数据卡片组件
 * 支持实时/日/周/月/自定义多种展示模式
 */
export const OverviewItem: React.FC<OverviewItemProps> = ({
  title,
  value,
  yesterdaySameTimeValue,
  yesterdayValue,
  compareRate,
  rivalAvgValue,
  rivalGoodValue,
  periodCompareRate,
  periodLabel,
  customCompareValue,
  customCompareRate,
  style,
}) => {
  const hasRealtimeCompare =
    yesterdaySameTimeValue !== undefined ||
    yesterdayValue !== undefined ||
    compareRate !== undefined;
  const hasPeriodCompare =
    rivalAvgValue !== undefined ||
    rivalGoodValue !== undefined ||
    periodCompareRate !== undefined;
  const hasCustomCompare =
    customCompareValue !== undefined || customCompareRate !== undefined;

  return (
    <Card
      size="small"
      className="overview-item"
      hoverable
      style={style}
    >
      <div className="overview-item__content">
        <span className="overview-item__title">{title}</span>
        <div className="overview-item__value">{value}</div>

        {/* 实时维度：较昨日同时段 + 昨日全天 */}
        {hasRealtimeCompare && (
          <div className="overview-item__compare">
            {compareRate !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">
                  较昨日同时段
                </span>
                <span
                  className={`overview-item__compare-rate ${getRateClassName(compareRate)}`}
                >
                  {formatChangeRate(compareRate).text}{' '}
                  {formatChangeRate(compareRate).arrow}
                </span>
              </div>
            )}
            {yesterdaySameTimeValue !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">
                  昨日同时段
                </span>
                <span className="overview-item__compare-value">
                  {yesterdaySameTimeValue}
                </span>
              </div>
            )}
            {yesterdayValue !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">昨日全天</span>
                <span className="overview-item__compare-value">
                  {yesterdayValue}
                </span>
              </div>
            )}
          </div>
        )}

        {/* 日/周/月维度：同行同层平均 + 同行同层优秀 + 较前N期 */}
        {hasPeriodCompare && (
          <div className="overview-item__compare">
            {rivalAvgValue !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">
                  同行同层平均
                </span>
                <span className="overview-item__compare-value">
                  {rivalAvgValue}
                </span>
              </div>
            )}
            {rivalGoodValue !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">
                  同行同层优秀
                </span>
                <span className="overview-item__compare-value">
                  {rivalGoodValue}
                </span>
              </div>
            )}
            {periodCompareRate !== undefined && periodLabel && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">
                  {periodLabel}
                </span>
                <span
                  className={`overview-item__compare-rate ${getRateClassName(periodCompareRate)}`}
                >
                  {formatChangeRate(periodCompareRate).text}{' '}
                  {formatChangeRate(periodCompareRate).arrow}
                </span>
              </div>
            )}
          </div>
        )}

        {/* 自定义维度：对比周期值 + 变化率 */}
        {hasCustomCompare && (
          <div className="overview-item__compare">
            {customCompareValue !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">对比周期</span>
                <span className="overview-item__compare-value">
                  {customCompareValue}
                </span>
              </div>
            )}
            {customCompareRate !== undefined && (
              <div className="overview-item__compare-row">
                <span className="overview-item__compare-label">变化</span>
                <span
                  className={`overview-item__compare-rate ${getRateClassName(customCompareRate)}`}
                >
                  {formatChangeRate(customCompareRate).text}{' '}
                  {formatChangeRate(customCompareRate).arrow}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default OverviewItem;
