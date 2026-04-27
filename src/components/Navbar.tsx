"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // 检测当前活动区域
      const sections = navigation.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-slate-800"
            >
              WSP
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-lg transition-colors",
                activeSection === item.href.replace("#", "")
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
