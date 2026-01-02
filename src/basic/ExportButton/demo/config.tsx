import React, { useState } from 'react';
import { ExportButton } from '../index';
import { Space, Switch, InputNumber, message } from 'antd';

export default () => {
  const [dataCount, setDataCount] = useState(10);
  const [disabled, setDisabled] = useState(false);

  const generateMockData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `商品${String.fromCharCode(65 + (i % 26))}`,
      sales: Math.floor(Math.random() * 3000) + 100,
      price: Math.floor(Math.random() * 200) + 50,
    }));
  };

  const mockData = generateMockData(dataCount);

  const handleExportExcel = (data: any[], fileName: string) => {
    message.success(`导出 Excel: ${fileName}.xlsx (${data.length} 条数据)`);
    console.log('Export Excel:', data);
  };

  const handleExportCsv = (data: any[], fileName: string) => {
    message.success(`导出 CSV: ${fileName}.csv (${data.length} 条数据)`);
    console.log('Export CSV:', data);
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>数据条数:</span>
            <InputNumber
              value={dataCount}
              onChange={(val) => setDataCount(val || 0)}
              min={0}
              max={100}
              style={{ width: 120 }}
            />

            <span>禁用状态:</span>
            <Switch checked={disabled} onChange={setDisabled} />
          </Space>
        </div>

        <ExportButton
          data={mockData}
          fileName="商品销售数据"
          onExportExcel={handleExportExcel}
          onExportCsv={handleExportCsv}
          disabled={disabled}
        />

        <div style={{ color: '#666', fontSize: 14 }}>
          当前数据: {mockData.length} 条
          {mockData.length === 0 && ' (数据为空时按钮自动禁用)'}
        </div>
      </Space>
    </div>
  );
};
