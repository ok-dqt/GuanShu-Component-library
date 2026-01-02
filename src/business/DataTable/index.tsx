import React from 'react';
import { Table } from 'antd';
import type { TableProps, ColumnsType } from 'antd/es/table';

export interface DataTableColumn {
  /** 列标题 */
  title: string;
  /** 数据字段 */
  dataIndex: string;
  /** 列宽 */
  width?: number;
  /** 是否可排序 */
  sorter?: boolean;
  /** 自定义渲染 */
  render?: (text: any, record: any) => React.ReactNode;
}

export interface DataTableProps {
  /** 列配置 */
  columns: DataTableColumn[];
  /** 数据源 */
  dataSource: any[];
  /** 是否显示分页 */
  pagination?: false | TableProps<any>['pagination'];
  /** 加载状态 */
  loading?: boolean;
  /** 表格变化回调 */
  onChange?: TableProps<any>['onChange'];
  /** 行选择配置 */
  rowSelection?: TableProps<any>['rowSelection'];
}

/**
 * 数据表格
 *
 * 通用的数据表格组件，支持排序、分页、筛选等功能。
 */
export const DataTable: React.FC<DataTableProps> = ({
  columns,
  dataSource,
  pagination = {
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`,
  },
  loading = false,
  onChange,
  rowSelection,
}) => {
  const antdColumns: ColumnsType<any> = columns.map((col) => ({
    title: col.title,
    dataIndex: col.dataIndex,
    width: col.width,
    sorter: col.sorter
      ? (a: any, b: any) => {
          const aVal = a[col.dataIndex];
          const bVal = b[col.dataIndex];
          if (typeof aVal === 'number') return aVal - bVal;
          return String(aVal).localeCompare(String(bVal));
        }
      : undefined,
    render: col.render,
  }));

  return (
    <Table
      columns={antdColumns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
      onChange={onChange}
      rowSelection={rowSelection}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default DataTable;
