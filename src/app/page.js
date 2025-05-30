"use client";

import Image from "next/image";
import ThreeDCard from "./components/3DCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  const dotPattern = {
    backgroundImage: `radial-gradient(${
      isDarkMode ? "#27272A" : "#E4E4E7"
    } 1px, transparent 0)`,
    backgroundSize: "20px 20px",
  };

  const linePattern = {
    backgroundImage: `repeating-linear-gradient(315deg, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 0px, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 1px, transparent 1px, transparent 10%)`,
    backgroundSize: "10px 10px",
  };

  const grid3DPattern = {
    backgroundImage: `linear-gradient(${
      isDarkMode ? "rgba(39, 39, 42, 0.1)" : "rgba(244, 244, 245, 0.1)"
    } 1px, transparent 1px),
      linear-gradient(90deg, ${
        isDarkMode ? "rgba(39, 39, 42, 0.1)" : "rgba(244, 244, 245, 0.1)"
      } 1px, transparent 1px),
      linear-gradient(${
        isDarkMode ? "rgba(39, 39, 42, 0.05)" : "rgba(244, 244, 245, 0.05)"
      } 1px, transparent 1px),
      linear-gradient(90deg, ${
        isDarkMode ? "rgba(39, 39, 42, 0.05)" : "rgba(244, 244, 245, 0.05)"
      } 1px, transparent 1px)`,
    backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
    transform: "perspective(500px) rotateX(60deg)",
    transformOrigin: "center top",
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-zinc-950 text-zinc-50" : "bg-white text-zinc-950"
      } min-h-screen transition-colors duration-300 relative overflow-hidden`}
    >
      <div className="absolute inset-0" style={dotPattern} />
      <div className="absolute inset-0" style={linePattern} />
      <div className="absolute inset-0" style={grid3DPattern} />
      <div className="relative z-10">
        <ThreeDCard
          className="w-full h-screen rounded-2xl"
          cardColor="white"
          ropeColor="silver"
          cardOpacity={0.8}
          gravity={-90}
          width={1.2}
          height={1.5}
          position={[2, 0, 0]}
          displayPosition={[0, 4, 0]}
        />
      </div>
    </div>
  );
}
