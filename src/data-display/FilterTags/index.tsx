import React from 'react';
import { Space, Tag, Skeleton } from 'antd';
import './index.less';

const { CheckableTag } = Tag;

export interface FilterTag {
  /** 标签ID */
  id: string;
  /** 标签文本 */
  label: string;
}

export interface FilterTagsProps {
  /** 标签列表 */
  tags: FilterTag[];
  /** 当前选中的标签ID */
  activeId: string | null;
  /** 切换回调 */
  onChange: (id: string | null) => void;
  /** 加载状态 */
  loading?: boolean;
}

/**
 * 筛选标签
 *
 * 可选中的属性标签，用于数据筛选。
 */
export const FilterTags: React.FC<FilterTagsProps> = ({
  tags,
  activeId,
  onChange,
  loading = false,
}) => {
  // Loading状态显示骨架屏
  if (loading) {
    return (
      <div className="filter-tags">
        <Space size="middle">
          <Skeleton.Button active size="small" style={{ width: 60 }} />
          <Skeleton.Button active size="small" style={{ width: 80 }} />
          <Skeleton.Button active size="small" style={{ width: 70 }} />
          <Skeleton.Button active size="small" style={{ width: 90 }} />
        </Space>
      </div>
    );
  }

  return (
    <div className="filter-tags">
      <div className="filter-tags__scroll">
        <Space size="middle" wrap={false}>
          <CheckableTag
            checked={activeId === null}
            onChange={() => onChange(null)}
            className="filter-tags__tag"
          >
            全部
          </CheckableTag>

          {tags.map((tag) => (
            <CheckableTag
              key={tag.id}
              checked={activeId === tag.id}
              onChange={() => onChange(tag.id)}
              className="filter-tags__tag"
            >
              {tag.label}
            </CheckableTag>
          ))}
        </Space>
      </div>
    </div>
  );
};

