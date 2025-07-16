import React, { useState, useEffect } from "react";

const ScrollProgress = ({ isDarkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-1 
        ${isDarkMode ? "bg-zinc-800" : "bg-gray-200"}
        z-50
      `}
    >
      <div
        className={`
          h-full transition-all duration-100 ease-out
          ${isDarkMode ? "bg-zinc-400" : "bg-zinc-600"}
        `}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
