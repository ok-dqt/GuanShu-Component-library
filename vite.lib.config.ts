import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * 组件库构建配置
 * 用于构建可被其他项目引用的组件库
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GuanshuComponentLibrary',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // 外部化依赖，不打包到组件库中
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'antd',
        '@ant-design/icons',
        'dayjs',
        // 排除 demo 文件
        /\/demo\//,
      ],
      output: {
        // 保持 CSS 文件名
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return assetInfo.name || 'assets/[name]-[hash][extname]';
        },
        // 保持模块结构，便于 tree-shaking
        preserveModules: false,
      },
    },
    // 生成 sourcemap 便于调试
    sourcemap: true,
    // 清空输出目录
    emptyOutDir: true,
  },
});
