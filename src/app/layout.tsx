import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "吴思芃 | 数据科学与大数据技术 | 个人简历",
  description: "香港中文大学（深圳）数据科学本科生，专注于数据分析、商业分析与AI工具应用。兼具技术能力与游戏内容洞察力。",
  keywords: ["个人简历", "数据科学", "数据分析", "商业分析", "香港中文大学深圳", "Portfolio"],
  authors: [{ name: "吴思芃" }],
  openGraph: {
    title: "吴思芃 | 个人简历网站",
    description: "数据科学本科生，专注于数据分析与商业分析",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
