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
      title: "Software Developer",
      company: "Sendly NBFI",
      period: "2024 - Present",
      description:
        "Created and developed new modules in the Odoo ERP system, automated loan operations, performed system improvements and maintenance, and fixed errors and bugs as part of the ongoing development process.",
      achievements: [
        "Used version control with GitHub, GitLab, and Azure DevOps for collaboration and maintaining code integrity.",
        "Streamlined loan data management by migrating manual entry and calculations from Excel to Odoo ERP. This included livestock loan research, Credit score processing, and loan calculations. The migration enabled automated calculation of loans, eligible amounts, and debt-to-income ratios etc.",
        "Focused on deepening knowledge in API integration, gateway connections, and database management, while also continuing to learn new and widely used programming languages and technologies.",
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript"],
      isLatest: true,
    },
    {
      title: "IT Specialist",
      company: "Sendly NBFI",
      period: "May 2023 - August 2024",
      description:
        "Managed and administered software systems at the permission level, including Active Directory domain management, email services, financial software, internal web applications, and Office 365.",
      achievements: [
        "Provided technical support, troubleshooting both hardware and software issues remotely and on-site, including at Ulaanbaatar and countryside branches.",
        "Ensured the stable and reliable operation of the network, performed network configuration, and adhered to information security policies.",
        "Reinforced prior knowledge of web development and self-studied React JS and Tailwind CSS. As a result, independently developed and deployed an internal employee and file directory web application for the company’s internal use.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Troubleshoot",
        "Hardware configuration",
        "Active Directory",
        "Office 365",
      ],
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
