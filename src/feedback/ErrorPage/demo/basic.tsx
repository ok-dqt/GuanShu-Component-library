import React from 'react';
import { ErrorPage } from '../index';
import { Card, Space, message } from 'antd';

export default () => {
  const handlePrimaryAction = () => {
    message.info('返回首页');
  };

  const handleSecondaryAction = () => {
    message.info('联系客服');
  };

  const handleClose = () => {
    message.info('关闭');
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="404 - 页面不存在">
        <ErrorPage
          status="404"
          onPrimaryAction={handlePrimaryAction}
          onClose={handleClose}
        />
      </Card>

      <Card size="small" title="403 - 权限不足">
        <ErrorPage
          status="403"
          title="功能权限不足"
          subTitle="您当前暂无权限使用此功能，请联系管理员或升级您的账户权限。"
          onPrimaryAction={handlePrimaryAction}
          onSecondaryAction={handleSecondaryAction}
          onClose={handleClose}
          primaryText="升级权限"
        />
      </Card>

      <Card size="small" title="500 - 服务器错误">
        <ErrorPage
          status="500"
          onPrimaryAction={handlePrimaryAction}
          primaryText="刷新页面"
        />
      </Card>
    </Space>
  );
};
