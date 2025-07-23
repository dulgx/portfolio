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
    "inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-zinc-900 dark:bg-zinc-800 text-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-700 shadow-sm focus:ring-zinc-500 dark:focus:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:ring-zinc-500 dark:focus:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed",
    tertiary:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 shadow-sm focus:ring-zinc-500 dark:focus:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed",
    link: "text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 focus:ring-zinc-500 dark:focus:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:ring-zinc-500 dark:focus:ring-zinc-400",
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
