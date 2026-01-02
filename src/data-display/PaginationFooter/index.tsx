import React from 'react';
import { Pagination } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { AutoLoadControl } from '../../feedback/AutoLoadControl';
import type { LoadingProgress } from '../../feedback/AutoLoadControl';
import { designTokens } from '../../theme';
import './index.less';

export interface PaginationFooterProps {
  /** 当前页码 */
  current: number;
  /** 每页条数 */
  pageSize: number;
  /** 数据总数 */
  total: number;
  /** 已加载数据条数 */
  loadedCount: number;
  /** 已缓存的页码数组 */
  cachedPages?: number[];
  /** 是否显示总数，传入函数可自定义格式，传入 false 则不显示 */
  showTotal?: ((total: number) => React.ReactNode) | false;
  /** 页码改变回调 */
  onChange: (page: number) => void;
  /** 是否加载中 */
  loading?: boolean;
  /** 加载进度 */
  loadingProgress?: LoadingProgress;
  /** 停止加载回调 */
  onStopLoading?: () => void;
  /** 是否自动加载中 */
  isAutoLoading?: boolean;
  /** 自动加载进度 */
  autoLoadProgress?: LoadingProgress;
  /** 加载下一页回调 */
  onLoadNextPage?: () => void;
  /** 开始自动加载回调 */
  onStartAutoLoad?: (batchSize: number) => void;
  /** 是否显示自动加载控制 */
  showAutoLoad?: boolean;
  /** 是否显示顶部边框 */
  showBorderTop?: boolean;
  /** 是否显示已加载信息 */
  showLoadedInfo?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export const PaginationFooter: React.FC<PaginationFooterProps> = ({
  current,
  pageSize,
  total,
  loadedCount,
  cachedPages = [],
  onChange,
  loading = false,
  loadingProgress,
  onStopLoading,
  isAutoLoading = false,
  autoLoadProgress,
  onLoadNextPage,
  onStartAutoLoad,
  showTotal = (total) => `共 ${total} 条`,
  showAutoLoad = true,
  showBorderTop = true,
  showLoadedInfo = true,
  style,
}) => {
  const [batchSize, setBatchSize] = React.useState(5);

  const totalPages = Math.ceil(total / pageSize);
  const shouldHideAutoLoad = !showAutoLoad || (loadedCount >= total && current === totalPages);
  const isLastPage = current === totalPages;

  const itemRender = (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ) => {
    if (type === 'page') {
      const isLoaded = cachedPages.includes(page);
      if (!isLoaded) {
        return (
          <div className="pagination-footer__unloaded-page">
            {page}
            <span className="pagination-footer__unloaded-dot" />
          </div>
        );
      }
    }
    return originalElement;
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    borderTop: showBorderTop ? undefined : 'none',
  };

  return (
    <div className="pagination-footer__container" style={containerStyle}>
      <div className="pagination-footer__left">
        {showLoadedInfo && (
          <span className="pagination-footer__info">
            <InfoCircleOutlined style={{ color: designTokens.colors.primary, fontSize: 14 }} />
            已加载: {loadedCount}/{total}条数据
          </span>
        )}

        {!shouldHideAutoLoad && onLoadNextPage && onStartAutoLoad && (
          <AutoLoadControl
            isLoading={isAutoLoading || loading}
            batchSize={batchSize}
            loadingProgress={isAutoLoading && autoLoadProgress ? autoLoadProgress : loadingProgress}
            disabled={false}
            disableNextPage={isLastPage}
            onBatchSizeChange={setBatchSize}
            onLoadNextPage={onLoadNextPage}
            onStartAutoLoad={() => onStartAutoLoad(batchSize)}
            onStopLoad={() => onStopLoading?.()}
          />
        )}
      </div>

      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
        showQuickJumper={false}
        showTotal={!!showTotal ? showTotal : undefined}
        itemRender={itemRender}
      />
    </div>
  );
};
