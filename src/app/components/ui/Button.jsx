// ===== src/app/components/ui/Button.jsx =====
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  href,
  icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 text-white hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400 hover:scale-105 shadow-lg shadow-cyan-500/50 dark:shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/60 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed glow magnetic relative overflow-hidden",
    secondary:
      "border-2 border-cyan-500/50 dark:border-cyan-400/50 text-zinc-900 dark:text-zinc-100 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 hover:border-cyan-500 dark:hover:border-cyan-400 hover:scale-105 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed magnetic iridescent-border",
    tertiary:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 shadow-sm focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed magnetic",
    link: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 magnetic",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const iconMap = {
    arrow: ArrowRight,
    chevron: ChevronRight,
  };

  const IconComponent = icon ? iconMap[icon] : null;

  const content = (
    <>
      {IconComponent && iconPosition === "left" && (
        <IconComponent size={16} className="mr-2" />
      )}
      {children}
      {IconComponent && iconPosition === "right" && (
        <IconComponent size={16} className="ml-2" />
      )}
    </>
  );

  if (href && !disabled) {
    // Only add 'download' attribute if provided
    const { download, ...restProps } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download } : {})}
        {...restProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
