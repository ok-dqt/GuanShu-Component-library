import React from 'react';
import { ModalActionHeader } from '../index';
import { Card, Space, message } from 'antd';
import { CloseOutlined, ClearOutlined, MessageOutlined } from '@ant-design/icons';

export default () => {
  const handleClearCache = () => {
    message.info('清除缓存');
  };

  const handleFeedback = () => {
    message.info('反馈');
  };

  const handleClose = () => {
    message.info('关闭');
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="带Logo和操作按钮">
        <ModalActionHeader
          title="问大家分析"
          actions={[
            {
              key: 'clear',
              icon: <ClearOutlined />,
              text: '清除缓存',
              onClick: handleClearCache,
            },
            {
              key: 'feedback',
              icon: <MessageOutlined />,
              text: '反馈',
              onClick: handleFeedback,
            },
            {
              key: 'close',
              icon: <CloseOutlined />,
              onClick: handleClose,
            },
          ]}
        />
      </Card>

      <Card size="small" title="仅标题和关闭按钮">
        <ModalActionHeader
          title="数据分析"
          actions={[
            {
              key: 'close',
              icon: <CloseOutlined />,
              onClick: handleClose,
            },
          ]}
        />
      </Card>

      <Card size="small" title="仅标题（无操作按钮）">
        <ModalActionHeader title="查看详情" />
      </Card>
    </Space>
  );
};
