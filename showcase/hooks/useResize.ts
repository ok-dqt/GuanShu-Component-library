import { useState, useCallback, useEffect, useRef } from 'react';

/** 拖拽方向 */
type ResizeDirection = 'horizontal' | 'vertical';

/** 拖拽状态 */
interface ResizeState {
  isResizing: boolean;
  direction: ResizeDirection | null;
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
}

export interface UseResizeOptions {
  /** 初始宽度（像素或百分比） @default '100%' */
  defaultWidth?: number | string;
  /** 初始高度（像素） @default 400 */
  defaultHeight?: number;
  /** 最小宽度（像素） @default 200 */
  minWidth?: number;
  /** 最大宽度（像素） */
  maxWidth?: number;
  /** 最小高度（像素） @default 150 */
  minHeight?: number;
  /** 最大高度（像素） */
  maxHeight?: number;
  /** 尺寸变化回调 */
  onResize?: (size: { width: number; height: number }) => void;
}

export interface UseResizeReturn {
  /** 当前宽度（像素） */
  width: number;
  /** 当前高度（像素） */
  height: number;
  /** 是否已初始化完成 */
  isInitialized: boolean;
  /** 是否正在拖拽 */
  isResizing: boolean;
  /** 容器 ref */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** 宽度拖拽手柄 props */
  widthHandleProps: {
    onMouseDown: (e: React.MouseEvent) => void;
  };
  /** 高度拖拽手柄 props */
  heightHandleProps: {
    onMouseDown: (e: React.MouseEvent) => void;
  };
}

/**
 * 可拖拽调整尺寸的 Hook
 */
export const useResize = (options: UseResizeOptions): UseResizeReturn => {
  const {
    defaultWidth = '100%',
    defaultHeight = 400,
    minWidth = 200,
    maxWidth,
    minHeight = 150,
    maxHeight,
    onResize,
  } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // 尺寸状态（初始宽度为 0，挂载后计算）
  const [size, setSize] = useState({
    width: typeof defaultWidth === 'number' ? defaultWidth : 0,
    height: defaultHeight,
  });

  // 拖拽状态
  const [resizeState, setResizeState] = useState<ResizeState>({
    isResizing: false,
    direction: null,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
  });

  // 初始化宽度（处理百分比情况）
  useEffect(() => {
    if (isInitialized) return;
    if (typeof defaultWidth === 'number') {
      setSize((prev) => ({ ...prev, width: defaultWidth }));
      setIsInitialized(true);
      return;
    }

    // 百分比宽度需要等 ref 挂载后计算
    const calculateWidth = () => {
      if (!containerRef.current) return;

      const parentWidth = containerRef.current.parentElement?.clientWidth || 800;
      let initialWidth: number;

      if (typeof defaultWidth === 'string' && defaultWidth.endsWith('%')) {
        const percent = parseFloat(defaultWidth) / 100;
        initialWidth = parentWidth * percent;
      } else {
        initialWidth = parentWidth;
      }

      setSize((prev) => ({ ...prev, width: initialWidth }));
      setIsInitialized(true);
    };

    // 使用 requestAnimationFrame 确保 DOM 已挂载
    const rafId = requestAnimationFrame(calculateWidth);
    return () => cancelAnimationFrame(rafId);
  }, [defaultWidth, isInitialized]);

  // 开始拖拽宽度
  const handleWidthMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setResizeState({
        isResizing: true,
        direction: 'horizontal',
        startX: e.clientX,
        startY: 0,
        startWidth: size.width,
        startHeight: size.height,
      });
    },
    [size]
  );

  // 开始拖拽高度
  const handleHeightMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setResizeState({
        isResizing: true,
        direction: 'vertical',
        startX: 0,
        startY: e.clientY,
        startWidth: size.width,
        startHeight: size.height,
      });
    },
    [size]
  );

  // 处理拖拽移动和结束
  useEffect(() => {
    if (!resizeState.isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { direction, startX, startY, startWidth, startHeight } = resizeState;

      if (direction === 'horizontal') {
        const deltaX = e.clientX - startX;
        let newWidth = startWidth + deltaX;

        // 应用宽度限制
        newWidth = Math.max(newWidth, minWidth);
        if (maxWidth !== undefined) {
          newWidth = Math.min(newWidth, maxWidth);
        }

        setSize((prev) => ({ ...prev, width: newWidth }));
      }

      if (direction === 'vertical') {
        const deltaY = e.clientY - startY;
        let newHeight = startHeight + deltaY;

        // 应用高度限制
        newHeight = Math.max(newHeight, minHeight);
        if (maxHeight !== undefined) {
          newHeight = Math.min(newHeight, maxHeight);
        }

        setSize((prev) => ({ ...prev, height: newHeight }));
      }
    };

    const handleMouseUp = () => {
      setResizeState((prev) => ({
        ...prev,
        isResizing: false,
        direction: null,
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizeState, minWidth, maxWidth, minHeight, maxHeight]);

  // 拖拽结束时触发回调
  useEffect(() => {
    if (resizeState.isResizing) return;
    if (size.width === 0) return;

    onResize?.({ width: size.width, height: size.height });
  }, [resizeState.isResizing, size, onResize]);

  return {
    width: size.width,
    height: size.height,
    isInitialized,
    isResizing: resizeState.isResizing,
    containerRef,
    widthHandleProps: { onMouseDown: handleWidthMouseDown },
    heightHandleProps: { onMouseDown: handleHeightMouseDown },
  };
};
