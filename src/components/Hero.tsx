"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background: `
          linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #fce7f3 50%, #fbcfe8 75%, #f9a8d4 100%)
        `
      }}
    >
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blue circle top-left */}
        <div 
          className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)'
          }}
        />
        {/* Large pink circle bottom-right */}
        <div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
          }}
        />
        {/* Medium blue circle */}
        <div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
          }}
        />
        {/* Medium pink circle */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.3) 0%, transparent 70%)'
          }}
        />
        {/* Small decorative circles */}
        <div className="absolute top-1/4 right-1/6 w-4 h-4 rounded-full bg-sky-400 opacity-40" />
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-pink-400 opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-rose-300 opacity-25" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="px-3 py-1 text-sm bg-white/70 text-sky-700 rounded-full font-medium backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4"
            >
              你好，我是
              <span className="text-sky-600">
                {" "}{profile.name}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 mb-2"
            >
              {profile.subtitle}
            </motion.p>

            {/* Subtitle Extra */}
            {profile.subtitleExtra && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-lg text-slate-500 mb-6"
              >
                {profile.subtitleExtra}
              </motion.p>
            )}

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-600 mb-8 max-w-lg leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("#portfolio")}
                className="group px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-600/30"
              >
                查看作品集
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                联系我
              </button>
            </motion.div>

            {/* Available Date */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                最早可实习时间：{profile.earliestStartDate}
              </span>
            </motion.p>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Avatar Image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/images/avatar.jpg')",
                    backgroundPosition: "center 20%" // 向上偏移，展示头部和上半身
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/30 rounded-full blur-2xl"></div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 px-4 py-2 bg-white rounded-full shadow-lg"
              >
                <span className="text-sm font-medium text-slate-700">Data Science</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg"
              >
                <span className="text-sm font-medium text-slate-700">Game Insight</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
