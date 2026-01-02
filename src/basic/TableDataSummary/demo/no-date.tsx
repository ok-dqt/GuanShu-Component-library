import React from 'react';
import { TableDataSummary } from '../index';

export default () => {
  return (
    <div>
      <div style={{ marginBottom: 16, color: '#666' }}>不显示时间范围</div>
      <TableDataSummary count={89} />
    </div>
  );
};
