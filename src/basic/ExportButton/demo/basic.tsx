import React from 'react';
import { ExportButton } from '../index';
import { message } from 'antd';

export default () => {
  const mockData = [
    { id: 1, name: '商品A', sales: 1200, price: 99.9 },
    { id: 2, name: '商品B', sales: 850, price: 149.5 },
    { id: 3, name: '商品C', sales: 2100, price: 79.0 },
  ];

  const handleExportExcel = (data: any[], fileName: string) => {
    message.success(`导出 Excel: ${fileName}.xlsx (${data.length} 条数据)`);
    console.log('Export Excel:', data);
  };

  const handleExportCsv = (data: any[], fileName: string) => {
    message.success(`导出 CSV: ${fileName}.csv (${data.length} 条数据)`);
    console.log('Export CSV:', data);
  };

  return (
    <ExportButton
      data={mockData}
      fileName="商品销售数据"
      onExportExcel={handleExportExcel}
      onExportCsv={handleExportCsv}
    />
  );
};
