import React from 'react';
import logoSvg from './logo.svg';

export interface LogoProps {
  /** Logo 尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 自定义高度 */
  height?: number | string;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** alt 文本 */
  alt?: string;
}

const SIZE_MAP = {
  small: 16,
  default: 32,
  large: 48,
};

/**
 * 观数品牌 Logo 组件
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'default',
  height,
  className,
  style,
  alt = '观数',
}) => {
  const computedHeight = height ?? SIZE_MAP[size];

  return (
    <img
      src={logoSvg}
      alt={alt}
      className={className}
      style={{
        height: typeof computedHeight === 'number' ? `${computedHeight}px` : computedHeight,
        ...style,
      }}
    />
  );
};

export { logoSvg };
