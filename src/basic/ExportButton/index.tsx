import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export interface ExportButtonProps {
  data: any[];
  fileName: string;
  onExportExcel?: (data: any[], fileName: string) => void;
  onExportCsv?: (data: any[], fileName: string) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  data,
  fileName,
  onExportExcel,
  onExportCsv,
  disabled,
  style,
}) => {
  const handleExportExcel = () => {
    if (onExportExcel) {
      onExportExcel(data, fileName);
    }
  };

  const handleExportCsv = () => {
    if (onExportCsv) {
      onExportCsv(data, fileName);
    }
  };

  const menuItems: MenuProps['items'] = [
    {
      label: '导出为Excel',
      key: 'excel',
      onClick: handleExportExcel,
    },
    {
      label: '导出为CSV',
      key: 'csv',
      onClick: handleExportCsv,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems }}
      disabled={disabled || data.length === 0}
      arrow={false}
    >
      <Button type="primary" style={style}>
        导出表格 <DownOutlined />
      </Button>
    </Dropdown>
  );
};
