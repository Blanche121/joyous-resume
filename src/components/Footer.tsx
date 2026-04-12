"use client";

import { Heart, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Name & Tagline */}
          <div>
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            <p className="text-slate-400 text-sm">{profile.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              快速链接
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  关于我
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  作品集
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  联系方式
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              社交媒体
            </h4>
            <div className="flex space-x-4">
              {contact.xiaohongshu.show && (
                <a
                  href={contact.xiaohongshu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="小红书"
                >
                  <Heart size={20} />
                </a>
              )}
              {contact.email.show && (
                <a
                  href={contact.email.link}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="mt-1">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
