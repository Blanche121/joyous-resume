/**
 * 实习与研究经历数据
 * 
 * 修改此文件即可更新经历信息
 */

export interface Experience {
  id: string;
  type: "work" | "research" | "personal";
  title: string;
  titleLink?: string; // 可选的标题超链接
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "internship-1",
    type: "work",
    title: "投资部实习生",
    organization: "深创投不动产基金管理（深圳）有限公司",
    location: "深圳",
    startDate: "2025年5月",
    endDate: "2025年8月",
    highlights: [
      "参与仓储物流不动产基金项目原始权益人变更前期评估，使用Excel、Wind、企查查进行数据采集与信用分析，系统整理约200份合同及行业资料",
      "参与深创投与苏宁物流仓储物流基金退出项目的市场与项目分析，运用Python、SQL对仓库租赁数据进行整理分析与可视化，形成4页核心分析内容，支持退出方案研判与沟通"
    ],
    technologies: ["Excel", "Python", "SQL", "Wind", "企查查", "PowerPoint"]
  },
  {
    id: "research-1",
    type: "research",
    title: "研究项目组长",
    organization: "大学机器学习/商业分析研究项目",
    location: "香港中文大学（深圳）",
    startDate: "2025年9月",
    endDate: "2025年12月",
    highlights: [
      "课题：订阅计划对客户购买行为的影响：跨不同群体的异质效应",
      "负责项目推进与团队协调，主导研究框架设计与程序撰写",
      "围绕购买数量与购买频次构建分析模块，独立完成回归分析与双重差分分析",
      "从用户分群视角开展异质性研究，完成可视化分析与英文研究论文撰写"
    ],
    technologies: ["Python", "R", "Stata", "Tableau"]
  },
  {
    id: "personal-1",
    type: "personal",
    title: "小红书个人账号运营",
    titleLink: "https://xhslink.com/m/92Gc3b10oVv",
    organization: "小红书 · 深度游戏社区参与者",
    startDate: "2025年5月",
    endDate: "至今",
    highlights: [
      "多款游戏深度玩家和社区参与者",
      "仅半年时间小红书《恋与深空》相关账号粉丝数 600+，获赞与收藏数 1.8万+",
      "相关同人文作品浏览量累计 2 万+，获赞量累计 3000+"
    ]
  }
];
