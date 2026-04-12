"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export function About() {
  const edu = education[0];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: Target,
      title: "专业定位",
      description: "专注于数据分析与商业分析，具备扎实的统计学基础与项目实践经验",
      href: "#exp-work-1"
    },
    {
      icon: Lightbulb,
      title: "独特视角",
      description: "兼具技术能力与内容洞察，对游戏产品、用户体验、内容生态有深入理解",
      href: "#portfolio"
    },
    {
      icon: Users,
      title: "协作能力",
      description: "丰富的校园组织经验，具备跨团队沟通与项目推进能力",
      href: "#leadership"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="关于我"
          subtitle="了解我的背景与定位"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-sky-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {edu.school}
              </h3>
              <p className="text-slate-600 mb-4">
                {edu.degree} · {edu.major}
              </p>
              <p className="text-sm text-slate-500 mb-6">
                {edu.startDate} – {edu.endDate}
              </p>
              
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
                  核心课程
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["数据结构与算法", "概率与统计", "机器学习", "数据库系统", "最优化", "AI编程", "运营管理", "市场营销管理", "数字营销", "大数据营销"].map(
                    (course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-sky-50 rounded-full text-sm text-sky-700 border border-sky-200"
                      >
                        {course}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => scrollToSection(item.href)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <item.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
