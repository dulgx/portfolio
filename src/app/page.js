"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import TabNav from "./components/layout/TabNav";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Stack from "./components/sections/Stack";
import Beyond from "./components/sections/Beyond";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="wrap">
      <TabNav />
      <header className="hero" id="hero">
        <Hero />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="beyond">
        <Beyond />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
