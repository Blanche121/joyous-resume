"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Heart, Send } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { profile } from "@/data/profile";
import { contact, contactTagline } from "@/data/contact";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Phone: Phone,
  Mail: Mail,
  MessageCircle: MessageCircle,
  Xiaohongshu: Heart,
};

export function Contact() {
  const contactItems = [
    { ...contact.phone, type: "phone" as const },
    { ...contact.email, type: "email" as const },
    { ...contact.wechat, type: "wechat" as const },
    { ...contact.xiaohongshu, type: "xiaohongshu" as const },
  ].filter((item) => item.show);

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="联系方式"
          subtitle="期待与您交流"
        />

        <div className="max-w-3xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              {contactTagline}
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, index) => {
              const iconKey = item.icon || "Mail";
              const Icon = iconMap[iconKey] || Mail;
              
              return (
                <motion.a
                  key={item.type}
                  href={item.link || (item.type === "phone" ? `tel:${item.value}` : item.type === "email" ? `mailto:${item.value}` : undefined)}
                  target={item.link?.startsWith("http") ? "_blank" : undefined}
                  rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-500 capitalize">{item.label || item.type}</p>
                    <p className="text-slate-800 font-medium truncate">{item.value}</p>
                  </div>
                  <Send size={16} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.a>
              );
            })}
          </div>

          {/* Availability Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              目前可联系，最早可实习时间：{profile.earliestStartDate}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
