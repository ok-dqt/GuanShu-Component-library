import React from 'react';
import { DataItem } from '../index';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>百分比模式</div>
        <DataItem value={0.356} isPercent />
      </div>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>百分比 + 环比</div>
        <DataItem value={0.356} isPercent cycleCrc={0.12} />
      </div>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>已格式化的百分比</div>
        <DataItem value="45%" isPercent />
      </div>
    </div>
  );
};
