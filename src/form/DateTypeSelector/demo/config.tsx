import React, { useState } from 'react';
import { DateTypeSelector, DateType, Dayjs } from '../index';
import { Space, Switch, Card } from 'antd';

export default () => {
  const [dateType, setDateType] = useState<DateType>(DateType.Recent7);
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (type: DateType, date: Dayjs | null) => {
    setDateType(type);
    setCustomDate(date);
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>加载状态:</span>
            <Switch checked={loading} onChange={setLoading} />
          </Space>
        </div>

        <DateTypeSelector value={dateType} customDate={customDate} onChange={handleChange} loading={loading} />

        <Card title="当前选择信息" size="small">
          <Space direction="vertical">
            <div>
              <strong>选择类型:</strong> {dateType}
            </div>
            <div>
              <strong>自定义日期:</strong> {customDate ? customDate.format('YYYY-MM-DD') : '未选择'}
            </div>
            <div>
              <strong>日期范围:</strong>{' '}
              {(() => {
                const range = (() => {
                  switch (dateType) {
                    case DateType.Recent7:
                      return '最近7天';
                    case DateType.Recent30:
                      return '最近30天';
                    case DateType.Day:
                      return customDate ? `单日: ${customDate.format('YYYY-MM-DD')}` : '未选择';
                    case DateType.Week:
                      return customDate ? `周: ${customDate.format('YYYY 第ww周')}` : '未选择';
                    case DateType.Month:
                      return customDate ? `月: ${customDate.format('YYYY年MM月')}` : '未选择';
                    default:
                      return '';
                  }
                })();
                return range;
              })()}
            </div>
          </Space>
        </Card>
      </Space>
    </div>
  );
};
