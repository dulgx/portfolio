// src/app/components/ui/GlassCard.jsx - Liquid Glass Container Component
import React from "react";

/**
 * GlassCard
 * A reusable container that applies an Apple-style liquid glass effect:
 * - Semi-transparent background
 * - Backdrop blur
 * - Subtle border
 * - Shine highlights
 */
const GlassCard = ({ isDarkMode, children }) => {
  // Enhanced background opacity for better glass effect
  const bgOpacity = isDarkMode ? "bg-white/10" : "bg-black/15";
  // Border color with better contrast
  const borderColor = isDarkMode ? "border-white/20" : "border-black/20";

  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl ${bgOpacity} ${borderColor} border backdrop-blur-2xl shadow-xl overflow-hidden shimmer card-tilt transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10`}
    >
      {/* Shine highlights for extra liquid-glass look with subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left glow with cyan tint */}
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-cyan-500/20 rounded-full filter blur-2xl animate-pulse-slow" />
        {/* Bottom-right glow with blue tint */}
        <div className="absolute -bottom-8 -right-12 w-32 h-32 bg-blue-500/15 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Center accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Subtle top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Content sits above the shine layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
