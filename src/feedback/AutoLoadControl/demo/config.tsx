import React, { useState } from 'react';
import { AutoLoadControl } from '../index';
import { message, Space, Switch, InputNumber, Card } from 'antd';

export default () => {
  const [batchSize, setBatchSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disableNextPage, setDisableNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(10);

  const handleLoadNextPage = () => {
    message.success('加载下一页');
  };

  const handleStartAutoLoad = () => {
    message.info(`开始自动加载 ${batchSize} 页`);
    setIsLoading(true);
  };

  const handleStopLoad = () => {
    message.warning('停止加载');
    setIsLoading(false);
  };

  const percentage = Math.round((currentPage / totalPages) * 100);

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>加载状态:</span>
            <Switch checked={isLoading} onChange={setIsLoading} />

            <span>禁用:</span>
            <Switch checked={disabled} onChange={setDisabled} />

            <span>禁用下一页:</span>
            <Switch checked={disableNextPage} onChange={setDisableNextPage} />
          </Space>
        </div>

        {isLoading && (
          <div>
            <Space wrap>
              <span>当前页:</span>
              <InputNumber value={currentPage} onChange={(val) => setCurrentPage(val || 1)} min={1} max={totalPages} />

              <span>总页数:</span>
              <InputNumber value={totalPages} onChange={(val) => setTotalPages(val || 1)} min={1} />
            </Space>
          </div>
        )}

        <AutoLoadControl
          isLoading={isLoading}
          batchSize={batchSize}
          loadingProgress={
            isLoading
              ? {
                  currentPage,
                  totalPages,
                  percentage,
                }
              : undefined
          }
          disabled={disabled}
          disableNextPage={disableNextPage}
          onBatchSizeChange={setBatchSize}
          onLoadNextPage={handleLoadNextPage}
          onStartAutoLoad={handleStartAutoLoad}
          onStopLoad={handleStopLoad}
        />

        <Card size="small">
          <div>批量加载页数: {batchSize}</div>
          <div>加载状态: {isLoading ? '加载中' : '空闲'}</div>
          {isLoading && <div>进度: {percentage}%</div>}
        </Card>
      </Space>
    </div>
  );
};
