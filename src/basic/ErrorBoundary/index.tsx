import React, { Component, ErrorInfo, ReactNode } from 'react';
import './index.less';

export interface ErrorBoundaryProps {
  /** 子组件 */
  children: ReactNode;
  /** 自定义错误UI */
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * 错误边界
 *
 * 捕获组件树中的错误，显示降级 UI。
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        this.props.fallback || (
          <div className="error-boundary">
            <h3>出现错误</h3>
            <p>组件渲染时发生错误，请刷新页面重试。</p>
            <details style={{ marginTop: '10px' }}>
              <summary>错误详情</summary>
              <pre style={{ fontSize: '12px', marginTop: '10px' }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
