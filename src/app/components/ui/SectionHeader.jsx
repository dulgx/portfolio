import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  description,
  className = "",
  alignment = "left",
  showDecorator = true,
  decoratorColor = "zinc",
}) => {
  const linePattern = {
    backgroundImage: `repeating-linear-gradient(315deg, rgba(63, 63, 70, 0.1) 0px, rgba(63, 63, 70, 0.1) 1px, transparent 1px, transparent 10%)`,
    backgroundSize: "10px 10px",
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const decoratorColors = {
    zinc: "bg-zinc-800 dark:bg-zinc-700",
    blue: "bg-blue-600 dark:bg-blue-500",
    green: "bg-green-600 dark:bg-green-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    red: "bg-red-600 dark:bg-red-500",
  };

  return (
    <div
      className={`relative mb-12 ${alignmentClasses[alignment]} ${className}`}
    >
      {/* Decorative Background Pattern */}
      {showDecorator && (
        <div
          className="absolute top-0 left-0 -ml-2 -mt-2 h-20 w-20 rounded-md bg-zinc-800/10 dark:bg-zinc-800/20"
          style={linePattern}
        ></div>
      )}

      {/* Main Title */}
      <h2 className="relative text-3xl md:text-4xl font-bold font-sans mb-4 text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <h3 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-4">
          {subtitle}
        </h3>
      )}

      {/* Decorative Line */}
      {showDecorator && (
        <div
          className={`w-16 h-1 ${decoratorColors[decoratorColor]} rounded-full mb-6`}
        ></div>
      )}

      {/* Description */}
      {description && (
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

// Variant components for different use cases
export const PageHeader = ({ title, description, className = "" }) => (
  <SectionHeader
    title={title}
    description={description}
    alignment="center"
    decoratorColor="blue"
    className={`mb-16 ${className}`}
  />
);

export const FeatureHeader = ({ title, subtitle, className = "" }) => (
  <SectionHeader
    title={title}
    subtitle={subtitle}
    showDecorator={false}
    alignment="center"
    className={`mb-8 ${className}`}
  />
);

export default SectionHeader;
