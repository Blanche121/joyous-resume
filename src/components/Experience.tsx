"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, Calendar, MapPin } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { experiences } from "@/data/experience";
import type { Experience as ExperienceType } from "@/data/experience";
import { leadershipExperiences } from "@/data/leadership";
import { cn } from "@/lib/utils";

function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const getTypeColor = () => {
    switch (exp.type) {
      case "work": return { bg: "bg-sky-50", text: "text-sky-600", border: "hover:border-sky-200" };
      case "research": return { bg: "bg-purple-50", text: "text-purple-600", border: "hover:border-purple-200" };
      case "personal": return { bg: "bg-pink-50", text: "text-pink-600", border: "hover:border-pink-200" };
      default: return { bg: "bg-blue-50", text: "text-blue-600", border: "hover:border-blue-200" };
    }
  };

  const typeColors = getTypeColor();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all ${typeColors.border}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 ${typeColors.bg} rounded-lg`}>
            <Briefcase className={`w-5 h-5 ${typeColors.text}`} />
          </div>
          <div>
            {exp.titleLink ? (
              <a 
                href={exp.titleLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-sky-600 transition-colors flex items-center gap-1"
              >
                {exp.title}
                <span className="text-xs text-sky-500">↗</span>
              </a>
            ) : (
              <h4 className="font-semibold text-slate-800">{exp.title}</h4>
            )}
            <p className="text-slate-600 text-sm">{exp.organization}</p>
          </div>
        </div>
        <span className={`px-3 py-1 ${typeColors.bg} ${typeColors.text} rounded-full text-xs font-medium`}>
          {exp.type === "work" ? "实习" : exp.type === "research" ? "研究" : "个人"}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {exp.startDate} – {exp.endDate}
        </span>
        {exp.location && (
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {exp.location}
          </span>
        )}
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      {exp.technologies && exp.technologies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function LeadershipCard({ item, index }: { item: typeof leadershipExperiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-50 rounded-lg">
          <BookOpen className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{item.title}</h4>
          <p className="text-slate-600 text-sm">{item.organization}</p>
        </div>
      </div>

      <div className="flex gap-3 mb-4 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {item.startDate} – {item.endDate}
        </span>
      </div>

      <ul className="space-y-2">
        {item.responsibilities.map((resp, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Experience() {
  const workExperiences = experiences.filter((e) => e.type === "work");
  const researchExperiences = experiences.filter((e) => e.type === "research");
  const personalExperiences = experiences.filter((e) => e.type === "personal");

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="经历"
          subtitle="实习经历与研究项目"
        />

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-600" />
              实习经历
            </h3>
            <div className="grid gap-6">
              {workExperiences.map((exp, index) => (
                <div id={index === 0 ? "exp-work-1" : undefined} key={exp.id}>
                  <ExperienceCard exp={exp} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              研究项目
            </h3>
            <div className="grid gap-6">
              {researchExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Personal Experience */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-pink-600" />
              个人账号运营
            </h3>
            <div className="grid gap-6">
              {personalExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Leadership Experience */}
          <div id="leadership">
            <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              校园与组织经历
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipExperiences.map((item, index) => (
                <LeadershipCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
