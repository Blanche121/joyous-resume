/**
 * AI工具应用能力数据
 * 
 * 修改此文件即可更新AI能力展示
 */

export interface AITool {
  name: string;
  icon: string;
  description: string;
  useCases: string[];
}

export const aiTools: AITool[] = [
  {
    name: "CodeBuddy",
    icon: "Bot",
    description: "AI编程助手，用于前后端开发、代码生成、功能迭代",
    useCases: [
      "老年人风险评估与养老保险定制化推荐网站",
      "前后端模块搭建",
      "代码生成与优化",
      "功能迭代与调试"
    ]
  },
  {
    name: "ChatGPT / DeepSeek / 豆包",
    icon: "MessageSquare",
    description: "通用AI助手，用于资料检索、信息整合、文本优化",
    useCases: [
      "学术资料检索与整理",
      "论文与报告撰写辅助",
      "PPT内容优化",
      "视觉内容创作辅助"
    ]
  },
  {
    name: "GitHub Copilot",
    icon: "Code2",
    description: "代码补全与辅助编程工具",
    useCases: [
      "代码片段生成",
      "Bug排查与调试",
      "缺陷分析与修改追踪",
      "代码重构建议"
    ]
  }
];
