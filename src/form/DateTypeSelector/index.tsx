import React, { useState } from 'react';
import { Button, Dropdown, Space, Calendar, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs, { Dayjs } from 'dayjs';
import { DateType } from './types';
import { getDateRange } from './utils';
import { designTokens } from '../../theme';
import './index.less';

export interface DateTypeSelectorProps {
  value: DateType;
  customDate: Dayjs | null;
  loading?: boolean;
  onChange: (dateType: DateType, customDate: Dayjs | null) => void;
  style?: React.CSSProperties;
}

export const DateTypeSelector: React.FC<DateTypeSelectorProps> = ({
  value,
  customDate,
  loading = false,
  onChange,
  style,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [able, setAble] = useState(false);
  const [activeDropdownType, setActiveDropdownType] = useState<DateType | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Dayjs | null>(null);

  const getMaxSelectableDate = (dateType: DateType): Dayjs => {
    const now = dayjs();
    switch (dateType) {
      case DateType.Day:
        return now.subtract(1, 'day');
      case DateType.Week:
        return now.subtract(1, 'week').endOf('week').add(1, 'day');
      case DateType.Month:
        return now.subtract(1, 'month').endOf('month');
      default:
        return now.subtract(1, 'day');
    }
  };

  const isInSameWeek = (date1: Dayjs, date2: Dayjs): boolean => {
    const week1Start = date1.startOf('week').add(1, 'day');
    const week2Start = date2.startOf('week').add(1, 'day');
    return week1Start.isSame(week2Start, 'day');
  };

  const weekDateFullCellRender = (date: Dayjs) => {
    const isSelected = value === DateType.Week && customDate && isInSameWeek(date, customDate);
    const isHovered = hoveredDate && isInSameWeek(date, hoveredDate);
    const maxDate = getMaxSelectableDate(DateType.Week);
    const isDisabled = date.isAfter(maxDate, 'day');
    const isCurrentMonth = date.month() === (customDate?.month() || dayjs().month());

    return (
      <div
        className="ant-picker-cell-inner"
        style={{
          margin: 0,
          padding: '4px 0',
          textAlign: 'center',
          backgroundColor: isSelected ? designTokens.colors.primary : isHovered ? designTokens.background.hover : 'transparent',
          color: isSelected ? designTokens.text.inverse : isDisabled ? designTokens.text.disabled : isCurrentMonth ? designTokens.text.primary : designTokens.text.disabled,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={() => !isDisabled && setHoveredDate(date)}
        onMouseLeave={() => setHoveredDate(null)}
      >
        {date.date()}
      </div>
    );
  };

  const handleSimpleTypeClick = (dateType: DateType) => {
    onChange(dateType, null);
    setAble(true);
    setTimeout(() => setAble(false), 800);
  };

  const handleCustomTypeClick = (dateType: DateType) => {
    setActiveDropdownType(dateType);
    setDropdownOpen(true);
  };

  const renderDatePicker = () => {
    const commonStyle = {
      background: designTokens.background.card,
      borderRadius: designTokens.borderRadius.base,
      boxShadow:
        '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      padding: designTokens.spacing.md,
      transform: 'scale(0.85)',
      transformOrigin: 'top left',
      width: 'fit-content',
    };

    const handleCalendarChange = (date: Dayjs) => {
      if (activeDropdownType) {
        onChange(activeDropdownType, date);
        setDropdownOpen(false);
        setHoveredDate(null);
      }
    };

    const getDisabledDate = (current: Dayjs) => {
      if (!activeDropdownType) return false;
      const maxDate = getMaxSelectableDate(activeDropdownType);
      const unit = activeDropdownType === DateType.Month ? 'month' : 'day';
      return current && current.isAfter(maxDate, unit);
    };

    if (activeDropdownType === DateType.Day) {
      return (
        <div style={commonStyle}>
          <Calendar
            value={activeDropdownType === value && customDate ? customDate : undefined}
            fullscreen={false}
            onChange={handleCalendarChange}
            disabledDate={getDisabledDate}
            style={{ width: 250 }}
          />
        </div>
      );
    }

    if (activeDropdownType === DateType.Week) {
      return (
        <div style={commonStyle}>
          <ConfigProvider locale={zhCN}>
            <Calendar
              value={activeDropdownType === value && customDate ? customDate : undefined}
              fullscreen={false}
              dateFullCellRender={weekDateFullCellRender}
              onChange={handleCalendarChange}
              disabledDate={getDisabledDate}
              style={{ width: 250 }}
            />
          </ConfigProvider>
        </div>
      );
    }

    if (activeDropdownType === DateType.Month) {
      return (
        <div style={commonStyle}>
          <Calendar
            value={activeDropdownType === value && customDate ? customDate : undefined}
            fullscreen={false}
            mode="year"
            onChange={handleCalendarChange}
            disabledDate={getDisabledDate}
            style={{ width: 250 }}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <Space className="date-type-selector" style={style}>
      <div className="date-range-display">
        时间范围：{getDateRange(value, customDate).replace('|', ' ~ ')}
      </div>

      <Button
        type={value === DateType.Recent7 ? 'primary' : 'default'}
        onClick={() => handleSimpleTypeClick(DateType.Recent7)}
        disabled={able || loading}
      >
        7天
      </Button>

      <Button
        type={value === DateType.Recent30 ? 'primary' : 'default'}
        onClick={() => handleSimpleTypeClick(DateType.Recent30)}
        disabled={able || loading}
      >
        30天
      </Button>

      <Dropdown
        open={dropdownOpen && activeDropdownType === DateType.Day}
        onOpenChange={setDropdownOpen}
        trigger={['click']}
        dropdownRender={renderDatePicker}
      >
        <Button
          type={value === DateType.Day ? 'primary' : 'default'}
          onClick={() => handleCustomTypeClick(DateType.Day)}
          disabled={able || loading}
        >
          日 {value === DateType.Day && customDate ? `(${customDate.format('MM-DD')})` : ''}
        </Button>
      </Dropdown>

      <Dropdown
        open={dropdownOpen && activeDropdownType === DateType.Week}
        onOpenChange={setDropdownOpen}
        trigger={['click']}
        dropdownRender={renderDatePicker}
      >
        <Button
          type={value === DateType.Week ? 'primary' : 'default'}
          onClick={() => handleCustomTypeClick(DateType.Week)}
          disabled={able || loading}
        >
          周 {value === DateType.Week && customDate ? `(${customDate.format('MM-DD')})` : ''}
        </Button>
      </Dropdown>

      <Dropdown
        open={dropdownOpen && activeDropdownType === DateType.Month}
        onOpenChange={setDropdownOpen}
        trigger={['click']}
        dropdownRender={renderDatePicker}
      >
        <Button
          type={value === DateType.Month ? 'primary' : 'default'}
          onClick={() => handleCustomTypeClick(DateType.Month)}
          disabled={able || loading}
        >
          月 {value === DateType.Month && customDate ? `(${customDate.format('MM月')})` : ''}
        </Button>
      </Dropdown>
    </Space>
  );
};

export { DateType } from './types';
export type { Dayjs };
