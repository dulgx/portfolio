// src/app/components/sections/Projects.jsx - Featured Projects with Liquid Glass Cards
import React from "react";
import {
  Code,
  Layout,
  MessageSquare,
  Briefcase,
  Github,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import SkillTag from "../ui/SkillTag";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";

const ProjectCard = ({
  title,
  description,
  technologies,
  icon: IconComponent,
  pattern,
  githubUrl,
  liveUrl,
  isDarkMode,
}) => (
  <GlassCard isDarkMode={isDarkMode}>
    <div className="group">
      {/* Patterned header area */}
      <div className="h-48 relative overflow-hidden rounded-t-2xl">
        <div
          className="absolute inset-0"
          style={{ ...pattern, opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-zinc-900/40 dark:from-zinc-800/40 dark:to-zinc-950/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          {IconComponent && (
            <IconComponent
              size={48}
              className="text-zinc-900/30 dark:text-zinc-300/20"
            />
          )}
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {githubUrl && (
            <a
              href={githubUrl}
              className="p-2 bg-white/90 dark:bg-zinc-800/90 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="p-2 bg-white/90 dark:bg-zinc-800/90 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <SkillTag key={index} size="sm">
              {tech}
            </SkillTag>
          ))}
        </div>

        <a
          href={liveUrl || "#"}
          className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  </GlassCard>
);

const Projects = ({ isDarkMode }) => {
  const dotPattern = {
    backgroundImage: `radial-gradient(${
      isDarkMode ? "#27272A" : "#E4E4E7"
    } 1px, transparent 0)`,
    backgroundSize: "20px 20px",
  };

  const photoPattern = {
    backgroundImage: "url('/screenshot-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const stocklabPattern = {
    backgroundImage: "url('/screenshot-2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const projects = [
    {
      title: "React Intranet Employee Directory",
      description:
        "Independently developed and deployed an internal employee and file directory web application for the company’s internal use, reinforcing prior knowledge of web development and self-studying React JS and Tailwind CSS.",
      technologies: ["React", "Tailwind", "Chart.js", "REST API"],
      pattern: photoPattern,
      githubUrl: "#",
      liveUrl: "https://sendly-intranet-copy.vercel.app/",
    },
    {
      title: "Stocklab Web Mock",
      description:
        "Developed a mock web interface for Stocklab using React, Tailwind CSS, and Vite. The project demonstrates a modern, responsive UI and rapid prototyping capabilities, focusing on clean design and usability.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      pattern: stocklabPattern,
      githubUrl: "#",
      liveUrl: "https://dulgx.github.io/stocklab-main/",
    },
    {
      title: "Odoo Loan Module",
      description:
        "Created and developed new modules in the Odoo ERP system, automated loan operations, performed system improvements and maintenance, and fixed errors and bugs as part of the ongoing development process.",
      technologies: ["Odoo", "Python", "XML", "PostgreSQL"],
      icon: Code,
      pattern: dotPattern,
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="Featured Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
