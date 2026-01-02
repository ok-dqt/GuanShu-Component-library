import React, { useState } from 'react';
import { ExpandButton } from '../index';
import { Card, Space } from 'antd';

export default () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="示例1：卡片列表">
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 1</div>
            <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 2</div>
            <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 3</div>
          </div>

          {expanded1 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
              <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 4</div>
              <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 5</div>
              <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>卡片 6</div>
            </div>
          )}

          <ExpandButton
            isExpanded={expanded1}
            onToggle={() => setExpanded1(!expanded1)}
          />
        </div>
      </Card>

      <Card size="small" title="示例2：列表项">
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 4 }}>项目 1</div>
            <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 4 }}>项目 2</div>
            <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 4 }}>项目 3</div>
          </div>

          {expanded2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 4 }}>项目 4</div>
              <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 4 }}>项目 5</div>
            </div>
          )}

          <ExpandButton
            isExpanded={expanded2}
            onToggle={() => setExpanded2(!expanded2)}
          />
        </div>
      </Card>
    </Space>
  );
};
