import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { theme, prefix } from '../src/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={theme}
      prefixCls={prefix}
      iconPrefixCls={prefix}
      locale={zhCN}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
