"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Code2, CheckCircle } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { aiTools } from "@/data/aiTools";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Bot: Bot,
  MessageSquare: MessageSquare,
  Code2: Code2,
};

export function AICapability() {
  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="AI 工具应用能力"
          subtitle="善用AI工具提升效率与创造力"
          light
        />

        <div className="grid md:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Bot;
            
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6">{tool.description}</p>

                {/* Use Cases */}
                <div className="space-y-3">
                  {tool.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm">
            将AI工具视为得力助手，而非替代品。关键在于提出好问题、批判性思考与有效整合。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
