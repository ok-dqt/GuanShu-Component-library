import { ThemeConfig } from 'antd';

/** Modal 基础层级，使用固定高值确保高于宿主页面 */
export const MODAL_Z_INDEX = 2000000000;

/** Message 层级，需高于 Modal 遮罩（遮罩默认 zIndex = Modal zIndex） */
export const MESSAGE_Z_INDEX = MODAL_Z_INDEX + 1000;

/**
 * 设计 Token - 颜色系统
 * 与主项目 xc-sealseek-extension-sycm 保持一致
 */
export const designTokens = {
  // 品牌色
  colors: {
    primary: '#2563EB', // 观数蓝 - blue/600
    primaryHover: '#3B82F6', // blue/500
    primaryActive: '#1D4ED8', // blue/700

    success: '#16A34A', // green/600
    warning: '#EA580C', // orange/600
    error: '#DC2626', // red/600
    info: '#2563EB', // blue/600
  },

  // 中性色
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // 文本色
  text: {
    primary: '#171717', // neutral/900
    secondary: '#737373', // neutral/500
    tertiary: '#A3A3A3', // neutral/400
    disabled: '#D4D4D4', // neutral/300
    inverse: '#FFFFFF',
  },

  // 背景色
  background: {
    page: '#FAFAFA', // neutral/50
    card: '#FFFFFF',
    hover: '#F5F5F5', // neutral/100
  },

  // 边框色
  border: {
    default: '#E5E5E5', // neutral/200
    light: '#F5F5F5', // neutral/100
  },

  // 字体
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      xs: 12,
      sm: 14,
      base: 14,
      lg: 15,
      xl: 20,
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // 间距
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },

  // 圆角
  borderRadius: {
    sm: 4,
    base: 6,
    lg: 12,
    full: 9999,
  },
};

// Ant Design 主题配置
const theme: ThemeConfig = {
  token: {
    // 品牌色
    colorPrimary: designTokens.colors.primary,
    colorSuccess: designTokens.colors.success,
    colorWarning: designTokens.colors.warning,
    colorError: designTokens.colors.error,
    colorInfo: designTokens.colors.info,

    // 中性色
    colorTextBase: designTokens.text.primary,
    colorTextSecondary: designTokens.text.secondary,
    colorTextTertiary: designTokens.text.tertiary,

    // 背景和边框
    colorBgBase: designTokens.background.page,
    colorBgContainer: designTokens.background.card,
    colorBorder: designTokens.border.default,

    // 基础样式
    borderRadius: designTokens.borderRadius.base,
  },

  components: {
    Button: {
      colorPrimary: designTokens.colors.primary,
      colorTextLightSolid: '#FFFFFF',
      defaultActiveBorderColor: designTokens.colors.primary,
      defaultActiveColor: designTokens.colors.primary,
      controlHeight: 30,
    },
    Segmented: {
      itemSelectedBg: designTokens.colors.primary,
      itemSelectedColor: '#FFFFFF',
      itemActiveBg: designTokens.colors.primary,
    },
    Table: {
      padding: 8,
    },
    Progress: {
      defaultColor: designTokens.colors.primary,
      colorSuccess: designTokens.colors.primary,
    },
  },
};

export const prefix = 'guanshu-antd';

export { theme };
