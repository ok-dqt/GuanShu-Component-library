import React from 'react';
import { LoadingProgress } from '../index';
import { Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <LoadingProgress percent={30} status="loading" />
      <LoadingProgress percent={100} status="completed" />
      <LoadingProgress percent={50} status="error" />
    </Space>
  );
};
