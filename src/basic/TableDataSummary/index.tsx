/**
 * 表格数据摘要组件
 * 用于显示时间范围和数据条数
 */

import React from 'react';
import './index.less';

export interface TableDataSummaryProps {
  /** 时间范围文本 */
  dateRange?: string;
  /** 数据条数 */
  count: number;
}

/**
 * 表格数据摘要
 *
 * 显示时间范围和数据条数。
 */
export const TableDataSummary: React.FC<TableDataSummaryProps> = ({
  dateRange,
  count,
}) => {
  return (
    <div className="table-data-summary">
      {dateRange && (
        <>
          <span className="table-data-summary__date-range">
            时间范围：{dateRange}
          </span>
          <span className="table-data-summary__divider" />
        </>
      )}
      <span className="table-data-summary__count-text">
        当前表格中共有{' '}
        <span className="table-data-summary__count-number">{count}</span> 条数据
      </span>
    </div>
  );
};

