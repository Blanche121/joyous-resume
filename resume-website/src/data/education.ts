/**
 * 教育背景数据
 * 
 * 修改此文件即可更新教育背景信息
 */

// 教育经历
export interface Education {
  school: string;
  schoolEn?: string;
  degree: string;
  degreeEn?: string;
  major: string;
  majorEn?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses: string[];
  achievements?: string[];
}

export const education: Education[] = [
  {
    school: "香港中文大学（深圳）",
    schoolEn: "The Chinese University of Hong Kong, Shenzhen",
    degree: "理学学士",
    degreeEn: "Bachelor of Science",
    major: "数据科学与大数据技术",
    majorEn: "Data Science and Big Data Technology",
    startDate: "2023年9月",
    endDate: "2027年3月",
    gpa: "3.2/4.0",
    courses: [
      "Data Structures and Algorithms",
      "Probability and Statistics",
      "Machine Learning",
      "Database Systems",
      "Optimization",
      "AI Programming",
      "Operations Management",
      "Marketing Management",
      "Digital Marketing / Big Data Marketing"
    ]
  }
];
