import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  variant = "default",
  onClick,
}) => {
  const baseClasses =
    "bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm";

  const variants = {
    default: "",
    elevated: "shadow-md",
    outlined: "border-2",
    ghost: "bg-transparent shadow-none border-transparent",
  };

  const hoverClasses = hover
    ? "transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
    : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`
        ${baseClasses} 
        ${variants[variant]}
        ${hoverClasses}
        ${clickableClasses}
        ${padding}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Card Header Component
export const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

// Card Content Component
export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// Card Footer Component
export const CardFooter = ({ children, className = "" }) => (
  <div
    className={`mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 ${className}`}
  >
    {children}
  </div>
);

export default Card;
