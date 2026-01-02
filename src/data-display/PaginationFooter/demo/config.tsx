import React, { useState } from 'react';
import { PaginationFooter } from '../index';
import { message, Card, Space, Switch } from 'antd';

export default () => {
  const [current, setCurrent] = useState(1);
  const [loadedCount, setLoadedCount] = useState(20);
  const [cachedPages, setCachedPages] = useState([1, 2]);
  const [showAutoLoad, setShowAutoLoad] = useState(true);
  const [isAutoLoading, setIsAutoLoading] = useState(false);

  const total = 100;
  const pageSize = 20;

  const handlePageChange = (page: number) => {
    setCurrent(page);
    if (!cachedPages.includes(page)) {
      setCachedPages([...cachedPages, page]);
      setLoadedCount(loadedCount + pageSize);
      message.success(`加载第 ${page} 页`);
    }
  };

  const handleLoadNextPage = () => {
    const nextPage = current + 1;
    if (nextPage <= Math.ceil(total / pageSize)) {
      handlePageChange(nextPage);
    }
  };

  const handleStartAutoLoad = (batchSize: number) => {
    message.info(`开始自动加载 ${batchSize} 页`);
    setIsAutoLoading(true);
    setTimeout(() => setIsAutoLoading(false), 3000);
  };

  const handleStopLoading = () => {
    message.warning('停止加载');
    setIsAutoLoading(false);
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>显示自动加载:</span>
            <Switch checked={showAutoLoad} onChange={setShowAutoLoad} />

            <span>自动加载中:</span>
            <Switch checked={isAutoLoading} onChange={setIsAutoLoading} />
          </Space>
        </div>

        <Card size="small">
          <div>当前页: {current}</div>
          <div>已加载: {loadedCount}/{total}条</div>
          <div>已缓存页数: {cachedPages.join(', ')}</div>
        </Card>

        <PaginationFooter
          current={current}
          pageSize={pageSize}
          total={total}
          loadedCount={loadedCount}
          cachedPages={cachedPages}
          onChange={handlePageChange}
          onLoadNextPage={handleLoadNextPage}
          onStartAutoLoad={handleStartAutoLoad}
          onStopLoading={handleStopLoading}
          showAutoLoad={showAutoLoad}
          isAutoLoading={isAutoLoading}
          autoLoadProgress={
            isAutoLoading
              ? {
                  currentPage: 2,
                  totalPages: 5,
                  percentage: 40,
                }
              : undefined
          }
        />
      </Space>
    </div>
  );
};
