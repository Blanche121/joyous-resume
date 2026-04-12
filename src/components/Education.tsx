"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

export function Education() {
  const edu = education[0];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="教育背景"
          subtitle="学术基础与专业知识"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-pink-500"></div>

            {/* Education Card */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/校园.png')" }}
                />

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-sky-50 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        <a 
                          href="https://www.cuhk.edu.cn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-sky-600 transition-colors"
                        >
                          {edu.school}
                        </a>
                      </h3>
                      <p className="text-slate-500 text-sm">{edu.schoolEn}</p>
                    </div>
                  </div>

                  {/* Degree & Major */}
                  <div className="mb-4">
                    <p className="text-slate-700">
                      <span className="font-semibold">{edu.degree}</span>
                      <span className="text-slate-400 mx-2">·</span>
                      <a 
                        href="https://sds.cuhk.edu.cn/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-sky-600 transition-colors"
                      >
                        {edu.major}
                      </a>
                    </p>
                    <p className="text-slate-500 text-sm">{edu.majorEn}</p>
                  </div>

                  {/* Date & GPA */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                      {edu.startDate} – {edu.endDate}
                    </span>
                    {edu.gpa && (
                      <span className="px-3 py-1 bg-green-50 rounded-full text-green-700 flex items-center gap-1">
                        <Award size={14} />
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Courses */}
                <div className="px-8 pb-8">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
                    核心课程
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, index) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-sky-50 to-pink-50 rounded-full text-sm text-slate-600 border border-slate-200"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
