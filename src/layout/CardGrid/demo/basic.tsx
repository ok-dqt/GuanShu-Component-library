import React from 'react';
import { CardGrid } from '../index';
import type { CardItem } from '../index';
import { Card, message } from 'antd';

export default () => {
  const items: CardItem[] = [
    {
      id: '1',
      name: '数据分析',
      iconUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      showStatusDot: true,
      link: 'https://ant.design',
    },
    {
      id: '2',
      name: '报表导出',
      iconUrl: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      showStatusDot: false,
    },
    {
      id: '3',
      name: '用户管理',
      iconUrl: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.svg',
      showStatusDot: true,
    },
    {
      id: '4',
      name: '系统设置',
      showStatusDot: false,
    },
    {
      id: '5',
      name: '权限控制',
      iconUrl: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/k7bjlryk_w132_h130.png',
      showStatusDot: true,
    },
    {
      id: '6',
      name: '日志查看',
      showStatusDot: false,
    },
  ];

  const handleCardClick = (item: CardItem) => {
    message.info(`点击了: ${item.name}`);
  };

  return (
    <div>
      <Card title="基础用法" style={{ marginBottom: 16 }}>
        <div style={{ height: 300 }}>
          <CardGrid items={items} onCardClick={handleCardClick} />
        </div>
      </Card>

      <Card title="带底部说明">
        <div style={{ height: 300 }}>
          <CardGrid
            items={items}
            onCardClick={handleCardClick}
            showFooter
            footerLegendText="表示功能已启用"
            footerRightText="v1.0.0"
          />
        </div>
      </Card>
    </div>
  );
};
