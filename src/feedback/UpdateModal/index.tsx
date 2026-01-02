import React from 'react';
import { Modal, Button } from 'antd';
import './index.less';

export interface UpdateModalProps {
  /** 是否显示 */
  visible: boolean;
  /** 关闭回调 */
  onClose: () => void;
  /** 更新按钮回调 */
  onUpdate?: () => void;
  /** 更新信息 */
  updateInfo?: {
    /** 版本号 */
    version: string;
    /** 新功能列表 */
    features: string[];
  };
}

/**
 * 更新提示弹窗
 *
 * 用于显示版本更新提示和新功能列表。
 */
export const UpdateModal: React.FC<UpdateModalProps> = ({
  visible,
  onClose,
  onUpdate,
  updateInfo,
}) => {
  const handleUpdate = () => {
    onUpdate?.();
    onClose();
  };

  return (
    <Modal
      title="发现新版本"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={400}
      centered
    >
      <div className="update-modal">
        <h3 className="update-modal__title">
          {updateInfo?.version ? `版本 ${updateInfo.version} 已发布!` : '新版本已发布!'}
        </h3>

        {updateInfo?.features && updateInfo.features.length > 0 && (
          <div className="update-modal__features">
            <p>
              <strong>更新内容:</strong>
            </p>
            <ul>
              {updateInfo.features.map((feature, index) => {
                // 如果包含冒号，在冒号后换行
                const parts = feature.split('：');
                if (parts.length > 1) {
                  return (
                    <li key={index}>
                      {parts[0]}：
                      <br />
                      {parts.slice(1).join('：')}
                    </li>
                  );
                }
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        )}

        <div className="update-modal__actions">
          <Button type="primary" size="large" onClick={handleUpdate}>
            去更新
          </Button>
          <Button size="large" onClick={onClose}>
            稍后提醒
          </Button>
        </div>
      </div>
    </Modal>
  );
};

