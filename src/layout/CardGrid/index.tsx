/**
 * @module CardGrid
 * @description 通用的卡片网格布局组件
 */

import React, { memo } from 'react';
import './index.less';

export interface CardItem {
  /** 唯一标识 */
  id: string;
  /** 卡片名称 */
  name: string;
  /** 图标 URL */
  iconUrl?: string;
  /** 是否显示状态点 */
  showStatusDot?: boolean;
  /** 点击链接 */
  link?: string;
  /** 自定义数据 */
  data?: any;
}

export interface CardGridProps {
  /** 卡片列表 */
  items: CardItem[];
  /** 列数 */
  columns?: number;
  /** 点击回调 */
  onCardClick?: (item: CardItem) => void;
  /** 空数据文本 */
  emptyText?: string;
  /** 是否显示底部说明 */
  showFooter?: boolean;
  /** 底部说明文本 */
  footerLegendText?: string;
  /** 底部右侧文本 */
  footerRightText?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const FALLBACK_ICON =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3Cpath d="M12 8v4M12 16h.01"/%3E%3C/svg%3E';

/**
 * 卡片网格布局组件
 * 用于展示工具、功能等卡片列表
 */
export const CardGrid = memo<CardGridProps>(({
  items,
  columns = 4,
  onCardClick,
  emptyText = '暂无数据',
  showFooter = false,
  footerLegendText = '表示已启用',
  footerRightText,
  style,
}) => {
  const handleCardClick = (item: CardItem) => {
    if (onCardClick) {
      onCardClick(item);
    } else if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = FALLBACK_ICON;
  };

  return (
    <div className="card-grid" style={style}>
      <div className="card-grid__content">
        {items.length > 0 ? (
          <div
            className="card-grid__grid"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {items.map((item) => (
              <button
                key={item.id}
                className="card-grid__card"
                onClick={() => handleCardClick(item)}
              >
                <div className="card-grid__card-icon-wrapper">
                  <div className="card-grid__card-icon-box">
                    {item.iconUrl ? (
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="card-grid__card-icon"
                        loading="lazy"
                        width={22}
                        height={22}
                        onError={handleImageError}
                      />
                    ) : (
                      <img
                        src={FALLBACK_ICON}
                        alt=""
                        className="card-grid__card-icon"
                        width={22}
                        height={22}
                      />
                    )}
                  </div>

                  {item.showStatusDot && (
                    <div className="card-grid__card-status-dot" />
                  )}
                </div>

                <span className="card-grid__card-name">{item.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="card-grid__empty">
            <div className="card-grid__empty-icon">
              <img src={FALLBACK_ICON} alt="" width={20} height={20} />
            </div>
            <p className="card-grid__empty-text">{emptyText}</p>
          </div>
        )}
      </div>

      {showFooter && (
        <div className="card-grid__footer">
          <div className="card-grid__footer-legend">
            <div className="card-grid__footer-legend-dot" />
            <span className="card-grid__footer-legend-text">
              {footerLegendText}
            </span>
          </div>
          {footerRightText && (
            <span className="card-grid__footer-version">{footerRightText}</span>
          )}
        </div>
      )}
    </div>
  );
});

CardGrid.displayName = 'CardGrid';

