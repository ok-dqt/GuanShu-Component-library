import React, { useState } from 'react';
import { ErrorBoundary } from '../index';
import { Button } from 'antd';

// 一个会抛出错误的组件
const BuggyComponent: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('组件渲染错误！');
  }
  return <div>正常渲染的组件</div>;
};

export default () => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [key, setKey] = useState(0);

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
            setKey(key + 1); // 重置 ErrorBoundary
          }}
        >
          重置
        </Button>
      </div>
      <ErrorBoundary key={key}>
        <BuggyComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </div>
  );
};
