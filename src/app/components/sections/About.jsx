// src/app/components/sections/About.jsx - About Section with Liquid Glass Cards
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard"; // Liquid glass container component
import SkillTag from "../ui/SkillTag";

const About = ({ isDarkMode }) => {
  const skills = [
    "Odoo 16",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
    },
    {
      degree: "Full Stack Development Certification",
      institution: "Code Academy",
      period: "2022",
    },
  ];

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
          Full Stack Developer with expertise in{" "}
          <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-zinc-800 dark:text-zinc-300">
            Odoo 16
          </span>{" "}
          and modern web technologies. Passionate about creating elegant,
          user-friendly applications that solve real business problems.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I specialize in building robust business applications and responsive
          web interfaces. My approach combines technical excellence with a deep
          understanding of user needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Glass Card */}
        <GlassCard isDarkMode={isDarkMode}>
          <h3 className="font-semibold text-xl mb-4 font-sans text-zinc-900 dark:text-zinc-50">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <SkillTag key={idx}>{skill}</SkillTag>
            ))}
          </div>
        </GlassCard>

        {/* Education Glass Card */}
        <GlassCard isDarkMode={isDarkMode}>
          <h3 className="font-semibold text-xl mb-4 font-sans text-zinc-900 dark:text-zinc-50">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <p className="text-zinc-900 dark:text-zinc-100 font-medium font-sans">
                  {edu.degree}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm font-sans">
                  {edu.institution}
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default About;
