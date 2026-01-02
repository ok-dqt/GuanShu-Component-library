import React, { useState } from 'react';
import { ModalActionHeader } from '../index';
import type { ActionItem } from '../index';
import { Card, Space, Input, Switch, Select, message } from 'antd';
import {
  CloseOutlined,
  ClearOutlined,
  MessageOutlined,
  SettingOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const ICON_OPTIONS = [
  { label: '清除', value: 'clear', icon: <ClearOutlined /> },
  { label: '反馈', value: 'feedback', icon: <MessageOutlined /> },
  { label: '设置', value: 'setting', icon: <SettingOutlined /> },
  { label: '下载', value: 'download', icon: <DownloadOutlined /> },
  { label: '关闭', value: 'close', icon: <CloseOutlined /> },
];

const ICON_MAP: Record<string, React.ReactNode> = {
  clear: <ClearOutlined />,
  feedback: <MessageOutlined />,
  setting: <SettingOutlined />,
  download: <DownloadOutlined />,
  close: <CloseOutlined />,
};

export default () => {
  const [title, setTitle] = useState('数据分析工具');
  const [showSeparator, setShowSeparator] = useState(true);
  const [selectedActions, setSelectedActions] = useState(['clear', 'feedback', 'close']);

  const actions: ActionItem[] = selectedActions.map((actionKey) => {
    const option = ICON_OPTIONS.find((opt) => opt.value === actionKey);
    return {
      key: actionKey,
      icon: ICON_MAP[actionKey],
      text: actionKey === 'close' ? undefined : option?.label,
      onClick: () => message.info(`点击了${option?.label || '关闭'}`),
    };
  });

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>标题:</span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="输入标题"
              style={{ width: 200 }}
            />
          </Space>

          <Space wrap>
            <span>操作按钮:</span>
            <Select
              mode="multiple"
              value={selectedActions}
              onChange={setSelectedActions}
              style={{ width: 300 }}
              placeholder="选择操作按钮"
              options={ICON_OPTIONS.map((opt) => ({
                label: opt.label,
                value: opt.value,
              }))}
            />
          </Space>

          <Space wrap>
            <span>显示分隔符:</span>
            <Switch checked={showSeparator} onChange={setShowSeparator} />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <ModalActionHeader
          title={title}
          actions={actions}
          showSeparator={showSeparator}
        />
      </Card>
    </Space>
  );
};
