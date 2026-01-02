import React from 'react';
import { Pagination } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { AutoLoadControl } from '../../feedback/AutoLoadControl';
import type { LoadingProgress } from '../../feedback/AutoLoadControl';
import './index.less';

export interface PaginationFooterProps {
  current: number;
  pageSize: number;
  total: number;
  loadedCount: number;
  cachedPages?: number[];
  showTotal?: ((total: number) => React.ReactNode) | false;
  onChange: (page: number) => void;
  loading?: boolean;
  loadingProgress?: LoadingProgress;
  onStopLoading?: () => void;
  isAutoLoading?: boolean;
  autoLoadProgress?: LoadingProgress;
  onLoadNextPage?: () => void;
  onStartAutoLoad?: (batchSize: number) => void;
  showAutoLoad?: boolean;
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
          <div className="pagination-footer-unloaded-page">
            {page}
            <span className="pagination-footer-unloaded-dot" />
          </div>
        );
      }
    }
    return originalElement;
  };

  return (
    <div className="pagination-footer" style={style}>
      <div className="pagination-footer-left">
        <span className="pagination-footer-info">
          <InfoCircleOutlined style={{ color: '#2563eb', fontSize: 14, marginRight: 4 }} />
          已加载: {loadedCount}/{total}条数据
        </span>

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
