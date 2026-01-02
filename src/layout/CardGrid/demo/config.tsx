import React, { useState } from 'react';
import { CardGrid } from '../index';
import type { CardItem } from '../index';
import { Card, Space, InputNumber, Input, Switch, message } from 'antd';

export default () => {
  const [columns, setColumns] = useState(4);
  const [emptyText, setEmptyText] = useState('暂无数据');
  const [showFooter, setShowFooter] = useState(true);
  const [footerLegendText, setFooterLegendText] = useState('表示已启用');
  const [footerRightText, setFooterRightText] = useState('v1.0.0');
  const [showData, setShowData] = useState(true);

  const items: CardItem[] = [
    {
      id: '1',
      name: '功能A',
      iconUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      showStatusDot: true,
    },
    {
      id: '2',
      name: '功能B',
      iconUrl: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      showStatusDot: false,
    },
    {
      id: '3',
      name: '功能C',
      showStatusDot: true,
    },
    {
      id: '4',
      name: '功能D',
      showStatusDot: false,
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>列数:</span>
            <InputNumber
              value={columns}
              onChange={(val) => setColumns(val || 4)}
              min={1}
              max={6}
            />
          </Space>

          <Space wrap>
            <span>显示数据:</span>
            <Switch checked={showData} onChange={setShowData} />
          </Space>

          <Space wrap>
            <span>空数据文本:</span>
            <Input
              value={emptyText}
              onChange={(e) => setEmptyText(e.target.value)}
              style={{ width: 200 }}
            />
          </Space>

          <Space wrap>
            <span>显示底部:</span>
            <Switch checked={showFooter} onChange={setShowFooter} />
          </Space>

          {showFooter && (
            <>
              <Space wrap>
                <span>底部说明:</span>
                <Input
                  value={footerLegendText}
                  onChange={(e) => setFooterLegendText(e.target.value)}
                  style={{ width: 200 }}
                />
              </Space>

              <Space wrap>
                <span>底部右侧文本:</span>
                <Input
                  value={footerRightText}
                  onChange={(e) => setFooterRightText(e.target.value)}
                  style={{ width: 200 }}
                />
              </Space>
            </>
          )}
        </Space>
      </Card>

      <Card size="small" title="组件预览">
        <div style={{ height: 300 }}>
          <CardGrid
            items={showData ? items : []}
            columns={columns}
            emptyText={emptyText}
            showFooter={showFooter}
            footerLegendText={footerLegendText}
            footerRightText={footerRightText}
            onCardClick={(item) => message.info(`点击了: ${item.name}`)}
          />
        </div>
      </Card>
    </Space>
  );
};
