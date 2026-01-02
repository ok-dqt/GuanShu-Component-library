import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { TableProps, ColumnsType } from 'antd/es/table';
import './index.less';

/** 列布局模式 */
export type ColumnLayout = 'auto' | 'flex';

/** 加载模式 */
export type LoadMode = 'pagination' | 'scroll';

/** 高度模式 */
export type HeightMode = 'auto' | 'fixed';

export interface DataTableColumn<T = any> {
  /** 列标题 */
  title: string;
  /** 数据字段 */
  dataIndex: string;
  /** 列宽（columnLayout 为 'auto' 时生效） */
  width?: number;
  /** 最小列宽（columnLayout 为 'flex' 时生效） */
  minWidth?: number;
  /** 是否可排序 */
  sorter?: boolean;
  /** 自定义渲染 */
  render?: (text: any, record: T, index: number) => React.ReactNode;
  /** 固定列 */
  fixed?: 'left' | 'right';
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T = any> {
  /** 列配置 */
  columns: DataTableColumn<T>[];
  /** 数据源 */
  dataSource: T[];
  /** 行的唯一标识字段，默认 'key' */
  rowKey?: string | ((record: T) => string);

  // ========== 列布局配置 ==========
  /** 列布局模式：'auto' 按 width 配置 | 'flex' 平均分布 */
  columnLayout?: ColumnLayout;

  // ========== 加载模式配置 ==========
  /** 加载模式：'pagination' 分页加载 | 'scroll' 无限滚动 */
  loadMode?: LoadMode;
  /** 分页配置（loadMode 为 'pagination' 时生效） */
  pagination?: false | TableProps<T>['pagination'];
  /** 是否还有更多数据（loadMode 为 'scroll' 时生效） */
  hasMore?: boolean;
  /** 加载更多回调（loadMode 为 'scroll' 时生效） */
  onLoadMore?: () => void;
  /** 滚动加载阈值，距离底部多少像素时触发加载，默认 100 */
  scrollThreshold?: number;

  // ========== 高度配置 ==========
  /** 高度模式：'auto' 自适应容器 | 'fixed' 固定高度 */
  heightMode?: HeightMode;
  /** 固定高度值（heightMode 为 'fixed' 时生效） */
  height?: number | string;

  // ========== 其他配置 ==========
  /** 加载状态 */
  loading?: boolean;
  /** 表格变化回调 */
  onChange?: TableProps<T>['onChange'];
  /** 行选择配置 */
  rowSelection?: TableProps<T>['rowSelection'];
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 水平滚动宽度 */
  scrollX?: number | string | true;
  /** 是否显示边框 */
  bordered?: boolean;
}

/**
 * 数据表格
 *
 * 通用的数据表格组件，支持排序、分页/无限滚动、自适应高度等功能。
 */
export const DataTable = <T extends object = any>({
  columns,
  dataSource,
  rowKey = 'key',
  // 列布局
  columnLayout = 'auto',
  // 加载模式
  loadMode = 'pagination',
  pagination = {
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`,
  },
  hasMore = false,
  onLoadMore,
  scrollThreshold = 100,
  // 高度配置
  heightMode = 'fixed',
  height,
  // 其他
  loading = false,
  onChange,
  rowSelection,
  style,
  className,
  scrollX,
  bordered = false,
}: DataTableProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // 转换列配置
  const antdColumns: ColumnsType<T> = columns.map((col) => ({
    title: col.title,
    dataIndex: col.dataIndex,
    width: columnLayout === 'auto' ? col.width : undefined,
    minWidth: columnLayout === 'flex' ? col.minWidth : undefined,
    fixed: col.fixed,
    align: col.align,
    sorter: col.sorter
      ? (a: T, b: T) => {
          const aVal = (a as any)[col.dataIndex];
          const bVal = (b as any)[col.dataIndex];
          if (typeof aVal === 'number') return aVal - bVal;
          return String(aVal).localeCompare(String(bVal));
        }
      : undefined,
    render: col.render,
  }));

  // 无限滚动处理
  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      if (loadMode !== 'scroll' || !hasMore || loading || isLoadingMore) return;

      const target = e.target as HTMLDivElement;
      const { scrollTop, scrollHeight, clientHeight } = target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceToBottom <= scrollThreshold) {
        setIsLoadingMore(true);
        onLoadMore?.();
      }
    },
    [loadMode, hasMore, loading, isLoadingMore, scrollThreshold, onLoadMore]
  );

  // 重置加载状态
  useEffect(() => {
    if (!loading) {
      setIsLoadingMore(false);
    }
  }, [loading]);

  // 计算滚动配置
  const getScrollConfig = () => {
    const scroll: TableProps<T>['scroll'] = {};

    // 水平滚动
    if (scrollX !== undefined) {
      scroll.x = scrollX;
    } else if (columnLayout === 'auto') {
      scroll.x = 'max-content';
    }

    // 垂直滚动
    if (heightMode === 'fixed' && height) {
      scroll.y = height;
    } else if (heightMode === 'auto') {
      scroll.y = '100%';
    }

    return Object.keys(scroll).length > 0 ? scroll : undefined;
  };

  // 容器类名
  const containerClassName = [
    'data-table__container',
    heightMode === 'auto' && 'data-table__container--height-auto',
    heightMode === 'fixed' && 'data-table__container--height-fixed',
    columnLayout === 'flex' && 'data-table--column-flex',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 渲染滚动加载底部
  const renderScrollFooter = () => {
    if (loadMode !== 'scroll') return null;

    if (loading || isLoadingMore) {
      return (
        <div className="data-table__scroll-loader">
          <Spin indicator={<LoadingOutlined spin />} size="small" />
          <span>加载中...</span>
        </div>
      );
    }

    if (!hasMore) {
      return <div className="data-table__scroll-end">已加载全部数据</div>;
    }

    return null;
  };

  return (
    <div ref={containerRef} className={containerClassName} style={style}>
      <Table<T>
        columns={antdColumns}
        dataSource={dataSource}
        rowKey={rowKey}
        pagination={loadMode === 'pagination' ? pagination : false}
        loading={loading && !isLoadingMore}
        onChange={onChange}
        rowSelection={rowSelection}
        scroll={getScrollConfig()}
        onScroll={loadMode === 'scroll' ? handleScroll : undefined}
        footer={loadMode === 'scroll' ? renderScrollFooter : undefined}
        bordered={bordered}
      />
    </div>
  );
};

export default DataTable;
