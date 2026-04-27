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
    title: "投资部实习生（数据分析方向）",
    organization: "深创投",
    location: "深圳",
    startDate: "2025年5月",
    endDate: "2025年8月",
    highlights: [
      "数据整合：使用 Excel、Python、MySQL 整合仓储物流项目合同、行业资料及租赁数据，围绕租金单价、出租率等指标完成清洗与结构化处理，并对约 200份合同及资料开展异常值排查，识别租金异常、面积与金额不匹配问题。",
      "交叉验证与分析：基于 Wind、企查查、Excel、Python 对区域租金水平，空置率、股权结构等数据进行交叉验证结果呈现，支持项目研判并推动第一阶段分析提前一周完成。",
      "结果呈现：使用 Excel、Word、PPT 完成图表化展示与可视化汇报，围绕城市/园区对比、物流需求热度等输出 4页核心分析内容，用于项目汇报、方案沟通与管理层决策支持。"
    ],
    technologies: ["Excel", "Python", "SQL", "Wind", "企查查", "PowerPoint"]
  },
  {
    id: "research-1",
    type: "research",
    title: "项目组长（数据建模+可视化分析）",
    organization: "大数据营销 | 《订阅计划对客户购买行为的影响：跨不同群体的异质效应》",
    location: "香港中文大学（深圳）",
    startDate: "2025年9月",
    endDate: "2025年12月",
    highlights: [
      "数据处理：使用SQL + Python完成高维原始订单数据抽取、特征拼接与缺失值处理，并结合Random Forest进行机器学习加权，构建覆盖 24个月、1,000名用户数据集，使关键协变量的 SMD 降至 0.05 左右。",
      "因果建模：使用 Python 搭建 DID + 双向固定效应 + GRF/IPTW 分析框架，识别订阅计划对消费行为的影响，结果显示用户 总消费额提升 2.54、购买频次提升 0.23。",
      "数据可视化：基于Python构建 DDD + log-log OLS分群与价格敏感度模型，输出分组趋势图与增长率对比图，发现FMCG用户订阅后消费增长率和购买频次增长率分别达10.22% 和 8.95%，显著高于DCG用户。"
    ],
    technologies: ["Python", "R", "Stata", "Tableau"]
  },
  {
    id: "research-2",
    type: "research",
    title: "项目组长（数据整合+反向测试优化）",
    organization: "商业应用中的AI编程 | SilverShield 老年人保险智能推荐平台",
    location: "香港中文大学（深圳）",
    startDate: "2026年1月",
    endDate: "至今",
    highlights: [
      "数据清洗与规则设计：使用Python + MySQL主导多源保险产品数据的收集、清洗与结构化处理，设计基于规则的推荐逻辑，实现用户风险画像与保险产品的匹配，提升信息整合与筛选效率。",
      "AI 辅助开发与系统落地：结合 CodeBuddy 辅助前端界面搭建与功能开发，推动推荐系统的快速落地。",
      "结果验证与反向优化：负责 Demo 阶段的数据测试与结果分析，验证模型输出的合理性，并基于测试结果持续优化推荐策略与模型表现，增强推荐准确性和用户决策支持价值。"
    ],
    technologies: ["Python", "MySQL", "CodeBuddy"]
  },
  {
    id: "research-3",
    type: "research",
    title: "建模手 / 代码手",
    organization: "2026 MCM/ICM（美赛）| Problem D Sports Team Decision Modeling",
    location: "香港中文大学（深圳）",
    startDate: "2026年1月",
    endDate: "2026年2月",
    highlights: [
      "动态建模：使用 Python 基于 动态规划（Bellman Equation） 搭建球队多赛季决策模型，量化竞技表现、品牌价值与预算约束对长期收益的影响，并验证竞争强度与胜率在 β∈[0.05,0.25] 区间内稳定正相关。",
      "数据处理与指标构建：使用MySQL整合 2022–2025 赛季多源球队与球员数据，完成合并、筛选与缺失值填补，并基于 WS/40 + Logistic Model 构建球员竞争价值评估体系，校准得到 α=-1.7447、β=0.0825。",
      "优化分析：基于球员价值指标，使用 Python 构建 Mixed-Integer Programming 球员选择模型，在预算与阵容约束下实现最优配置；结果显示核心球员选择在商业权重 β∈[0,2] 范围内保持稳定，模型具备较强鲁棒性。",
      "情景分析：使用Python + Office对球队强度、胜率变化、参数敏感性及伤病冲击结果进行可视化展示，输出趋势图、敏感性曲线与情景模拟图；结果显示核心球员完全缺阵时，球队商业收入损失可达票务收入损失的 2.3 倍。"
    ],
    technologies: ["Python", "MySQL", "Office"]
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
