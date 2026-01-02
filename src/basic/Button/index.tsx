import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends Omit<AntButtonProps, 'variant'> {
  /** 按钮变体 */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
}

/**
 * 按钮组件
 * 基于 Ant Design Button 封装，应用观数组件库主题
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  type,
  children,
  ...props
}) => {
  // 根据 variant 映射到 Ant Design 的 type
  const getButtonType = (): AntButtonProps['type'] => {
    if (type) return type;

    switch (variant) {
      case 'solid':
        return 'primary';
      case 'outline':
        return 'default';
      case 'ghost':
        return 'text';
      case 'link':
        return 'link';
      default:
        return 'primary';
    }
  };

  return (
    <AntButton type={getButtonType()} {...props}>
      {children}
    </AntButton>
  );
};

export default Button;
