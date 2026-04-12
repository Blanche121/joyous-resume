/**
 * 技能数据
 * 
 * 修改此文件即可更新技能展示
 */

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "技术技能",
    icon: "Code",
    skills: ["Python", "SQL", "R", "Excel", "MATLAB"]
  },
  {
    title: "分析技能",
    icon: "BarChart3",
    skills: [
      "数据清洗",
      "结构化分析",
      "基础建模",
      "数据可视化",
      "商业洞察提取",
      "研究框架设计"
    ]
  },
  {
    title: "AI 工具",
    icon: "Sparkles",
    skills: ["CodeBuddy", "ChatGPT", "DeepSeek", "豆包", "GitHub Copilot"]
  },
  {
    title: "语言能力",
    icon: "Globe",
    skills: ["中文 (母语)", "English (IELTS 7.0)"]
  }
];
