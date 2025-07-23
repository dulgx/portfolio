// src/app/components/layout/Footer.jsx - Liquid Glass Footer Component
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

/**
 * Footer with Apple-style liquid glass effect:
 * - Semi-transparent background
 * - Backdrop blur
 * - Subtle border
 * - Shine highlights
 */
const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  const bgOpacity = isDarkMode ? "bg-white/10" : "bg-white/50";
  const borderColor = isDarkMode ? "border-white/20" : "border-black/10";

  return (
    <footer className="relative mt-12">
      {/* Shine highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/20 dark:bg-white/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/10 dark:bg-white/5 rounded-full filter blur-4xl" />
      </div>

      <div
        className={`relative px-4 py-8 backdrop-blur-xl border-t ${bgOpacity} ${borderColor} border transition-colors duration-300`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 md:mb-0">
            © {currentYear} Dulguun. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/dulgx"
              aria-label="GitHub"
              className="p-2 rounded-full transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <Github size={20} className="text-zinc-500 dark:text-zinc-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/dulguun-p-69b06b180/"
              aria-label="LinkedIn"
              className="p-2 rounded-full transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <Linkedin
                size={20}
                className="text-zinc-500 dark:text-zinc-400"
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              aria-label="Twitter"
              className="p-2 rounded-full transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <Twitter size={20} className="text-zinc-500 dark:text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
