import React, { useState } from 'react';
import { UpdateModal } from '../index';
import { Button, message } from 'antd';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开更新提示
      </Button>
      <UpdateModal
        visible={visible}
        onClose={() => setVisible(false)}
        onUpdate={() => {
          message.success('开始下载更新');
        }}
        updateInfo={{
          version: '1.2.3',
          features: [
            '新增：数据概览卡片增强',
            '优化：表格性能提升',
            '修复：日期选择器bug',
          ],
        }}
      />
    </div>
  );
};
