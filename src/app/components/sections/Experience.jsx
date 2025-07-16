// src/app/components/sections/Experience.jsx - Work Experience with Liquid Glass Cards
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard"; // use GlassCard for liquid glass effect
import SkillTag from "../ui/SkillTag";

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  isLatest = false,
  isDarkMode,
}) => (
  <div className="relative">
    {/* Timeline dot */}
    <div
      className={`absolute w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-700 -left-10 top-1 border-4 border-white dark:border-zinc-950`}
    />
    {/* Latest indicator */}
    {isLatest && (
      <div className="absolute w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-300 -left-9 top-2 animate-pulse" />
    )}

    <GlassCard isDarkMode={isDarkMode}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-2 md:mb-0">
          {title}{" "}
          <span className="text-zinc-600 dark:text-zinc-400 font-mono font-normal">
            @{company}
          </span>
        </h3>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono py-1 px-3 bg-zinc-100 dark:bg-zinc-800 rounded-full inline-flex items-center">
          {period}
        </p>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 text-base mb-4">
        {description}
      </p>

      <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 list-disc list-inside mb-4">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <SkillTag key={index} size="sm">
            {tech}
          </SkillTag>
        ))}
      </div>
    </GlassCard>
  </div>
);

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Developer",
      company: "Example Company",
      period: "2023 - Present",
      description:
        "Leading development of custom Odoo 16 modules and implementing full-stack solutions for enterprise clients.",
      achievements: [
        "Developed and maintained custom Odoo modules for inventory management and accounting",
        "Implemented RESTful API integrations with third-party services",
        "Optimized database queries, improving system performance by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript"],
      isLatest: true,
    },
    {
      title: "Junior Web Developer",
      company: "Tech Solutions",
      period: "2021 - 2023",
      description:
        "Focused on front-end development using React and back-end APIs using Python Flask.",
      achievements: [
        "Built responsive web interfaces for client applications",
        "Developed RESTful APIs with Python Flask",
        "Implemented authentication and authorization systems",
        "Participated in Agile development processes",
      ],
      technologies: ["React", "Flask", "JavaScript", "Python"],
      isLatest: false,
    },
  ];

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="Work Experience" />

      <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-12 before:absolute before:left-[-2px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-zinc-400 dark:before:via-zinc-600 before:to-transparent">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
