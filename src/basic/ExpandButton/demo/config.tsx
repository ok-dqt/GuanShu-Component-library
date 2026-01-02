import React, { useState } from 'react';
import { ExpandButton } from '../index';
import { Card, Space, Input } from 'antd';

export default () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedText, setExpandedText] = useState('收起');
  const [collapsedText, setCollapsedText] = useState('展开更多');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>展开时文本:</span>
            <Input
              value={expandedText}
              onChange={(e) => setExpandedText(e.target.value)}
              style={{ width: 200 }}
            />
          </Space>

          <Space wrap>
            <span>收起时文本:</span>
            <Input
              value={collapsedText}
              onChange={(e) => setCollapsedText(e.target.value)}
              style={{ width: 200 }}
            />
          </Space>
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <div>
          <div>当前状态: {expanded ? '已展开' : '已收起'}</div>

          <ExpandButton
            isExpanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            expandedText={expandedText}
            collapsedText={collapsedText}
          />

          {expanded && (
            <div style={{
              marginTop: 16,
              padding: 16,
              background: '#f5f5f5',
              borderRadius: 8,
            }}>
              这里是展开后显示的内容
            </div>
          )}
        </div>
      </Card>
    </Space>
  );
};
