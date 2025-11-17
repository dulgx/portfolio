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
      className={`relative p-6 md:p-8 rounded-2xl ${bgOpacity} ${borderColor} border backdrop-blur-2xl shadow-xl overflow-hidden`}
    >
      {/* Shine highlights for extra liquid-glass look with subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/20 rounded-full filter blur-2xl animate-pulse-slow" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-8 -right-12 w-32 h-32 bg-white/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      {/* Content sits above the shine layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
