"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import FloatingNav from "./components/ui/FloatingNav";
import Hero from "./components/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Gallery from "./components/sections/Gallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

gsap.registerPlugin(ScrollTrigger);

// NOTE: Place your MP4 file in the public folder as /background.mp4

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themePreference, setThemePreference] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const toggleTheme = () => {
    const newTheme = themePreference === "dark" ? "light" : "dark";
    setThemePreference(newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  const navItems = [
    { id: "hero", name: "Home", icon: "🏠" },
    { id: "about", name: "About", icon: "👨‍💻" },
    { id: "experience", name: "Experience", icon: "💼" },
    { id: "projects", name: "Projects", icon: "🚀" },
    // { id: "gallery", name: "Gallery", icon: "🖼️" }, // Gallery hidden
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const pos =
      el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: pos, behavior: "smooth" });
  };

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navItems[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP Hero intro
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });
    tl.from("#hero .hero-title", { y: 60, opacity: 0 })
      .from("#hero .hero-subtitle", { y: 40, opacity: 0 }, "-=0.4")
      .from("#hero .hero-button", { scale: 0.6, opacity: 0 }, "-=0.5");
  }, []);

  // GSAP Section animations
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      });
      const items = section.querySelectorAll(".animate-item");
      if (items.length) {
        gsap.from(items, {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 70%" },
        });
      }
    });
  }, []);

  // Nav hover effect
  useEffect(() => {
    navItems.forEach((item) => {
      const navEl = document.querySelector(`#nav-${item.id}`);
      if (!navEl) return;
      navEl.addEventListener("mouseenter", () =>
        gsap.to(navEl, { scale: 1.1, duration: 0.3 })
      );
      navEl.addEventListener("mouseleave", () =>
        gsap.to(navEl, { scale: 1, duration: 0.3 })
      );
    });
  }, []);

  // Spotlight cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Gradient overlay - reduced opacity for better video visibility
  const overlayStyle = {
    background: isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
    position: "absolute",
    inset: 0,
    zIndex: 1,
    transition: "background 0.5s ease",
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient opacity-30" />

      {/* Fullscreen video background */}
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-50"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Semi-transparent overlay for content contrast */}
      <div style={overlayStyle} />

      {/* Spotlight cursor effect */}
      <div
        className="spotlight"
        style={{
          '--x': `${mousePosition.x}%`,
          '--y': `${mousePosition.y}%`
        } as React.CSSProperties}
      />

      {/* Premium grain texture overlay */}
      <div className="grain" />

      {/* Floating particles/orbs */}
      <div className="fixed inset-0 pointer-events-none z-1 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-zinc-50">
        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <FloatingNav
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isDarkMode={isDarkMode}
        />

        <section id="hero" className="scroll-mt-20 relative animate-item">
          <Hero isDarkMode={isDarkMode} />
        </section>
        <ScrollProgress isDarkMode={isDarkMode} />

        <section id="about" className="relative scroll-mt-20 animate-item">
          <About isDarkMode={isDarkMode} />
        </section>

        <section id="experience" className="relative scroll-mt-20 animate-item">
          <Experience isDarkMode={isDarkMode} />
        </section>

        <section id="projects" className="relative scroll-mt-20 animate-item">
          <Projects isDarkMode={isDarkMode} />
        </section>

        <Footer isDarkMode={isDarkMode} />
      </div>
      <SpeedInsights />
      <Analytics/>
    </div>
  );
}
