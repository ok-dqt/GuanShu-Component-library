import React from 'react';
import { TrendIndicator } from '../index';
import { Space, Card } from 'antd';

export default () => {
  return (
    <Space direction="vertical" size="large">
      <Card title="销售数据">
        <Space direction="vertical">
          <div>
            本月销售额: ¥125,000
            <TrendIndicator value={12.5} type="up" style={{ marginLeft: 8 }} />
          </div>
          <div>
            访问量: 8,846
            <TrendIndicator value={8.2} type="down" style={{ marginLeft: 8 }} />
          </div>
        </Space>
      </Card>

      <Card title="成本指标（降低为好）">
        <Space direction="vertical">
          <div>
            运营成本: ¥45,000
            <TrendIndicator value={5.3} type="down" reverseColor style={{ marginLeft: 8 }} />
          </div>
          <div>
            退货率: 2.5%
            <TrendIndicator value={1.2} type="up" reverseColor style={{ marginLeft: 8 }} />
          </div>
        </Space>
      </Card>
    </Space>
  );
};
