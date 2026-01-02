import React from 'react';
import { DataItem } from '../index';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>基础用法</div>
        <DataItem value={12345} />
      </div>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>带环比（上升）</div>
        <DataItem value={12345} cycleCrc={0.15} />
      </div>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>带环比（下降）</div>
        <DataItem value={12345} cycleCrc={-0.08} />
      </div>
      <div>
        <div style={{ marginBottom: 8, color: '#666' }}>空值</div>
        <DataItem value="" />
      </div>
    </div>
  );
};
