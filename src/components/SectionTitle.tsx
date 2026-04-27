"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", centered && "text-center")}
    >
      <h2
        className={cn(
          "text-3xl font-bold mb-3",
          light ? "text-white" : "text-slate-800"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={cn(
          "mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}
