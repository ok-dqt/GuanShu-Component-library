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

export interface ComponentInfo {
  id: string;
  name: string;
  category: ComponentCategory;
  description: string;
  component: React.ComponentType<any>;
  propsDefinition: PropDefinition[];
  codeSnippet: string;
}
