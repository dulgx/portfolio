import React from "react";

const FloatingNav = ({
  navItems,
  activeSection,
  scrollToSection,
  isDarkMode,
}) => {
  return (
    <div
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block`}
    >
      <div
        className={`flex flex-col space-y-2 p-2 rounded-lg ${
          isDarkMode ? "bg-zinc-900/80" : "bg-white/80"
        } backdrop-blur-md border ${
          isDarkMode ? "border-zinc-800" : "border-zinc-200"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative p-2 rounded-md transition-all duration-200 ${
              activeSection === item.id
                ? isDarkMode
                  ? "bg-zinc-700 text-zinc-50"
                  : "bg-zinc-200 text-zinc-900"
                : isDarkMode
                ? "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
            title={item.name}
          >
            <span className="text-sm">{item.icon}</span>

            {/* Tooltip */}
            <div
              className={`absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                isDarkMode
                  ? "bg-zinc-800 text-zinc-200"
                  : "bg-zinc-700 text-zinc-100"
              }`}
            >
              {item.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNav;
