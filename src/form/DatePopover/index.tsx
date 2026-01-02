/**
 * @module DatePopover
 * @description 日期选择 Popover 组件，Hover 时展示日期选择面板
 */

import React from 'react';
import { Popover, DatePicker, ConfigProvider } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import './index.less';

// 配置 dayjs 使用中文
dayjs.locale('zh-cn');

/** DatePicker 类型 */
export type DatePickerType = 'day' | 'week' | 'month';

/** Picker 配置 */
interface PickerConfig {
  picker: 'week' | 'month' | undefined;
  format: string;
  maxDateOffset: number;
  unit: 'day' | 'week' | 'month';
  label: string;
}

/** Picker 配置字典 */
const PICKER_CONFIG: Record<DatePickerType, PickerConfig> = {
  day: {
    picker: undefined,
    format: 'YYYY-MM-DD',
    maxDateOffset: 1,
    unit: 'day',
    label: '日',
  },
  week: {
    picker: 'week',
    format: 'YYYY-MM-DD',
    maxDateOffset: 1,
    unit: 'week',
    label: '周',
  },
  month: {
    picker: 'month',
    format: 'YYYY-MM',
    maxDateOffset: 1,
    unit: 'month',
    label: '月',
  },
};

/** DatePopover 组件 Props */
export interface DatePopoverProps {
  /** Picker 类型：日/周/月 */
  type: DatePickerType;
  /** 当前选中的日期 */
  value: Dayjs | null;
  /** 日期变化回调 */
  onChange: (date: Dayjs | null) => void;
  /** 是否显示 Popover */
  visible?: boolean;
  /** 显示状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 最大可选日期偏移量（相对今天） */
  maxDateOffset?: number;
  /** 自定义触发文本 */
  label?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/** 隐藏 DatePicker 输入框的样式 */
const HIDDEN_PICKER_STYLE: React.CSSProperties = {
  position: 'absolute',
  visibility: 'hidden',
  width: 0,
  height: 0,
  padding: 0,
  margin: 0,
  border: 'none',
};

/**
 * 日期选择 Popover 组件
 * Hover 时展示对应的日期选择面板
 */
export const DatePopover: React.FC<DatePopoverProps> = ({
  type,
  value,
  onChange,
  visible,
  onVisibleChange,
  maxDateOffset,
  label,
  style,
}) => {
  const config = PICKER_CONFIG[type];
  const offset = maxDateOffset ?? config.maxDateOffset;
  const displayLabel = label ?? config.label;

  const maxDate = dayjs().subtract(offset, config.unit);
  const defaultValue = value ?? maxDate;

  return (
    <Popover
      content={
        <div>
          <ConfigProvider locale={zhCN}>
            <DatePicker
              picker={config.picker}
              value={defaultValue}
              onChange={onChange}
              format={config.format}
              maxDate={maxDate}
              allowClear={false}
              open={true}
              style={HIDDEN_PICKER_STYLE}
              getPopupContainer={(trigger) =>
                trigger.parentElement || document.body
              }
            />
          </ConfigProvider>
        </div>
      }
      trigger="hover"
      placement="bottom"
      open={visible}
      onOpenChange={onVisibleChange}
    >
      <span className="date-popover-trigger" style={style}>
        {displayLabel}
      </span>
    </Popover>
  );
};
