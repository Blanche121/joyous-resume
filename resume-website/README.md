# 个人简历网站 | Personal Portfolio Website

一个专业、现代、响应式的个人简历网站，基于 Next.js + TypeScript + Tailwind CSS 构建。

## 🎯 网站定位

- 在线专业作品集（Online Professional Portfolio）
- 面向导师、招聘方、潜在合作对象
- 展示教育背景、实习经历、研究项目、技能、作品集、游戏研究与内容分析能力

## ✨ 功能特点

- **组件化开发** - 清晰的组件结构，易于维护和扩展
- **数据驱动** - 所有内容从独立数据文件读取，只需修改数据文件即可更新内容
- **响应式设计** - 支持手机、平板、电脑等多种设备
- **流畅动效** - 使用 Framer Motion 实现优雅的交互动效
- **现代化设计** - 专业、简洁、现代的设计风格

## 🛠️ 技术栈

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 📁 项目结构

```
src/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页面
├── components/          # React 组件
│   ├── Navbar.tsx       # 导航栏
│   ├── Hero.tsx         # 首页首屏
│   ├── About.tsx        # 关于我
│   ├── Education.tsx    # 教育背景
│   ├── Experience.tsx   # 经历（实习+研究）
│   ├── Skills.tsx       # 技能模块
│   ├── Portfolio.tsx    # 作品集
│   ├── AICapability.tsx # AI能力
│   ├── Contact.tsx      # 联系方式
│   └── Footer.tsx       # 页脚
├── data/                # 数据文件（修改这里更新内容）
│   ├── profile.ts       # 基本信息
│   ├── education.ts     # 教育背景
│   ├── experience.ts    # 实习与研究经历
│   ├── skills.ts        # 技能
│   ├── portfolio.ts     # 作品集
│   ├── games.ts         # 游戏经历
│   ├── aiTools.ts       # AI工具
│   ├── leadership.ts    # 校园经历
│   └── contact.ts       # 联系方式
└── lib/
    └── utils.ts         # 工具函数
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 打开浏览器

访问 [http://localhost:3000](http://localhost:3000)

## 📝 如何更新内容

### 修改基本信息

编辑 `src/data/profile.ts`:

```typescript
export const profile = {
  name: "你的名字",
  nameEn: "Your Name",
  title: "职位/身份",
  // ...
};
```

### 修改教育背景

编辑 `src/data/education.ts`:

```typescript
export const education: Education[] = [
  {
    school: "学校名称",
    degree: "学位",
    major: "专业",
    startDate: "2020.09",
    endDate: "2024.06",
    courses: ["课程1", "课程2"],
    // ...
  }
];
```

### 修改经历

编辑 `src/data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: "unique-id",
    type: "work", // 或 "research"
    title: "职位",
    organization: "公司/组织",
    startDate: "2024.01",
    endDate: "2024.06",
    highlights: ["经历描述1", "经历描述2"],
    // ...
  }
];
```

### 修改作品集

编辑 `src/data/portfolio.ts`:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: "unique-id",
    category: "data", // 或 "game"
    title: "项目名称",
    description: "项目描述",
    tags: ["标签1", "标签2"],
    // ...
  }
];
```

### 添加个人照片

1. 将照片放入 `public/images/` 目录
2. 在 `src/data/profile.ts` 中修改 `avatarPath`:
   ```typescript
   avatarPath: "/images/your-photo.jpg"
   ```

## 🎨 自定义主题

在 `tailwind.config.ts` 中修改 Tailwind 配置来自定义颜色、字体等。

## 📱 响应式断点

- **手机**: < 640px
- **平板**: 640px - 1024px
- **电脑**: > 1024px

## 🔧 构建生产版本

```bash
npm run build
npm start
```

## 📄 License

MIT License
