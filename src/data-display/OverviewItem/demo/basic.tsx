import React from 'react';
import { OverviewItem } from '../index';
import { Row, Col, Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <h4>实时维度</h4>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <OverviewItem
              title="访客数"
              value="12,345"
              compareRate={0.15}
              yesterdaySameTimeValue="10,735"
              yesterdayValue="18,520"
            />
          </Col>
          <Col span={8}>
            <OverviewItem
              title="成交金额"
              value="¥85,420"
              compareRate={-0.08}
              yesterdaySameTimeValue="¥92,890"
              yesterdayValue="¥145,320"
            />
          </Col>
          <Col span={8}>
            <OverviewItem
              title="转化率"
              value="3.25%"
              compareRate={0}
              yesterdaySameTimeValue="3.25%"
            />
          </Col>
        </Row>
      </div>

      <div>
        <h4>日/周/月维度</h4>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <OverviewItem
              title="访客数"
              value="45,230"
              rivalAvgValue="38,520"
              rivalGoodValue="62,100"
              periodCompareRate={0.12}
              periodLabel="较前1日"
            />
          </Col>
          <Col span={8}>
            <OverviewItem
              title="支付转化率"
              value="4.85%"
              rivalAvgValue="3.92%"
              rivalGoodValue="6.15%"
              periodCompareRate={-0.03}
              periodLabel="较前1周"
            />
          </Col>
          <Col span={8}>
            <OverviewItem
              title="客单价"
              value="¥156.80"
              rivalAvgValue="¥145.20"
              periodCompareRate={0.08}
              periodLabel="较前1月"
            />
          </Col>
        </Row>
      </div>

      <div>
        <h4>自定义维度</h4>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <OverviewItem
              title="访客数"
              value="125,680"
              customCompareValue="108,520"
              customCompareRate={0.158}
            />
          </Col>
        </Row>
      </div>
    </Space>
  );
};
