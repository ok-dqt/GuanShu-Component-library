import React, { useState } from 'react';
import { ErrorPage } from '../index';
import type { ErrorStatus } from '../index';
import { Card, Space, Select, Input, message } from 'antd';

export default () => {
  const [status, setStatus] = useState<ErrorStatus>('404');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [primaryText, setPrimaryText] = useState('返回首页');
  const [secondaryText, setSecondaryText] = useState('联系客服');
  const [closeText, setCloseText] = useState('关闭');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>状态:</span>
            <Select
              value={status}
              onChange={setStatus}
              style={{ width: 150 }}
              options={[
                { label: '403 权限不足', value: '403' },
                { label: '404 未找到', value: '404' },
                { label: '500 服务器错误', value: '500' },
                { label: 'error 错误', value: 'error' },
                { label: 'warning 警告', value: 'warning' },
                { label: 'info 信息', value: 'info' },
              ]}
            />
          </Space>

          <Space wrap>
            <span>标题:</span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="留空使用默认"
              style={{ width: 200 }}
            />
          </Space>

          <Space wrap>
            <span>副标题:</span>
            <Input
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              placeholder="留空使用默认"
              style={{ width: 300 }}
            />
          </Space>

          <Space wrap>
            <span>主按钮文本:</span>
            <Input
              value={primaryText}
              onChange={(e) => setPrimaryText(e.target.value)}
              style={{ width: 150 }}
            />
          </Space>

          <Space wrap>
            <span>次按钮文本:</span>
            <Input
              value={secondaryText}
              onChange={(e) => setSecondaryText(e.target.value)}
              style={{ width: 150 }}
            />
          </Space>

          <Space wrap>
            <span>关闭按钮文本:</span>
            <Input
              value={closeText}
              onChange={(e) => setCloseText(e.target.value)}
              style={{ width: 150 }}
            />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <ErrorPage
          status={status}
          title={title || undefined}
          subTitle={subTitle || undefined}
          primaryText={primaryText}
          secondaryText={secondaryText}
          closeText={closeText}
          onPrimaryAction={() => message.info(primaryText)}
          onSecondaryAction={() => message.info(secondaryText)}
          onClose={() => message.info(closeText)}
        />
      </Card>
    </Space>
  );
};
