import React from 'react';
import { DataCard } from '../index';
import { Row, Col } from 'antd';

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <DataCard
          title="访客数（UV）"
          value={12345}
          trend={{ value: 15.2, type: 'up' }}
        />
      </Col>

      <Col span={8}>
        <DataCard
          title="销售额"
          value={89567}
          prefix="¥"
          trend={{ value: 8.5, type: 'down' }}
        />
      </Col>

      <Col span={8}>
        <DataCard
          title="转化率"
          value="3.56%"
          trend={{ value: 12.3, type: 'up' }}
          rivalAvg="2.98%"
          rivalGood="4.20%"
        />
      </Col>
    </Row>
  );
};
