import React from 'react';
import { Segmented, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { SegmentedProps } from 'antd';

export interface ModeTabsOption {
  value: string;
  label: string;
  tooltip?: string;
}

export interface ModeTabsProps {
  value: string;
  options: ModeTabsOption[];
  onChange: (value: string) => void;
  size?: 'large' | 'middle' | 'small';
  style?: React.CSSProperties;
}

export const ModeTabs: React.FC<ModeTabsProps> = ({ value, options, onChange, size, style }) => {
  const segmentedOptions: SegmentedProps['options'] = options.map((option) => ({
    value: option.value,
    label: option.tooltip ? (
      <span>
        {option.label}{' '}
        <Tooltip title={option.tooltip}>
          <InfoCircleOutlined
            style={{
              fontSize: 12,
              cursor: 'pointer',
              color: value === option.value ? '#fff' : '#8c8c8c',
            }}
          />
        </Tooltip>
      </span>
    ) : (
      option.label
    ),
  }));

  return <Segmented value={value} options={segmentedOptions} onChange={onChange} size={size} style={style} />;
};
