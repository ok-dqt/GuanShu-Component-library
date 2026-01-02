import React, { useState } from 'react';
import { PaginationFooter } from '../index';
import { message, Card } from 'antd';

export default () => {
  const [current, setCurrent] = useState(1);
  const [loadedCount, setLoadedCount] = useState(20);
  const [cachedPages, setCachedPages] = useState([1, 2]);

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
  };

  return (
    <div>
      <Card size="small" style={{ marginBottom: 16 }}>
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
      />
    </div>
  );
};
