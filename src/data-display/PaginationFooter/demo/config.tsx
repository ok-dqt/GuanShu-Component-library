import React, { useState } from 'react';
import { PaginationFooter } from '../index';
import { message, Card, Space, Switch, InputNumber, Divider, Button } from 'antd';

export default () => {
  const [current, setCurrent] = useState(1);
  const [loadedCount, setLoadedCount] = useState(40);
  const [cachedPages, setCachedPages] = useState([1, 2]);
  const [total, setTotal] = useState(100);
  const pageSize = 20;

  // 配置选项
  const [showAutoLoad, setShowAutoLoad] = useState(true);
  const [showBorderTop, setShowBorderTop] = useState(true);
  const [showLoadedInfo, setShowLoadedInfo] = useState(true);
  const [showTotal, setShowTotal] = useState(true);
  const [isAutoLoading, setIsAutoLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  // 进度配置
  const [progressPage, setProgressPage] = useState(2);
  const [progressTotal, setProgressTotal] = useState(5);
  const [progressPercent, setProgressPercent] = useState(40);

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
    const totalPages = Math.ceil(total / pageSize);
    if (nextPage <= totalPages) {
      handlePageChange(nextPage);
    }
  };

  const handleStartAutoLoad = (batchSize: number) => {
    message.info(`开始自动加载 ${batchSize} 页`);
    setIsAutoLoading(true);
  };

  const handleStopLoading = () => {
    message.warning('停止加载');
    setIsAutoLoading(false);
    setLoading(false);
  };

  const handleReset = () => {
    setCurrent(1);
    setLoadedCount(40);
    setCachedPages([1, 2]);
    setIsAutoLoading(false);
    setLoading(false);
  };

  const handleLoadAll = () => {
    const totalPages = Math.ceil(total / pageSize);
    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    setCachedPages(allPages);
    setLoadedCount(total);
    setCurrent(totalPages);
    message.success('已加载全部数据');
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 显示控制 */}
      <Card size="small" title="显示控制">
        <Space wrap size="large">
          <span>
            显示顶部边框:
            <Switch checked={showBorderTop} onChange={setShowBorderTop} style={{ marginLeft: 8 }} />
          </span>
          <span>
            显示已加载信息:
            <Switch checked={showLoadedInfo} onChange={setShowLoadedInfo} style={{ marginLeft: 8 }} />
          </span>
          <span>
            显示总数:
            <Switch checked={showTotal} onChange={setShowTotal} style={{ marginLeft: 8 }} />
          </span>
          <span>
            显示自动加载:
            <Switch checked={showAutoLoad} onChange={setShowAutoLoad} style={{ marginLeft: 8 }} />
          </span>
        </Space>
      </Card>

      {/* 状态控制 */}
      <Card size="small" title="状态控制">
        <Space wrap size="large">
          <span>
            加载中:
            <Switch checked={loading} onChange={setLoading} style={{ marginLeft: 8 }} />
          </span>
          <span>
            自动加载中:
            <Switch checked={isAutoLoading} onChange={setIsAutoLoading} style={{ marginLeft: 8 }} />
          </span>
        </Space>

        <Divider style={{ margin: '12px 0' }} />

        <Space wrap>
          <Button size="small" onClick={handleReset}>重置状态</Button>
          <Button size="small" onClick={handleLoadAll}>加载全部</Button>
          <Button size="small" onClick={() => setCurrent(Math.ceil(total / pageSize))}>
            跳到最后一页
          </Button>
        </Space>
      </Card>

      {/* 进度配置（加载中时可调整） */}
      {(isAutoLoading || loading) && (
        <Card size="small" title="进度配置">
          <Space wrap size="large">
            <span>
              当前页:
              <InputNumber
                value={progressPage}
                onChange={(val) => setProgressPage(val || 1)}
                min={1}
                max={progressTotal}
                size="small"
                style={{ width: 60, marginLeft: 8 }}
              />
            </span>
            <span>
              总页数:
              <InputNumber
                value={progressTotal}
                onChange={(val) => setProgressTotal(val || 1)}
                min={1}
                size="small"
                style={{ width: 60, marginLeft: 8 }}
              />
            </span>
            <span>
              百分比:
              <InputNumber
                value={progressPercent}
                onChange={(val) => setProgressPercent(val || 0)}
                min={0}
                max={100}
                size="small"
                style={{ width: 60, marginLeft: 8 }}
              />%
            </span>
          </Space>
        </Card>
      )}

      {/* 数据配置 */}
      <Card size="small" title="数据配置">
        <Space wrap size="large">
          <span>
            当前页:
            <InputNumber
              value={current}
              onChange={(val) => setCurrent(val || 1)}
              min={1}
              max={Math.ceil(total / pageSize)}
              size="small"
              style={{ width: 60, marginLeft: 8 }}
            />
          </span>
          <span>
            总数据量:
            <InputNumber
              value={total}
              onChange={(val) => setTotal(val || 100)}
              min={1}
              step={20}
              size="small"
              style={{ width: 80, marginLeft: 8 }}
            />
          </span>
          <span>
            已加载:
            <InputNumber
              value={loadedCount}
              onChange={(val) => setLoadedCount(val || 0)}
              min={0}
              max={total}
              size="small"
              style={{ width: 80, marginLeft: 8 }}
            />
          </span>
        </Space>
        <div style={{ marginTop: 8, color: '#666' }}>
          已缓存页码: {cachedPages.join(', ') || '无'}
        </div>
      </Card>

      {/* 组件预览 */}
      <Card size="small" title="组件预览">
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
          showBorderTop={showBorderTop}
          showLoadedInfo={showLoadedInfo}
          showTotal={showTotal ? (total) => `共 ${total} 条` : false}
          loading={loading}
          isAutoLoading={isAutoLoading}
          loadingProgress={
            loading
              ? {
                  currentPage: progressPage,
                  totalPages: progressTotal,
                  percentage: progressPercent,
                }
              : undefined
          }
          autoLoadProgress={
            isAutoLoading
              ? {
                  currentPage: progressPage,
                  totalPages: progressTotal,
                  percentage: progressPercent,
                }
              : undefined
          }
        />
      </Card>
    </Space>
  );
};
