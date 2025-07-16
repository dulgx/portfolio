import React from "react";

const SkillTag = ({
  children,
  size = "md",
  variant = "default",
  className = "",
  onClick,
  href,
}) => {
  const baseClasses =
    "inline-flex items-center font-mono border transition-colors";

  const sizes = {
    xs: "px-2 py-0.5 text-xs rounded",
    sm: "px-2 py-1 text-xs rounded",
    md: "px-3 py-1.5 text-sm rounded-full",
    lg: "px-4 py-2 text-base rounded-full",
  };

  const variants = {
    default:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600",
    primary:
      "bg-zinc-900 dark:bg-zinc-700 text-zinc-50 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600",
    secondary:
      "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-600",
    outline:
      "bg-transparent text-zinc-900 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    success:
      "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
    warning:
      "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
    danger:
      "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800",
  };

  const clickableClasses =
    onClick || href ? "cursor-pointer hover:scale-105" : "";

  const classes = `${baseClasses} ${sizes[size]} ${variants[variant]} ${clickableClasses} ${className}`;

  const content = children;

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return <span className={classes}>{content}</span>;
};

export default SkillTag;
