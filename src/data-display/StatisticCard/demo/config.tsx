import React, { useState } from 'react';
import { StatisticCard } from '../index';
import { Row, Col, Space, Switch, Select } from 'antd';

export default () => {
  const [showTrend, setShowTrend] = useState(true);
  const [trendType, setTrendType] = useState<'up' | 'down'>('up');
  const [loading, setLoading] = useState(false);
  const [bordered, setBordered] = useState(true);

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>显示趋势:</span>
            <Switch checked={showTrend} onChange={setShowTrend} />

            <span>趋势方向:</span>
            <Select
              value={trendType}
              onChange={setTrendType}
              style={{ width: 100 }}
              disabled={!showTrend}
            >
              <Select.Option value="up">上升</Select.Option>
              <Select.Option value="down">下降</Select.Option>
            </Select>

            <span>加载状态:</span>
            <Switch checked={loading} onChange={setLoading} />

            <span>显示边框:</span>
            <Switch checked={bordered} onChange={setBordered} />
          </Space>
        </div>

        <Row gutter={16}>
          <Col span={8}>
            <StatisticCard
              title="总销售额"
              value={112893}
              prefix="¥"
              trend={showTrend ? { value: 15.8, type: trendType } : undefined}
              loading={loading}
              bordered={bordered}
            />
          </Col>
          <Col span={8}>
            <StatisticCard
              title="访问量"
              value={8846}
              trend={showTrend ? { value: 12.5, type: trendType } : undefined}
              loading={loading}
              bordered={bordered}
            />
          </Col>
          <Col span={8}>
            <StatisticCard
              title="转化率"
              value={3.65}
              precision={2}
              suffix="%"
              trend={showTrend ? { value: 2.1, type: trendType } : undefined}
              loading={loading}
              bordered={bordered}
            />
          </Col>
        </Row>
      </Space>
    </div>
  );
};
