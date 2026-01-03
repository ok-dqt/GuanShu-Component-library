import React from 'react';
import { Divider, message } from 'antd';
import './index.less';

export interface SimpleModalHeaderProps {
  title: string;
  logo?: React.ReactNode;
  customBtn?: React.ReactNode;
  onClearCache?: () => void;
  showClearCacheMessage?: boolean;
  onUserCenter?: () => void;
  onFeedback?: () => void;
  style?: React.CSSProperties;
}

export const SimpleModalHeader: React.FC<SimpleModalHeaderProps> = ({
  title,
  logo,
  customBtn,
  onClearCache,
  showClearCacheMessage = true,
  onUserCenter,
  onFeedback,
  style,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleClearCache = () => {
    onClearCache?.();
    if (showClearCacheMessage) {
      messageApi.success('缓存已清除');
    }
  };

  const handleUserCenter = () => {
    onUserCenter?.();
  };

  const handleFeedback = () => {
    onFeedback?.();
  };

  return (
    <>
      {contextHolder}
      <div className="modal-header" style={style}>
        <div className="modal-header-left">
          {logo && <div className="modal-header-logo">{logo}</div>}
          {logo && <Divider type="vertical" />}
          <span className="modal-header-title">{title}</span>
        </div>

        <div className="modal-header-right">
          {onClearCache && (
            <>
              <div className="modal-header-action" onClick={handleClearCache}>
                <i className="iconfont icon-hengfu_qingchuhuancun" />
                <span>清除缓存</span>
              </div>
              <Divider type="vertical" />
            </>
          )}

          {onUserCenter && (
            <>
              <div className="modal-header-action" onClick={handleUserCenter}>
                <i className="iconfont icon-hengfu_gerenzhongxin" />
                <span>个人中心</span>
              </div>
              <Divider type="vertical" />
            </>
          )}

          {onFeedback && (
            <>
              <div className="modal-header-action" onClick={handleFeedback}>
                <i className="iconfont icon-fankui" />
                <span>反馈</span>
              </div>
              {customBtn && <Divider type="vertical" />}
            </>
          )}

          {customBtn}
        </div>
      </div>
    </>
  );
};
