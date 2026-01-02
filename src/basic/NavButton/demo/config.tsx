import React, { useState } from 'react';
import { NavButton, ButtonType, DropdownItem } from '../index';
import { Space, Select, Switch, Input, message } from 'antd';
import { SearchOutlined, LinkOutlined, DownOutlined } from '@ant-design/icons';

export default () => {
  const [buttonType, setButtonType] = useState<ButtonType>('default');
  const [label, setLabel] = useState('按钮文本');
  const [value, setValue] = useState('12345678');
  const [showCopy, setShowCopy] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (showCopy) {
      message.success('已复制到剪贴板');
    } else {
      message.info('按钮被点击');
    }
  };

  const handleDropdownClick = (item: DropdownItem) => {
    message.info(`点击了: ${item.label}`);
  };

  const dropdownItems = [
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
    { key: '3', label: '选项3' },
  ];

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>按钮类型:</span>
            <Select value={buttonType} onChange={setButtonType} style={{ width: 120 }}>
              <Select.Option value="default">默认</Select.Option>
              <Select.Option value="value">值类型</Select.Option>
              <Select.Option value="link">链接</Select.Option>
            </Select>

            <span>标签文本:</span>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} style={{ width: 120 }} />

            {buttonType === 'value' && (
              <>
                <span>值:</span>
                <Input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: 120 }} />
              </>
            )}

            <span>显示复制:</span>
            <Switch checked={showCopy} onChange={setShowCopy} />

            <span>显示图标:</span>
            <Switch checked={showIcon} onChange={setShowIcon} />

            <span>下拉菜单:</span>
            <Switch checked={showDropdown} onChange={setShowDropdown} />

            <span>提示信息:</span>
            <Switch checked={showTooltip} onChange={setShowTooltip} />
          </Space>
        </div>

        <NavButton
          label={label}
          buttonType={buttonType}
          value={buttonType === 'value' ? value : undefined}
          showCopy={showCopy}
          icon={showIcon ? (buttonType === 'link' ? <LinkOutlined /> : <SearchOutlined />) : undefined}
          dropdownItems={showDropdown ? dropdownItems : undefined}
          tooltip={showTooltip ? '这是一个提示信息' : undefined}
          onClick={handleClick}
          onDropdownItemClick={handleDropdownClick}
        />
      </Space>
    </div>
  );
};
