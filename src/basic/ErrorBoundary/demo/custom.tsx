import React, { useState } from 'react';
import { ErrorBoundary } from '../index';
import { Button, Alert } from 'antd';

// 一个会抛出错误的组件
const BuggyComponent: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('自定义错误UI示例');
  }
  return <div>正常渲染的组件</div>;
};

export default () => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [key, setKey] = useState(0);

  const customFallback = (
    <Alert
      message="自定义错误提示"
      description="你可以自定义错误时显示的UI，比如这个Alert组件。"
      type="error"
      showIcon
    />
  );

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          danger
          onClick={() => setShouldThrow(true)}
          style={{ marginRight: 8 }}
        >
          触发错误
        </Button>
        <Button
          onClick={() => {
            setShouldThrow(false);
            setKey(key + 1);
          }}
        >
          重置
        </Button>
      </div>
      <ErrorBoundary key={key} fallback={customFallback}>
        <BuggyComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </div>
  );
};
