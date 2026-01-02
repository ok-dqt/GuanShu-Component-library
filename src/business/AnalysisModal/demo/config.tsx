import React, { useState } from 'react';
import { AnalysisModal } from '../index';
import { DataCard } from '../../DataCard';
import { DataTable } from '../../DataTable';
import { Button, Space, Switch, Select, Card, Row, Col, DatePicker, Tabs } from 'antd';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

// Mock 数据
const mockTableData = Array.from({ length: 20 }, (_, index) => ({
  key: index + 1,
  date: `2025-12-${String(index + 1).padStart(2, '0')}`,
  uv: Math.floor(Math.random() * 10000),
  sales: Math.floor(Math.random() * 100000),
  conversion: (Math.random() * 0.1).toFixed(4),
}));

export default () => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState<string | number>('90%');
  const [fullscreen, setFullscreen] = useState(false);
  const [showCards, setShowCards] = useState(true);
  const [showTable, setShowTable] = useState(true);

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

  return (
    <div>
      <Card
        title="弹窗配置"
        size="small"
        style={{ marginBottom: 16 }}
        bodyStyle={{ padding: '12px 16px' }}
      >
        <Space size="large" wrap>
          <Space>
            <span>弹窗宽度：</span>
            <Select
              value={width}
              onChange={setWidth}
              style={{ width: 120 }}
              options={[
                { value: '70%', label: '70%' },
                { value: '90%', label: '90%' },
                { value: 1200, label: '1200px' },
                { value: 1600, label: '1600px' },
              ]}
            />
          </Space>

          <Space>
            <span>全屏模式：</span>
            <Switch checked={fullscreen} onChange={setFullscreen} />
          </Space>

          <Space>
            <span>显示数据卡片：</span>
            <Switch checked={showCards} onChange={setShowCards} />
          </Space>

          <Space>
            <span>显示数据表格：</span>
            <Switch checked={showTable} onChange={setShowTable} />
          </Space>
        </Space>
      </Card>

      <Button type="primary" onClick={() => setVisible(true)}>
        打开数据分析弹窗
      </Button>

      <AnalysisModal
        title="数据概览分析"
        visible={visible}
        onClose={() => setVisible(false)}
        width={width}
        fullscreen={fullscreen}
        headerExtra={headerExtra}
      >
        <Tabs
          defaultActiveKey="realtime"
          items={[
            {
              key: 'realtime',
              label: '实时数据',
              children: (
                <div>
                  {showCards && (
                    <>
                      <div style={{ marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
                        实时指标
                      </div>
                      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                        <Col span={6}>
                          <DataCard
                            title="实时访客（UV）"
                            value={1234}
                            trend={{ value: 15.2, type: 'up' }}
                          />
                        </Col>
                        <Col span={6}>
                          <DataCard
                            title="实时销售额"
                            value={8956}
                            prefix="¥"
                            trend={{ value: 8.5, type: 'down' }}
                          />
                        </Col>
                        <Col span={6}>
                          <DataCard
                            title="实时转化率"
                            value="3.56%"
                            trend={{ value: 12.3, type: 'up' }}
                          />
                        </Col>
                        <Col span={6}>
                          <DataCard
                            title="实时支付买家数"
                            value={456}
                            suffix="人"
                            trend={{ value: 5.6, type: 'up' }}
                          />
                        </Col>
                      </Row>
                    </>
                  )}

                  {showTable && (
                    <>
                      <div style={{ marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
                        日维度数据
                      </div>
                      <DataTable
                        columns={[
                          { title: '日期', dataIndex: 'date', width: 120 },
                          {
                            title: '访客数',
                            dataIndex: 'uv',
                            width: 120,
                            sorter: true,
                            render: (text) => text.toLocaleString(),
                          },
                          {
                            title: '销售额',
                            dataIndex: 'sales',
                            width: 150,
                            sorter: true,
                            render: (text) => `¥${text.toLocaleString()}`,
                          },
                          {
                            title: '转化率',
                            dataIndex: 'conversion',
                            width: 120,
                            sorter: true,
                            render: (text) => `${(parseFloat(text) * 100).toFixed(2)}%`,
                          },
                        ]}
                        dataSource={mockTableData}
                        pagination={{ pageSize: 10 }}
                      />
                    </>
                  )}
                </div>
              ),
            },
            {
              key: 'daily',
              label: '日数据',
              children: <div>日数据内容（待配置）</div>,
            },
            {
              key: 'weekly',
              label: '周数据',
              children: <div>周数据内容（待配置）</div>,
            },
          ]}
        />
      </AnalysisModal>
    </div>
  );
};
