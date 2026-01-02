import React, { useState, useEffect } from 'react';
import { ExportProgressOverlay } from '../index';
import { Button, Card, Space, Switch, Select, InputNumber, message } from 'antd';
import type { ExportProgress, ExportStage } from '../index';

export default () => {
  const [progress, setProgress] = useState<ExportProgress | null>(null);
  const [showCancel, setShowCancel] = useState(true);
  const [stage, setStage] = useState<ExportStage>('downloading');
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    if (!progress) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (!prev) return null;

        const { current, total } = prev;

        if (current >= total) {
          message.success('导出完成！');
          return null;
        }

        return { ...prev, current: current + 1 };
      });
    }, speed);

    return () => clearInterval(timer);
  }, [progress, speed]);

  const handleStart = () => {
    setProgress({ stage, current: 0, total: 100 });
  };

  const handleCancel = () => {
    setProgress(null);
    message.warning('已取消导出');
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card size="small" title="配置">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <span>显示取消按钮:</span>
            <Switch checked={showCancel} onChange={setShowCancel} />
          </Space>

          <Space wrap>
            <span>导出阶段:</span>
            <Select
              value={stage}
              onChange={setStage}
              style={{ width: 150 }}
              options={[
                { label: '正在下载数据', value: 'downloading' },
                { label: '正在生成文件', value: 'generating' },
                { label: '正在处理', value: 'processing' },
              ]}
            />
          </Space>

          <Space wrap>
            <span>进度速度 (ms):</span>
            <InputNumber
              value={speed}
              onChange={(val) => setSpeed(val || 100)}
              min={50}
              max={500}
              step={50}
            />
          </Space>
        </Space>
      </Card>

      <Card
        title="组件预览"
        style={{ position: 'relative', minHeight: 300 }}
      >
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
          <Button type="primary" onClick={handleStart} disabled={!!progress}>
            开始模拟导出
          </Button>

          {progress && (
            <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
              当前进度: {progress.current} / {progress.total}
            </div>
          )}
        </div>

        <ExportProgressOverlay
          progress={progress}
          onCancel={handleCancel}
          showCancel={showCancel}
        />
      </Card>
    </Space>
  );
};
