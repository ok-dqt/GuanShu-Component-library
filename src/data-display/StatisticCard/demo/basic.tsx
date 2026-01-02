import React from 'react';
import { StatisticCard } from '../index';
import { Row, Col } from 'antd';

export default () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <StatisticCard
          title="总销售额"
          value={112893}
          prefix="¥"
        />
      </Col>
      <Col span={8}>
        <StatisticCard
          title="访问量"
          value={8846}
          trend={{ value: 12.5, type: 'up' }}
        />
      </Col>
      <Col span={8}>
        <StatisticCard
          title="转化率"
          value={3.65}
          precision={2}
          suffix="%"
          trend={{ value: 2.1, type: 'down' }}
        />
      </Col>
    </Row>
  );
};
