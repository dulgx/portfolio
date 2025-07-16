// src/app/components/layout/Layout.jsx
import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Code,
  Award,
  MessageSquare,
  Layout as LayoutIcon,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Basic Layout Component (without tabs)
const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themePreference, setThemePreference] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = themePreference === "dark" ? "light" : "dark";
    setThemePreference(newTheme);
    setIsDarkMode(newTheme === "dark");
    console.log(`Theme set to ${newTheme}`);
  };

  return (
    <div
      className={`
      ${isDarkMode ? "bg-zinc-950 text-zinc-50" : "bg-white text-zinc-950"} 
      min-h-screen transition-colors duration-300
    `}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative">{children}</main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

// Layout with Tab Navigation
const LayoutWithTabs = ({ children, renderTabContent }) => {
  const [activeTab, setActiveTab] = useState("About");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themePreference, setThemePreference] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: "About", icon: <User size={14} /> },
    { name: "Experience", icon: <Briefcase size={14} /> },
    { name: "Projects", icon: <Code size={14} /> },
    { name: "Certs", icon: <Award size={14} /> },
    { name: "Blog", icon: <MessageSquare size={14} /> },
    { name: "Components", icon: <LayoutIcon size={14} /> },
  ];

  const toggleTheme = () => {
    const newTheme = themePreference === "dark" ? "light" : "dark";
    setThemePreference(newTheme);
    setIsDarkMode(newTheme === "dark");
    console.log(`Theme set to ${newTheme}`);
  };

  const dotPattern = {
    backgroundImage: `radial-gradient(${
      isDarkMode ? "#27272A" : "#E4E4E7"
    } 1px, transparent 0)`,
    backgroundSize: "20px 20px",
  };

  return (
    <div
      className={`
      ${isDarkMode ? "bg-zinc-950 text-zinc-50" : "bg-white text-zinc-950"} 
      min-h-screen transition-colors duration-300
    `}
    >
      <Header
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section - children content */}
      {children}

      {/* Main Content with Tab System */}
      <main className="pt-8 pb-16 relative">
        <div className="absolute inset-0 opacity-30" style={dotPattern}></div>
        <div className="container mx-auto relative">
          {renderTabContent && renderTabContent(activeTab, isDarkMode)}
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

// Export both components
export { LayoutWithTabs };
export default Layout;
