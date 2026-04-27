/**
 * 联系方式数据
 * 
 * 修改此文件即可更新联系方式
 * 注意：请根据需要选择是否公开敏感信息
 */

export interface ContactInfo {
  show: boolean;
  value: string;
  link?: string;
  icon: string;
  label?: string; // 显示标签
}

export interface Contact {
  phone: ContactInfo;
  email: ContactInfo;
  wechat: ContactInfo;
  xiaohongshu: ContactInfo;
}

export const contact: Contact = {
  phone: {
    show: true,
    value: "19200704947",
    icon: "Phone",
    label: "电话"
  },
  email: {
    show: true,
    value: "19200704947@163.com",
    link: "mailto:19200704947@163.com",
    icon: "Mail",
    label: "邮箱"
  },
  wechat: {
    show: true,
    value: "joyousWu808",
    icon: "MessageCircle",
    label: "微信"
  },
  xiaohongshu: {
    show: true,
    value: "小红书 · 18.8K 赞藏",
    link: "https://xhslink.com/m/92Gc3b10oVv",
    icon: "Xiaohongshu",
    label: "小红书"
  }
};

// 联系页面显示的欢迎语
export const contactTagline = "欢迎联系我进行交流合作，无论是数据分析项目、游戏研究讨论还是职业机会，我都很乐意与您沟通。";
