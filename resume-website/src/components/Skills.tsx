"use client";

import { motion } from "framer-motion";
import { Code, BarChart3, Sparkles, Globe } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { skills, SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code: Code,
  BarChart3: BarChart3,
  Sparkles: Sparkles,
  Globe: Globe,
};

// 技能评分数据
const skillRatings: Record<string, number> = {
  Python: 8,
  SQL: 7,
  R: 7,
  Excel: 8,
  MATLAB: 7,
};

// 颜色配置
const barColors = [
  "bg-sky-500",      // 蓝色
  "bg-orange-400",   // 橙色
  "bg-rose-400",     // 红色
  "bg-emerald-400",  // 绿色
  "bg-pink-400",     // 粉色
];

function SkillBar({ skill, index }: { skill: string; index: number }) {
  const rating = skillRatings[skill] || 5;
  const percentage = (rating / 10) * 100;
  const color = barColors[index % barColors.length];

  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700">{skill}</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-default">
      {skill}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="技能"
          subtitle="专业能力与技术栈"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            const isTechnical = category.title === "技术技能";
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-slate-800 mb-4">{category.title}</h3>

                {/* Skills - 根据类型选择展示方式 */}
                {isTechnical ? (
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skill} skill={skill} index={skillIndex} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
