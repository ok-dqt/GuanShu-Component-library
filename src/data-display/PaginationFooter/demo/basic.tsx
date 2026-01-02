import React, { useState } from 'react';
import { PaginationFooter } from '../index';
import { message, Card, Space, Typography } from 'antd';

const { Text } = Typography;

export default () => {
  // 示例1: 正常状态
  const [current1, setCurrent1] = useState(1);
  const [loadedCount1, setLoadedCount1] = useState(40);
  const [cachedPages1, setCachedPages1] = useState([1, 2]);

  // 示例2: 加载中状态
  const [current2, setCurrent2] = useState(3);

  // 示例3: 全部加载完成
  const [current3, setCurrent3] = useState(5);

  // 示例4: 最小化显示
  const [current4, setCurrent4] = useState(1);

  const total = 100;
  const pageSize = 20;

  const handlePageChange1 = (page: number) => {
    setCurrent1(page);
    if (!cachedPages1.includes(page)) {
      setCachedPages1([...cachedPages1, page]);
      setLoadedCount1(loadedCount1 + pageSize);
      message.success(`加载第 ${page} 页`);
    }
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 正常状态 */}
      <Card size="small" title="正常状态">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          显示已加载信息、自动加载控制、分页器，未加载页码带红点标记
        </Text>
        <PaginationFooter
          current={current1}
          pageSize={pageSize}
          total={total}
          loadedCount={loadedCount1}
          cachedPages={cachedPages1}
          onChange={handlePageChange1}
          onLoadNextPage={() => handlePageChange1(current1 + 1)}
          onStartAutoLoad={(batchSize) => message.info(`自动加载 ${batchSize} 页`)}
        />
      </Card>

      {/* 加载中状态 */}
      <Card size="small" title="加载中状态">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          自动加载进行中，显示进度条和停止按钮
        </Text>
        <PaginationFooter
          current={current2}
          pageSize={pageSize}
          total={total}
          loadedCount={60}
          cachedPages={[1, 2, 3]}
          onChange={setCurrent2}
          onLoadNextPage={() => {}}
          onStartAutoLoad={() => {}}
          onStopLoading={() => message.warning('停止加载')}
          isAutoLoading={true}
          autoLoadProgress={{
            currentPage: 2,
            totalPages: 5,
            percentage: 40,
          }}
        />
      </Card>

      {/* 全部加载完成 */}
      <Card size="small" title="全部加载完成（最后一页）">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          数据全部加载完成且在最后一页时，自动隐藏加载控制
        </Text>
        <PaginationFooter
          current={current3}
          pageSize={pageSize}
          total={total}
          loadedCount={100}
          cachedPages={[1, 2, 3, 4, 5]}
          onChange={setCurrent3}
          onLoadNextPage={() => {}}
          onStartAutoLoad={() => {}}
        />
      </Card>

      {/* 最小化显示 */}
      <Card size="small" title="最小化显示">
        <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
          隐藏顶部边框、已加载信息、总数显示、自动加载控制
        </Text>
        <PaginationFooter
          current={current4}
          pageSize={pageSize}
          total={total}
          loadedCount={20}
          cachedPages={[1]}
          onChange={setCurrent4}
          showBorderTop={false}
          showLoadedInfo={false}
          showTotal={false}
          showAutoLoad={false}
        />
      </Card>
    </Space>
  );
};
