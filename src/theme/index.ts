import { ThemeConfig } from 'antd';

/** Modal 基础层级，使用固定高值确保高于宿主页面 */
export const MODAL_Z_INDEX = 2000000000;

/** Message 层级，需高于 Modal 遮罩（遮罩默认 zIndex = Modal zIndex） */
export const MESSAGE_Z_INDEX = MODAL_Z_INDEX + 1000;

// 自定义主题 - Ant Design 蓝色系
const theme: ThemeConfig = {
  token: {
    // 品牌色 - Ant Design 官方蓝色
    colorPrimary: '#1677ff', // 主色 - Ant Design Blue
    colorSuccess: '#52c41a', // 成功色
    colorWarning: '#faad14', // 警告色
    colorError: '#ff4d4f', // 错误色
    colorInfo: '#1677ff', // 信息色

    // 中性色
    colorTextBase: 'rgba(0, 0, 0, 0.88)', // 基础文本色
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)', // 次要文本色
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)', // 辅助文本色

    // 背景和边框
    colorBgBase: '#f5f5f5', // 基础背景色
    colorBgContainer: '#ffffff', // 容器/卡片背景色
    colorBorder: '#d9d9d9', // 边框色

    // 基础样式
    borderRadius: 6, // 全局圆角
  },

  components: {
    Button: {
      colorPrimary: '#1677ff',
      colorTextLightSolid: '#ffffff',
      controlHeight: 32,
    },
    Segmented: {
      itemSelectedBg: '#1677ff', // 选中项背景色
      itemSelectedColor: '#ffffff', // 选中项文字色
      itemActiveBg: '#1677ff', // 滑块动画背景色
    },
    Table: {
      padding: 8,
    },
    Progress: {
      defaultColor: '#1677ff',
      colorSuccess: '#1677ff', // 100% 时也保持蓝色，不变绿
    },
  },
};

export const prefix = 'guanshu-antd';

export { theme };
