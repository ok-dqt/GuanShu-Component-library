import React from 'react';
import { ModalHeader } from '../index';
import { message } from 'antd';

export default () => {
  const handleClearCache = () => {
    console.log('清除缓存');
  };

  const handleUserCenter = () => {
    message.info('跳转到个人中心');
  };

  const handleFeedback = () => {
    message.info('打开反馈表单');
  };

  return (
    <div style={{ border: '1px solid #f0f0f0', borderRadius: 8 }}>
      <ModalHeader
        title="数据分析"
        logo={<span style={{ fontSize: 20, fontWeight: 'bold', color: '#1890ff' }}>观数</span>}
        onClearCache={handleClearCache}
        onUserCenter={handleUserCenter}
        onFeedback={handleFeedback}
      />
      <div style={{ padding: 24, minHeight: 200 }}>
        <p>弹窗内容区域</p>
      </div>
    </div>
  );
};
