/**
 * 个人简历网站 - 基本配置文件
 * 
 * 修改此文件即可更新网站的基本信息
 * 网站名称、身份标签、简介等
 */

// 个人基本信息
export const profile = {
  name: "吴思芃",
  nameEn: "Wusipeng",
  title: "数据科学本科生",
  subtitle: "数据分析 · 商业分析 · VibeCoding",
  subtitleExtra: "市场营销 · 运营管理",
  
  // 身份标签
  tags: [
    "Data Science Undergraduate",
    "Aspiring Data / Business Analyst",
    "VibeCoding Enthusiast",
    "Marketing & Operations"
  ],
  
  // 一句话简介
  summary: "香港中文大学（深圳）数据科学与大数据技术专业本科生，兼具数据分析能力与商业洞察力，专注于用数据驱动业务洞察与用户体验研究。资深游戏爱好者与深度社区参与者。",
  
  // 最早可实习时间
  earliestStartDate: "2026年5月",
  
  // 个人照片路径（放在 public/images 目录下）
  avatarPath: "/images/avatar.jpg",
  
  // GitHub 和 LinkedIn 占位
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourprofile"
};

// 导航栏配置
export const navigation = [
  { label: "首页", href: "#home" },
  { label: "关于我", href: "#about" },
  { label: "教育背景", href: "#education" },
  { label: "经历", href: "#experience" },
  { label: "技能", href: "#skills" },
  { label: "作品集", href: "#portfolio" },
  { label: "AI能力", href: "#ai" },
  { label: "联系方式", href: "#contact" }
];
