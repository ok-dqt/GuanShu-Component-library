import React from 'react';
import { StatusTag } from '../index';
import { Space } from 'antd';

export default () => {
  return (
    <Space wrap>
      <StatusTag status="success" />
      <StatusTag status="processing" />
      <StatusTag status="error" />
      <StatusTag status="warning" />
      <StatusTag status="default" />
      <StatusTag status="loading" />
      <StatusTag status="success" text="已完成" />
      <StatusTag status="error" text="已取消" />
    </Space>
  );
};
