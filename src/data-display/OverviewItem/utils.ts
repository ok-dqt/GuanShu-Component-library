/**
 * OverviewItem 组件工具函数
 */

/** 格式化变化率显示 */
export const formatChangeRate = (
  rate: number
): { text: string; color: string; arrow: string } => {
  if (rate === 0 || isNaN(rate)) {
    return { text: '0.00%', color: '#8c8c8c', arrow: '' };
  }
  const isPositive = rate > 0;
  const percent = Math.abs(rate * 100).toFixed(2);
  return {
    text: `${percent}%`,
    color: isPositive ? '#f5222d' : '#52c41a',
    arrow: isPositive ? '▲' : '▼',
  };
};

/** 获取变化率的样式类名 */
export const getRateClassName = (rate: number | undefined): string => {
  if (rate === undefined || rate === null) {
    return 'overview-item__compare-rate--neutral';
  }
  if (rate > 0) return 'overview-item__compare-rate--up';
  if (rate < 0) return 'overview-item__compare-rate--down';
  return 'overview-item__compare-rate--neutral';
};
