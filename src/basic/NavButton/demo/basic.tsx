import React from 'react';
import { NavButton } from '../index';
import { Space, message } from 'antd';
import { SearchOutlined, LinkOutlined, DownOutlined } from '@ant-design/icons';

export default () => {
  const handleCopy = () => {
    message.success('已复制到剪贴板');
  };

  const handleSearch = () => {
    message.info('执行搜索操作');
  };

  const handleDropdownClick = (item: { key: string; label: string }) => {
    message.info(`点击了: ${item.label}`);
  };

  return (
    <Space wrap>
      {/* 默认按钮 */}
      <NavButton label="默认按钮" />

      {/* Value 类型 */}
      <NavButton label="商品ID" buttonType="value" value="12345678" showCopy onClick={handleCopy} tooltip="点击复制" />

      {/* Link 类型 */}
      <NavButton label="查看链接" buttonType="link" icon={<LinkOutlined />} onClick={handleSearch} />

      {/* 带图标 */}
      <NavButton label="搜索" icon={<SearchOutlined />} onClick={handleSearch} />

      {/* 下拉菜单 */}
      <NavButton
        label="更多操作"
        icon={<DownOutlined />}
        dropdownItems={[
          { key: '1', label: '编辑' },
          { key: '2', label: '删除' },
          { key: '3', label: '导出' },
        ]}
        onDropdownItemClick={handleDropdownClick}
      />
    </Space>
  );
};
