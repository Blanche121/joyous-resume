"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Gamepad2, ExternalLink, Code2, FileText, Download, MessageCircle } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type TabType = "data" | "game";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group cursor-pointer ${
        item.category === "data" ? "hover:border-sky-200" : "hover:border-pink-200"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "p-2 rounded-lg",
              item.category === "data" ? "bg-sky-50" : "bg-pink-50"
            )}
          >
            {item.category === "data" ? (
              <Database className="w-5 h-5 text-sky-600" />
            ) : item.links?.xhs ? (
              <MessageCircle className="w-5 h-5 text-pink-600" />
            ) : (
              <Gamepad2 className="w-5 h-5 text-pink-600" />
            )}
          </div>
          <div>
            <h4 className={`font-semibold text-slate-800 group-hover:text-sky-600 transition-colors ${
              item.category === "game" ? "group-hover:text-pink-600" : ""
            }`}>
              {item.title}
            </h4>
            {item.role && (
              <p className="text-slate-500 text-sm">{item.role}</p>
            )}
          </div>
        </div>
        {item.featured && (
          <span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-xs font-medium">
            精选
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "px-2 py-1 rounded text-xs",
              item.category === "data"
                ? "bg-sky-50 text-sky-600"
                : "bg-pink-50 text-pink-600"
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {item.links && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
          {item.links.xhs && (
            <a
              href={item.links.xhs}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors",
                item.category === "game"
                  ? "bg-pink-50 text-pink-600 hover:bg-pink-100"
                  : "bg-sky-50 text-sky-600 hover:bg-sky-100"
              )}
            >
              <MessageCircle size={14} />
              <span>小红书主页</span>
            </a>
          )}
          {item.links.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-sm"
            >
              <Code2 size={16} />
              <span>代码</span>
            </a>
          )}
          {item.links.demo && (
            <a
              href={item.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              <span>演示</span>
            </a>
          )}
          {item.links.pdf && (
            <a
              href={item.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors",
                item.category === "data"
                  ? "bg-sky-50 text-sky-600 hover:bg-sky-100"
                  : "bg-pink-50 text-pink-600 hover:bg-pink-100"
              )}
            >
              <Download size={14} />
              <span>{item.pdfLabel || "下载附件"}</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("data");

  const dataItems = portfolioItems.filter((item) => item.category === "data");
  const gameItems = portfolioItems.filter((item) => item.category === "game");

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="作品集"
          subtitle="数据分析项目与游戏内容洞察"
        />

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("data")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === "data"
                  ? "bg-white text-sky-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-800"
              )}
            >
              <Database size={18} />
              数据与研究
              <span className="text-xs text-slate-400 ml-1">Data</span>
            </button>
            <button
              onClick={() => setActiveTab("game")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === "game"
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-800"
              )}
            >
              <Gamepad2 size={18} />
              游戏与内容
              <span className="text-xs text-slate-400 ml-1">Game</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "data" &&
            dataItems.map((item) => <PortfolioCard key={item.id} item={item} />)}
          {activeTab === "game" &&
            gameItems.map((item) => <PortfolioCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
