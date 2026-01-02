import React, { useState } from 'react';
import { AnalysisModal } from '../index';
import { Button, Space, DatePicker, Tabs, Table, Statistic, Row, Col, Card } from 'antd';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default () => {
  const [visible, setVisible] = useState(false);

  const headerExtra = (
    <Space>
      <RangePicker size="small" />
      <Button size="small" icon={<SyncOutlined />}>
        刷新
      </Button>
      <Button size="small" icon={<DownloadOutlined />} type="primary">
        导出
      </Button>
    </Space>
  );

  const mockData = Array.from({ length: 10 }, (_, i) => ({
    key: i + 1,
    date: `2025-12-${String(i + 1).padStart(2, '0')}`,
    uv: Math.floor(Math.random() * 10000),
    sales: Math.floor(Math.random() * 100000),
  }));

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开数据分析弹窗
      </Button>

      <AnalysisModal
        title="数据概览分析"
        visible={visible}
        onClose={() => setVisible(false)}
        width="90%"
        headerExtra={headerExtra}
      >
        <Tabs
          items={[
            {
              key: 'overview',
              label: '数据概览',
              children: (
                <div>
                  <Row gutter={16} style={{ marginBottom: 24 }}>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="访客数"
                          value={12345}
                          valueStyle={{ color: '#1890ff' }}
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="销售额"
                          value={89567}
                          prefix="¥"
                          valueStyle={{ color: '#52c41a' }}
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic
                          title="转化率"
                          value="3.56%"
                          valueStyle={{ color: '#faad14' }}
                        />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card>
                        <Statistic title="支付买家" value={456} suffix="人" />
                      </Card>
                    </Col>
                  </Row>

                  <Table
                    columns={[
                      { title: '日期', dataIndex: 'date', width: 120 },
                      {
                        title: '访客数',
                        dataIndex: 'uv',
                        width: 120,
                        render: (text) => text.toLocaleString(),
                      },
                      {
                        title: '销售额',
                        dataIndex: 'sales',
                        width: 150,
                        render: (text) => `¥${text.toLocaleString()}`,
                      },
                    ]}
                    dataSource={mockData}
                    pagination={{ pageSize: 5 }}
                  />
                </div>
              ),
            },
          ]}
        />
      </AnalysisModal>
    </div>
  );
};
