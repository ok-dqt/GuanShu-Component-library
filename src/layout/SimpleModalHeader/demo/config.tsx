import React, { useState } from 'react';
import { ModalHeader } from '../index';
import { Space, Switch, Button, message } from 'antd';

export default () => {
  const [showClearCache, setShowClearCache] = useState(true);
  const [showUserCenter, setShowUserCenter] = useState(true);
  const [showFeedback, setShowFeedback] = useState(true);
  const [showCustomBtn, setShowCustomBtn] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleClearCache = () => {
    console.log('清除缓存');
  };

  const handleUserCenter = () => {
    message.info('跳转到个人中心');
  };

  const handleFeedback = () => {
    message.info('打开反馈表单');
  };

  const customBtn = (
    <Button type="primary" size="small">
      自定义按钮
    </Button>
  );

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space wrap>
            <span>显示Logo:</span>
            <Switch checked={showLogo} onChange={setShowLogo} />

            <span>清除缓存:</span>
            <Switch checked={showClearCache} onChange={setShowClearCache} />

            <span>个人中心:</span>
            <Switch checked={showUserCenter} onChange={setShowUserCenter} />

            <span>反馈:</span>
            <Switch checked={showFeedback} onChange={setShowFeedback} />

            <span>自定义按钮:</span>
            <Switch checked={showCustomBtn} onChange={setShowCustomBtn} />
          </Space>
        </div>

        <div style={{ border: '1px solid #f0f0f0', borderRadius: 8 }}>
          <ModalHeader
            title="数据分析"
            logo={showLogo ? <span style={{ fontSize: 20, fontWeight: 'bold', color: '#1890ff' }}>观数</span> : undefined}
            onClearCache={showClearCache ? handleClearCache : undefined}
            onUserCenter={showUserCenter ? handleUserCenter : undefined}
            onFeedback={showFeedback ? handleFeedback : undefined}
            customBtn={showCustomBtn ? customBtn : undefined}
          />
          <div style={{ padding: 24, minHeight: 200 }}>
            <p>弹窗内容区域</p>
          </div>
        </div>
      </Space>
    </div>
  );
};
