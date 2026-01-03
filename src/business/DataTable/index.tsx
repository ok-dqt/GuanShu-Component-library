import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { TableProps, ColumnsType } from 'antd/es/table';
import { useResize, type UseResizeOptions } from './useResize';
import './index.less';

/** 列布局模式 */
export type ColumnLayout = 'auto' | 'flex';

/** 加载模式 */
export type LoadMode = 'pagination' | 'scroll';

/** 高度模式 */
export type HeightMode = 'auto' | 'fixed';

export interface DataTableColumn<T = any> {
  /** 列标题 */
  title: string | React.ReactNode;
  /** 数据字段 */
  dataIndex: string;
  /** 列唯一标识 */
  key?: string;
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
  /** 文本溢出省略，配合 Tooltip 使用 */
  ellipsis?: boolean | { showTitle?: boolean };
  /** 子列（多层级列头） */
  children?: DataTableColumn<T>[];
  /** 自定义单元格属性 */
  onCell?: (record: T, index?: number) => React.HTMLAttributes<HTMLElement>;
  /** 自定义表头单元格属性 */
  onHeaderCell?: () => React.HTMLAttributes<HTMLElement>;
}

/** 可拖拽配置 */
export interface ResizeConfig {
  /** 是否允许拖拽宽度 @default true */
  enableWidth?: boolean;
  /** 是否允许拖拽高度 @default true */
  enableHeight?: boolean;
  /** 最小宽度（像素） @default 200 */
  minWidth?: number;
  /** 最大宽度（像素） */
  maxWidth?: number;
  /** 最小高度（像素） @default 150 */
  minHeight?: number;
  /** 最大高度（像素） */
  maxHeight?: number;
  /** 初始宽度（像素或百分比） @default '100%' */
  defaultWidth?: number | string;
  /** 初始高度（像素） @default 400 */
  defaultHeight?: number;
  /** 尺寸变化回调 */
  onResize?: (size: { width: number; height: number }) => void;
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
  /**
   * 是否启用自动列宽（columnLayout='auto' 时生效）
   * - true: 列宽按内容自动撑开（scroll.x = 'max-content'）
   * - false: 列宽受容器宽度约束
   * @default true
   */
  autoColumnWidth?: boolean;

  // ========== 可拖拽容器配置 ==========
  /**
   * 是否启用可拖拽容器
   * @default false
   */
  resizable?: boolean;
  /**
   * 可拖拽配置（resizable=true 时生效）
   */
  resizeConfig?: ResizeConfig;

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
  loading?: boolean | { spinning?: boolean; delay?: number };
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
  /** 表格尺寸 */
  size?: 'large' | 'middle' | 'small';
  /** 行类名（支持条件高亮） */
  rowClassName?: string | ((record: T, index: number) => string);
  /** 展开行配置（树形表格/详情行） */
  expandable?: TableProps<T>['expandable'];
  /** 空数据时显示的内容 */
  locale?: TableProps<T>['locale'];
  /** 表格标题 */
  title?: TableProps<T>['title'];
  /** 表格底部汇总 */
  summary?: TableProps<T>['summary'];
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
  autoColumnWidth = true,
  // 可拖拽容器
  resizable = false,
  resizeConfig,
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
  size,
  rowClassName,
  expandable,
  locale,
  title,
  summary,
}: DataTableProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // 可拖拽容器 Hook
  const resizeOptions: UseResizeOptions | null = resizable
    ? {
        defaultWidth: resizeConfig?.defaultWidth ?? '100%',
        defaultHeight:
          resizeConfig?.defaultHeight ??
          (heightMode === 'fixed' && typeof height === 'number' ? height : 400),
        minWidth: resizeConfig?.minWidth ?? 200,
        maxWidth: resizeConfig?.maxWidth,
        minHeight: resizeConfig?.minHeight ?? 150,
        maxHeight: resizeConfig?.maxHeight,
        onResize: resizeConfig?.onResize,
      }
    : null;

  const resize = useResize(resizeOptions ?? { defaultWidth: 0, defaultHeight: 0 });
  const isResizeEnabled = resizable && resize.isInitialized;

  // 递归转换列配置（支持多层级列头）
  const convertColumn = (col: DataTableColumn<T>): any => ({
    title: col.title,
    dataIndex: col.dataIndex,
    key: col.key || col.dataIndex,
    width: columnLayout === 'auto' ? col.width : undefined,
    minWidth: columnLayout === 'flex' ? col.minWidth : undefined,
    fixed: col.fixed,
    align: col.align,
    ellipsis: col.ellipsis,
    onCell: col.onCell,
    onHeaderCell: col.onHeaderCell,
    sorter: col.sorter
      ? (a: T, b: T) => {
          const aVal = (a as any)[col.dataIndex];
          const bVal = (b as any)[col.dataIndex];
          if (typeof aVal === 'number') return aVal - bVal;
          return String(aVal).localeCompare(String(bVal));
        }
      : undefined,
    render: col.render,
    children: col.children?.map(convertColumn),
  });

  const antdColumns: ColumnsType<T> = columns.map(convertColumn);

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
      // 根据 autoColumnWidth 决定列宽行为
      scroll.x = autoColumnWidth ? 'max-content' : '100%';
    }

    // 垂直滚动
    if (isResizeEnabled) {
      // 启用拖拽时，使用拖拽高度
      scroll.y = resize.height - 55; // 减去表头高度
    } else if (heightMode === 'fixed' && height) {
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
    isResizeEnabled && 'data-table__container--resizable',
    resize.isResizing && 'data-table__container--resizing',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 容器样式
  const containerStyle: React.CSSProperties = {
    ...style,
    ...(isResizeEnabled
      ? {
          width: resize.width,
          height: resize.height,
        }
      : {}),
  };

  // 渲染拖拽手柄
  const renderResizeHandles = () => {
    if (!isResizeEnabled) return null;

    const { enableWidth = true, enableHeight = true } = resizeConfig || {};

    return (
      <>
        {enableWidth && (
          <div
            className="data-table__resize-handle data-table__resize-handle--width"
            {...resize.widthHandleProps}
          />
        )}
        {enableHeight && (
          <div
            className="data-table__resize-handle data-table__resize-handle--height"
            {...resize.heightHandleProps}
          />
        )}
      </>
    );
  };

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

  // 处理 loading 状态
  const getLoadingConfig = () => {
    if (typeof loading === 'boolean') {
      return loading && !isLoadingMore;
    }
    return isLoadingMore ? false : loading;
  };

  return (
    <div
      ref={isResizeEnabled ? resize.containerRef : containerRef}
      className={containerClassName}
      style={containerStyle}
    >
      <Table<T>
        columns={antdColumns}
        dataSource={dataSource}
        rowKey={rowKey}
        pagination={loadMode === 'pagination' ? pagination : false}
        loading={getLoadingConfig()}
        onChange={onChange}
        rowSelection={rowSelection}
        scroll={getScrollConfig()}
        onScroll={loadMode === 'scroll' ? handleScroll : undefined}
        footer={loadMode === 'scroll' ? renderScrollFooter : undefined}
        bordered={bordered}
        size={size}
        rowClassName={rowClassName}
        expandable={expandable}
        locale={locale}
        title={title}
        summary={summary}
      />
      {renderResizeHandles()}
    </div>
  );
};

