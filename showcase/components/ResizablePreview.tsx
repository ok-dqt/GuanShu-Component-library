import React from 'react';
import { useResize, UseResizeOptions } from '../hooks/useResize';

export interface ResizablePreviewProps extends UseResizeOptions {
  children: React.ReactNode;
}

/**
 * 可拖拽预览容器
 *
 * 用于 showcase 中预览组件，支持拖拽调整宽度和高度。
 */
export const ResizablePreview: React.FC<ResizablePreviewProps> = ({
  children,
  ...resizeOptions
}) => {
  const {
    width,
    height,
    isInitialized,
    isResizing,
    containerRef,
    widthHandleProps,
    heightHandleProps,
  } = useResize(resizeOptions);

  const containerClassName = [
    'resizable-preview',
    isResizing && 'resizable-preview--resizing',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{
        width: isInitialized ? width : '100%',
        height: isInitialized ? height : resizeOptions.defaultHeight || 400,
        opacity: isInitialized ? 1 : 0,
        transition: isInitialized ? 'none' : 'opacity 0.2s',
      }}
    >
      {children}

      {/* 宽度拖拽手柄 */}
      <div
        className="resizable-preview__handle resizable-preview__handle--width"
        {...widthHandleProps}
      />

      {/* 高度拖拽手柄 */}
      <div
        className="resizable-preview__handle resizable-preview__handle--height"
        {...heightHandleProps}
      />
    </div>
  );
};
