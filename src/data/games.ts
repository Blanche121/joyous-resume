/**
 * 游戏经历数据
 * 
 * 修改此文件即可更新游戏经历展示
 */

export interface Game {
  id: string;
  name: string;
  nameEn?: string;
  type: string;
  duration: string;
  level: string;
  description: string;
  insights: string[];
}

export const games: Game[] = [
  {
    id: "genshin",
    name: "原神",
    nameEn: "Genshin Impact",
    type: "Open World RPG",
    duration: "3年",
    level: "账号满级",
    description: "长期持续游玩，对角色养成、版本活动、地图探索有较深理解。从玩家视角研究游戏设计与内容更新策略。",
    insights: [
      "角色养成系统与资源管理",
      "版本活动设计分析",
      "开放世界探索体验",
      "内容更新与玩家留存"
    ]
  },
  {
    id: "love-from-afar",
    name: "恋与深空",
    nameEn: "Love and Deepspace",
    type: "恋爱互动 3D 养成类",
    duration: "2年",
    level: "账号满级，高投入用户",
    description: "高投入用户体验，深入了解付费用户行为模式与情感互动设计。",
    insights: [
      "3D互动技术应用",
      "付费用户行为分析",
      "情感化设计研究",
      "社区内容生态"
    ]
  },
  {
    id: "未定事件簿",
    name: "未定事件簿",
    nameEn: "未定事件簿",
    type: "律政推理养成类",
    duration: "2年",
    level: "长期体验角色卡面收集",
    description: "长期体验角色卡面收集，研究卡面设计与IP运营策略。",
    insights: [
      "卡面视觉设计分析",
      "律政题材叙事研究",
      "IP联动与运营策略",
      "角色商业化模式"
    ]
  },
  {
    id: "逆水寒",
    name: "逆水寒",
    nameEn: "Justice Online",
    type: "武侠 MMORPG",
    duration: "3年",
    level: "长期活跃玩家",
    description: "长期活跃玩家，对游戏社交、养成、日常活动和江湖玩法有深度体验。",
    insights: [
      "MMO社交系统设计",
      "武侠题材世界观构建",
      "日常活动与玩家粘性",
      "游戏经济系统分析"
    ]
  },
  {
    id: "minecraft",
    name: "我的世界",
    nameEn: "Minecraft",
    type: "Sandbox Game",
    duration: "5年",
    level: "长期玩家",
    description: "持续体验建造、生存、探索玩法，探索沙盒游戏的创意表达与UGC生态。",
    insights: [
      "沙盒游戏设计理念",
      "UGC内容生态",
      "创意表达与社区",
      "MOD与自定义内容"
    ]
  }
];
