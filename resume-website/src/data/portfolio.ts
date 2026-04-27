/**
 * 作品集数据
 * 
 * 修改此文件即可更新作品集展示
 * 分为 Data/Research 和 Game/Content 两个板块
 */

export interface PortfolioItem {
  id: string;
  category: "data" | "game";
  title: string;
  description: string;
  tags: string[];
  role?: string;
  thumbnail?: string;
  links?: {
    github?: string;
    demo?: string;
    pdf?: string;
    xhs?: string;
  };
  demoLabel?: string;
  pdfLabel?: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  // ========== Data / Research Portfolio ==========
  {
    id: "project-1",
    category: "data",
    title: "订阅计划对客户购买行为的影响研究",
    description: "基于回归分析与双重差分法，研究订阅计划对不同客户群体购买行为的异质效应，探讨用户分群视角下的消费行为差异。",
    tags: ["Python", "R", "回归分析", "DID", "用户分群"],
    role: "项目组组长",
    featured: true,
    links: {
      pdf: "/documents/MKT4220_Team2_Project_Report.pdf"
    },
    pdfLabel: "全英论文"
  },

  {
    id: "project-3",
    category: "data",
    title: "老年人风险评估与养老保险定制化推荐",
    description: "使用CodeBuddy开发的全栈项目，为老年人提供风险评估与个性化养老保险方案推荐。",
    tags: ["React", "Node.js", "AI Coding", "自动化工作流", "保险分析"],
    role: "全栈开发+AI Coding+自动化工作流",
    links: {
      demo: "https://silver-gaurd.netlify.app"
    },
    demoLabel: "SilverGaurd网站"
  },

  {
    id: "project-4",
    category: "data",
    title: "2026 MCM/ICM（美赛）| Problem D Sports Team Decision Modeling",
    description: "以 WNBA 球队经营为场景，构建融合动态规划、球员价值评估与优化决策的分析框架，量化竞技表现、商业价值与伤病风险对球队长期收益的影响。",
    tags: ["动态建模", "最优化", "情景模拟", "Python", "MySQL"],
    role: "数据建模",
    links: {
      pdf: "/documents/2628311.pdf"
    },
    pdfLabel: "美赛论文"
  },

  // ========== Game / Content Portfolio ==========
  {
    id: "xhs-1",
    category: "game",
    title: "小红书游戏内容账号",
    description: "专注恋与深空游戏内容创作，分享游戏日常与同人文产出。通过有温度的内容与粉丝互动，打造具有影响力的游戏社区账号。",
    tags: ["粉丝 650+", "获赞收藏 1.9万+"],
    featured: true,
    links: {
      xhs: "https://xhslink.com/m/92Gc3b10oVv",
      pdf: "/documents/账号运营思路.pdf"
    },
    pdfLabel: "下载附件（具体运营思路）"
  },
  {
    id: "fic-1",
    category: "game",
    title: "同人文创作节选",
    description: "至今同人文创作20万字+，持续活跃更新。附件为个人长篇同人文《星河散落》两章终章+番外《自星河归来》。",
    tags: ["同人文创作", "星河散落", "持续更新"],
    featured: true,
    links: {
      pdf: "/documents/同人文作品节选（《星河散落》46-47+《番外：自星河归来》）.pdf"
    },
    pdfLabel: "下载附件"
  },
  {
    id: "game-2",
    category: "game",
    title: "恋与深空游戏体验及内容洞察",
    description: "恋爱互动3D养成类游戏，2年高投入用户体验。分析付费用户行为模式与社区生态。",
    tags: ["用户洞察", "付费行为", "社区运营"],
    featured: true,
    links: {
      pdf: "/documents/恋与深空_玩家视角游戏分析.pdf"
    }
  },
  {
    id: "game-1",
    category: "game",
    title: "原神游戏体验与内容洞察",
    description: "Open World RPG，3年游戏经验，对角色养成、版本活动、地图探索有深入理解。从用户体验角度分析游戏设计。",
    tags: ["用户体验", "游戏分析", "内容理解"],
    featured: true,
    links: {
      pdf: "/documents/原神个人游戏体验.pdf"
    }
  }
];
