import React, { useState } from 'react';
import { AutoLoadControl } from '../index';
import { message, Space, Card } from 'antd';

export default () => {
  const [batchSize, setBatchSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadNextPage = () => {
    message.success('加载下一页');
  };

  const handleStartAutoLoad = () => {
    message.info(`开始自动加载 ${batchSize} 页`);
    setIsLoading(true);
    // 模拟加载
    setTimeout(() => setIsLoading(false), 3000);
  };

  const handleStopLoad = () => {
    message.warning('停止加载');
    setIsLoading(false);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <AutoLoadControl
        isLoading={isLoading}
        batchSize={batchSize}
        loadingProgress={
          isLoading
            ? {
                currentPage: 3,
                totalPages: 10,
                percentage: 30,
              }
            : undefined
        }
        onBatchSizeChange={setBatchSize}
        onLoadNextPage={handleLoadNextPage}
        onStartAutoLoad={handleStartAutoLoad}
        onStopLoad={handleStopLoad}
      />

      <Card size="small">
        <div>批量加载页数: {batchSize}</div>
        <div>加载状态: {isLoading ? '加载中' : '空闲'}</div>
      </Card>
    </Space>
  );
};
