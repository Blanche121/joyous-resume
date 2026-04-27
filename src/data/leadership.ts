/**
 * 校园与组织经历数据
 * 
 * 修改此文件即可更新校园经历展示
 */

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export const leadershipExperiences: Leadership[] = [
  {
    id: "leadership-0",
    title: "学生代表",
    organization: "香港中文大学（深圳）学代会",
    startDate: "2023年10月",
    endDate: "2024年5月",
    responsibilities: [
      "加入厚含书院建设议题小组，参与新书院建设工作",
      "与书院入住商家沟通，说服天猫超市引入热食，成功解决书院学生来不及吃早餐问题",
      "加入校巴运营与大运专线议题小组，主要负责解决校巴线路更新问题",
      "通过问卷制作与数据统计，协助学校建立学校——大运站两点巴士专线",
      "荣获2023-2024年度优秀学生代表"
    ]
  },
  {
    id: "leadership-1",
    title: "厚含书院班长",
    organization: "香港中文大学（深圳）厚含书院",
    startDate: "2023年9月",
    endDate: "至今",
    responsibilities: [
      "组织班级活动，处理学生事务",
      "协调师生沟通，反馈学生需求",
      "多次处理紧急状况，培养应变能力"
    ]
  },
  {
    id: "leadership-2",
    title: "学生组织秘书",
    organization: "数据科学学院学生组织",
    startDate: "2024年9月",
    endDate: "至今",
    responsibilities: [
      "撰写中英双语通知及正式邮件",
      "处理学生信息与管理文档",
      "协调跨部门沟通与活动组织",
      "制定工作流程，提升组织效率"
    ]
  }
];
