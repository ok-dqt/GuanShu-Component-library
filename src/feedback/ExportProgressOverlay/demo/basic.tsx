import React, { useState, useEffect } from 'react';
import { ExportProgressOverlay } from '../index';
import { Button, Card, message } from 'antd';
import type { ExportProgress } from '../index';

export default () => {
  const [progress, setProgress] = useState<ExportProgress | null>(null);

  useEffect(() => {
    if (!progress) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (!prev) return null;

        const { current, total, stage } = prev;

        if (current >= total) {
          if (stage === 'downloading') {
            // 切换到生成阶段
            return { stage: 'generating', current: 0, total: 50 };
          } else {
            // 完成
            message.success('导出完成！');
            return null;
          }
        }

        return { ...prev, current: current + 1 };
      });
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  const handleStart = () => {
    setProgress({ stage: 'downloading', current: 0, total: 100 });
  };

  const handleCancel = () => {
    setProgress(null);
    message.warning('已取消导出');
  };

  return (
    <Card
      title="导出进度遮罩层"
      style={{ position: 'relative', minHeight: 300 }}
    >
      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <Button type="primary" onClick={handleStart} disabled={!!progress}>
          开始模拟导出
        </Button>
      </div>

      <ExportProgressOverlay
        progress={progress}
        onCancel={handleCancel}
      />
    </Card>
  );
};
