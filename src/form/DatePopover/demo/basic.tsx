import React, { useState } from 'react';
import { DatePopover } from '../index';
import { Space, Card } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export default () => {
  const [dayValue, setDayValue] = useState<Dayjs | null>(dayjs().subtract(1, 'day'));
  const [weekValue, setWeekValue] = useState<Dayjs | null>(dayjs().subtract(1, 'week'));
  const [monthValue, setMonthValue] = useState<Dayjs | null>(dayjs().subtract(1, 'month'));

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="Hover 在文字上查看日期选择器">
        <Space size="large">
          <DatePopover
            type="day"
            value={dayValue}
            onChange={setDayValue}
          />
          <DatePopover
            type="week"
            value={weekValue}
            onChange={setWeekValue}
          />
          <DatePopover
            type="month"
            value={monthValue}
            onChange={setMonthValue}
          />
        </Space>
      </Card>

      <Card size="small" title="已选日期">
        <div>
          <div>日：{dayValue?.format('YYYY-MM-DD') || '未选择'}</div>
          <div>周：{weekValue?.format('YYYY-MM-DD') || '未选择'}</div>
          <div>月：{monthValue?.format('YYYY-MM') || '未选择'}</div>
        </div>
      </Card>
    </Space>
  );
};
