import React, { useState } from 'react';
import { DataCard } from '../index';
import { Row, Col, Space, Switch, Card } from 'antd';

export default () => {
  const [showTrend, setShowTrend] = useState(true);
  const [showRival, setShowRival] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Card
        title="数据卡片配置"
        size="small"
        style={{ marginBottom: 16 }}
        bodyStyle={{ padding: '12px 16px' }}
      >
        <Space size="large">
          <Space>
            <span>显示环比趋势：</span>
            <Switch checked={showTrend} onChange={setShowTrend} />
          </Space>

          <Space>
            <span>显示竞品对比：</span>
            <Switch checked={showRival} onChange={setShowRival} />
          </Space>

          <Space>
            <span>加载状态：</span>
            <Switch
              checked={loading}
              onChange={(checked) => {
                setLoading(checked);
                if (checked) {
                  setTimeout(() => setLoading(false), 2000);
                }
              }}
            />
          </Space>
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <DataCard
            title="访客数（UV）"
            value={12345}
            trend={showTrend ? { value: 15.2, type: 'up' } : undefined}
            rivalAvg={showRival ? 10200 : undefined}
            rivalGood={showRival ? 15000 : undefined}
            loading={loading}
          />
        </Col>

        <Col span={8}>
          <DataCard
            title="销售额"
            value={89567}
            prefix="¥"
            trend={showTrend ? { value: 8.5, type: 'down' } : undefined}
            rivalAvg={showRival ? '¥95000' : undefined}
            rivalGood={showRival ? '¥120000' : undefined}
            loading={loading}
          />
        </Col>

        <Col span={8}>
          <DataCard
            title="转化率"
            value="3.56%"
            trend={showTrend ? { value: 12.3, type: 'up' } : undefined}
            rivalAvg={showRival ? '2.98%' : undefined}
            rivalGood={showRival ? '4.20%' : undefined}
            loading={loading}
          />
        </Col>

        <Col span={8}>
          <DataCard
            title="客单价"
            value={256.8}
            prefix="¥"
            trend={showTrend ? { value: 5.6, type: 'up' } : undefined}
            loading={loading}
          />
        </Col>

        <Col span={8}>
          <DataCard
            title="支付买家数"
            value={4567}
            suffix="人"
            trend={showTrend ? { value: 3.2, type: 'down' } : undefined}
            loading={loading}
          />
        </Col>

        <Col span={8}>
          <DataCard
            title="加购率"
            value="12.34%"
            trend={showTrend ? { value: 18.9, type: 'up' } : undefined}
            loading={loading}
          />
        </Col>
      </Row>
    </div>
  );
};
