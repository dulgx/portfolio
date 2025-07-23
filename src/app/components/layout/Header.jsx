// src/app/components/layout/Header.jsx - Glassmorphism Liquid Glass UI
import React from "react";
import { Github, Sun, Moon } from "lucide-react";

const SocialLinks = ({ isDarkMode }) => (
  <>
    <a
      href="https://github.com/dulgx"
      className={`p-2 rounded-full ${
        isDarkMode
          ? "hover:bg-white/10 backdrop-blur-sm"
          : "hover:bg-black/5 backdrop-blur-sm"
      } transition-all duration-300 hover:scale-110`}
      aria-label="GitHub"
    >
      <Github
        size={18}
        className={
          isDarkMode
            ? "text-white/70 hover:text-white"
            : "text-black/70 hover:text-black"
        }
      />
    </a>

    <a
      href="https://www.linkedin.com/in/dulguun-p-69b06b180/"
      className={`p-2 rounded-full ${
        isDarkMode
          ? "hover:bg-white/10 backdrop-blur-sm"
          : "hover:bg-black/5 backdrop-blur-sm"
      } transition-all duration-300 hover:scale-110`}
      aria-label="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          isDarkMode
            ? "text-white/70 hover:text-white"
            : "text-black/70 hover:text-black"
        }
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>

    <a
      href="https://twitter.com/yourusername"
      className={`p-2 rounded-full ${
        isDarkMode
          ? "hover:bg-white/10 backdrop-blur-sm"
          : "hover:bg-black/5 backdrop-blur-sm"
      } transition-all duration-300 hover:scale-110`}
      aria-label="Twitter"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          isDarkMode
            ? "text-white/70 hover:text-white"
            : "text-black/70 hover:text-black"
        }
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </a>
  </>
);

const Header = ({
  isDarkMode,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  navItems = [],
  activeSection = "",
  scrollToSection = () => {},
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const useScrollNavigation = navItems.length > 0;
  const navigationItems = useScrollNavigation ? navItems : tabs || [];

  const handleNavigationClick = (item) => {
    if (useScrollNavigation) {
      scrollToSection(item.id);
    } else {
      setActiveTab(item.name);
    }
    setIsMenuOpen(false);
  };

  const isActive = (item) =>
    useScrollNavigation ? activeSection === item.id : activeTab === item.name;

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-3">
      {/* Glassmorphism Container */}
      <div
        className={`mx-auto max-w-7xl rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
          isDarkMode
            ? "bg-black/20 border-white/10 shadow-2xl shadow-black/20"
            : "bg-white/20 border-black/10 shadow-2xl shadow-black/5"
        }`}
      >
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => useScrollNavigation && scrollToSection("hero")}
            className="text-xl font-bold hover:scale-105 transition-all duration-300"
          >
            <span
              className={`font-sans ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Dulguun
            </span>
            <span className={isDarkMode ? "text-white/50" : "text-black/50"}>
              .
            </span>
          </button>

          {/* Desktop Navigation */}
          {navigationItems.length > 0 && (
            <nav className="hidden md:flex items-center">
              <div
                className={`flex items-center space-x-1 p-1 rounded-2xl backdrop-blur-md ${
                  isDarkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-black/5 border border-black/10"
                }`}
              >
                {navigationItems.map((item) => (
                  <button
                    key={useScrollNavigation ? item.id : item.name}
                    onClick={() => handleNavigationClick(item)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                      isActive(item)
                        ? isDarkMode
                          ? "bg-white/20 text-white shadow-lg backdrop-blur-md"
                          : "bg-black/20 text-black shadow-lg backdrop-blur-md"
                        : isDarkMode
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-black/70 hover:text-black hover:bg-black/10"
                    }`}
                    aria-current={isActive(item) ? "page" : undefined}
                  >
                    {/* Liquid gradient pulse */}
                    {isActive(item) && (
                      <div
                        className={`absolute inset-0 rounded-xl ${
                          isDarkMode
                            ? "bg-gradient-to-r from-white/10 to-white/5"
                            : "bg-gradient-to-r from-black/10 to-black/5"
                        } animate-pulse`}
                      />
                    )}
                    <span className="relative z-10">
                      {useScrollNavigation ? (
                        <>
                          <span>{item.name}</span>
                        </>
                      ) : (
                        <>
                          <span>{item.name}</span>
                        </>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Social Links */}
            <div
              className={`hidden sm:flex items-center space-x-1 p-1 rounded-2xl backdrop-blur-md ${
                isDarkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-black/5 border border-black/10"
              }`}
            >
              <SocialLinks isDarkMode={isDarkMode} />
            </div>

            {/* Theme Toggle */}
            {/*
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "bg-white/10 border-white/20 hover:bg-white/20"
                  : "bg-black/10 border-black/20 hover:bg-black/20"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun
                  size={18}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                />
              ) : (
                <Moon
                  size={18}
                  className="text-black/70 hover:text-black transition-colors duration-300"
                />
              )}
            </button>
            */}

            {/* Mobile Menu Toggle */}
            {navigationItems.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-3 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                    : "bg-black/10 border-black/20 hover:bg-black/20"
                }`}
                aria-label="Toggle menu"
              >
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : ""
                  } ${isDarkMode ? "text-white/70" : "text-black/70"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {navigationItems.length > 0 && isMenuOpen && (
          <div
            className={`md:hidden mt-3 p-4 rounded-2xl backdrop-blur-md border-t transition-all duration-300 ${
              isDarkMode
                ? "bg-black/20 border-white/10"
                : "bg-white/20 border-black/10"
            }`}
          >
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={useScrollNavigation ? item.id : item.name}
                  onClick={() => handleNavigationClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm ${
                    isActive(item)
                      ? isDarkMode
                        ? "bg-white/20 text-white shadow-lg"
                        : "bg-black/20 text-black shadow-lg"
                      : isDarkMode
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-black/70 hover:text-black hover:bg-black/10"
                  }`}
                >
                  {useScrollNavigation ? (
                    <>
                      <span>{item.name}</span>
                    </>
                  ) : (
                    <>
                      <span>{item.name}</span>
                    </>
                  )}
                </button>
              ))}
            </div>
            <div
              className={`mt-4 pt-4 border-t flex items-center justify-center space-x-3 ${
                isDarkMode ? "border-white/10" : "border-black/10"
              }`}
            >
              <SocialLinks isDarkMode={isDarkMode} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
