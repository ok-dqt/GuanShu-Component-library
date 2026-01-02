export enum ComponentCategory {
  BUSINESS = '业务组件',
  DATA_DISPLAY = '数据展示',
  BASIC = '基础组件',
  LAYOUT = '布局组件',
  FORM = '表单组件',
  FEEDBACK = '反馈组件',
}

export interface PropDefinition {
  name: string;
  description: string;
  type: string;
  default?: string;
}

/**
 * AI 使用指南
 * 用于指导 AI 正确理解和使用组件
 */
export interface AIGuidance {
  /** 适用场景 - 什么时候应该使用这个组件 */
  whenToUse: string[];
  /** 不适用场景 - 什么时候不应该使用，应该用什么替代 */
  whenNotToUse?: string[];
  /** 关键约束 - 必须遵守的规则和限制 */
  constraints?: string[];
  /** 组合建议 - 常与哪些组件搭配使用 */
  compositionWith?: string[];
  /** 常见错误 - 需要避免的陷阱 */
  commonMistakes?: string[];
  /** 性能提示 - 大数据量或复杂场景的优化建议 */
  performanceTips?: string[];
}

export interface ComponentInfo {
  id: string;
  name: string;
  cnName: string;
  category: ComponentCategory;
  description: string;
  component: React.ComponentType<any>;
  propsDefinition: PropDefinition[];
  codeSnippet: string;
  /** AI 使用指南 - 帮助 AI 正确使用组件 */
  aiGuidance?: AIGuidance;
}
