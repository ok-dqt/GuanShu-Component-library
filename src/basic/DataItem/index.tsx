import React from 'react';
import './index.less';

/**
 * 格式化百分比
 */
const formatPercent = (num: string | number) => {
  if (typeof num === 'string' && num.includes('%')) {
    return num.trim();
  }
  const res = `${(+num * 100).toFixed(2)}%`.trim();
  // 如果是整数，去除小数部分
  if (res.endsWith('.00%')) {
    return res.slice(0, -4) + '%';
  }
  return res;
};

export interface DataItemProps {
  /** 数据值 */
  value: string | number;
  /** 环比变化（-100~100，如 0.1 表示 +10%） */
  cycleCrc?: string | number;
  /** 是否为百分比 */
  isPercent?: boolean;
}

/**
 * 数据项
 *
 * 用于展示单个数据指标，支持显示环比变化。
 */
export const DataItem: React.FC<DataItemProps> = (props) => {
  const { cycleCrc } = props;
  const cycle = cycleCrc ? formatPercent(cycleCrc) : undefined;
  let value = props.value;
  if (!value && value !== 0) {
    value = '-';
  } else {
    value =
      value.toString().includes('~') || !props.isPercent
        ? props.value
        : formatPercent(props.value);
  }
  const isPositive = !cycle?.includes('-');
  return (
    <div className="data-item">
      <div>{value}</div>
      {cycle !== undefined && (
        <div
          style={{
            marginLeft: 8,
            color: isPositive ? 'red' : 'green',
          }}
        >
          {isPositive ? '↑' : '↓'}
          {cycle}
        </div>
      )}
    </div>
  );
};

export default DataItem;
