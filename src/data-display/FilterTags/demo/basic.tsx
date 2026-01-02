import React, { useState } from 'react';
import { FilterTags } from '../index';

export default () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const tags = [
    { id: '1', label: '颜色' },
    { id: '2', label: '尺寸' },
    { id: '3', label: '材质' },
    { id: '4', label: '风格' },
    { id: '5', label: '品牌' },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        当前选中: {activeId === null ? '全部' : tags.find((t) => t.id === activeId)?.label}
      </div>
      <FilterTags tags={tags} activeId={activeId} onChange={setActiveId} />
    </div>
  );
};
