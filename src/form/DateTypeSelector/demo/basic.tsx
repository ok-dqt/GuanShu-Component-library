import React, { useState } from 'react';
import { DateTypeSelector, DateType, Dayjs } from '../index';
import { Space } from 'antd';

export default () => {
  const [dateType, setDateType] = useState<DateType>(DateType.Recent7);
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);

  const handleChange = (type: DateType, date: Dayjs | null) => {
    setDateType(type);
    setCustomDate(date);
    console.log('选择的日期类型:', type, '自定义日期:', date?.format('YYYY-MM-DD'));
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <DateTypeSelector value={dateType} customDate={customDate} onChange={handleChange} />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 4 }}>
        <div>当前选择类型: {dateType}</div>
        <div>自定义日期: {customDate ? customDate.format('YYYY-MM-DD') : '未选择'}</div>
      </div>
    </Space>
  );
};
