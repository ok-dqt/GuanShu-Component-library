/**
 * @module FilterBar
 * @description 通用筛选栏组件，支持多种筛选控件组合
 */

import React from 'react';
import { Space, Segmented, Select, Switch, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { SegmentedProps } from 'antd';
import type { MenuProps } from 'antd';
import './index.less';

/** 筛选控件类型 */
export type FilterControlType = 'segmented' | 'select' | 'multiSelect' | 'switch';

/** 选项配置 */
export interface FilterOption {
  label: string;
  value: string | number;
}

/** 基础筛选控件配置 */
export interface BaseFilterControl {
  /** 控件唯一标识 */
  key: string;
  /** 控件类型 */
  type: FilterControlType;
  /** 是否禁用 */
  disabled?: boolean;
}

/** Segmented 筛选控件 */
export interface SegmentedFilterControl extends BaseFilterControl {
  type: 'segmented';
  /** 当前值 */
  value: string | number;
  /** 选项列表 */
  options: FilterOption[];
  /** 值变化回调 */
  onChange: (value: string | number) => void;
}

/** Select 筛选控件 */
export interface SelectFilterControl extends BaseFilterControl {
  type: 'select';
  /** 占位符 */
  placeholder?: string;
  /** 当前值 */
  value: string | number;
  /** 选项列表 */
  options: FilterOption[];
  /** 值变化回调 */
  onChange: (value: string | number) => void;
  /** 最小宽度 */
  minWidth?: number;
  /** 是否可清除 */
  allowClear?: boolean;
}

/** MultiSelect 筛选控件 */
export interface MultiSelectFilterControl extends BaseFilterControl {
  type: 'multiSelect';
  /** 占位符 */
  placeholder?: string;
  /** 当前值 */
  value: (string | number)[];
  /** 选项列表 */
  options: FilterOption[];
  /** 值变化回调 */
  onChange: (value: (string | number)[]) => void;
  /** 最小宽度 */
  minWidth?: number;
  /** 是否可清除 */
  allowClear?: boolean;
  /** 最大标签数 */
  maxTagCount?: number | 'responsive';
}

/** Switch 筛选控件 */
export interface SwitchFilterControl extends BaseFilterControl {
  type: 'switch';
  /** 开关标签 */
  label: string;
  /** 当前值 */
  checked: boolean;
  /** 值变化回调 */
  onChange: (checked: boolean) => void;
  /** 尺寸 */
  size?: 'small' | 'default';
}

/** 筛选控件配置联合类型 */
export type FilterControl =
  | SegmentedFilterControl
  | SelectFilterControl
  | MultiSelectFilterControl
  | SwitchFilterControl;

/** 导出选项配置 */
export interface ExportOption {
  key: string;
  label: string;
}

export interface FilterBarProps {
  /** 筛选控件列表 */
  filters: FilterControl[];
  /** 数据统计信息 */
  dataCount?: number;
  /** 数据统计文本（支持插值：{count}） */
  dataCountText?: string;
  /** 导出选项 */
  exportOptions?: ExportOption[];
  /** 导出回调 */
  onExport?: (key: string) => void;
  /** 导出按钮文本 */
  exportButtonText?: string;
  /** 是否加载中 */
  loading?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * 通用筛选栏组件
 * 支持多种筛选控件的灵活组合
 */
export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  dataCount,
  dataCountText = '当前表格中共有 {count} 条数据',
  exportOptions,
  onExport,
  exportButtonText = '导出表格',
  loading = false,
  style,
}) => {
  const renderFilterControl = (filter: FilterControl) => {
    const commonDisabled = loading || filter.disabled;

    switch (filter.type) {
      case 'segmented':
        return (
          <Segmented
            key={filter.key}
            options={filter.options}
            value={filter.value}
            onChange={filter.onChange}
            disabled={commonDisabled}
          />
        );

      case 'select':
        return (
          <Select
            key={filter.key}
            placeholder={filter.placeholder}
            style={{ minWidth: filter.minWidth || 160 }}
            options={filter.options}
            value={filter.value}
            onChange={filter.onChange}
            allowClear={filter.allowClear}
            disabled={commonDisabled}
          />
        );

      case 'multiSelect':
        return (
          <Select
            key={filter.key}
            mode="multiple"
            placeholder={filter.placeholder}
            style={{ minWidth: filter.minWidth || 160 }}
            options={filter.options}
            value={filter.value}
            onChange={filter.onChange}
            allowClear={filter.allowClear}
            maxTagCount={filter.maxTagCount || 'responsive'}
            disabled={commonDisabled}
          />
        );

      case 'switch':
        return (
          <Space key={filter.key}>
            <span className="filter-bar__label">{filter.label}</span>
            <Switch
              checked={filter.checked}
              onChange={filter.onChange}
              disabled={commonDisabled}
              size={filter.size || 'small'}
            />
          </Space>
        );

      default:
        return null;
    }
  };

  const exportMenuItems: MenuProps['items'] = exportOptions?.map((opt) => ({
    key: opt.key,
    label: opt.label,
    onClick: () => onExport?.(opt.key),
  }));

  const formattedCountText = dataCountText.replace(
    '{count}',
    `<span class="filter-bar__count-num">${dataCount || 0}</span>`
  );

  return (
    <div className="filter-bar" style={style}>
      {/* 左侧筛选区 */}
      <div className="filter-bar__left">
        <Space size="middle">{filters.map(renderFilterControl)}</Space>
      </div>

      {/* 右侧信息+操作区 */}
      <div className="filter-bar__right">
        <Space>
          {dataCount !== undefined && (
            <span
              className="filter-bar__count"
              dangerouslySetInnerHTML={{ __html: formattedCountText }}
            />
          )}
          {exportOptions && exportOptions.length > 0 && onExport && (
            <Dropdown menu={{ items: exportMenuItems }} disabled={loading}>
              <Button>
                {exportButtonText} <DownOutlined />
              </Button>
            </Dropdown>
          )}
        </Space>
      </div>
    </div>
  );
};

export default FilterBar;
