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
          <IconComponent
            size={48}
            className="text-zinc-900/30 dark:text-zinc-300/20"
          />
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
          href="#"
          className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 transition-colors"
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

  const linePattern = {
    backgroundImage: `repeating-linear-gradient(315deg, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 0, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 1px, transparent 1px, transparent 10%)`,
    backgroundSize: "10px 10px",
  };

  const projects = [
    {
      title: "Odoo Inventory Extension",
      description:
        "Custom Odoo module that extends inventory management with advanced forecasting capabilities and integrates with external logistics systems.",
      technologies: ["Odoo", "Python", "XML", "PostgreSQL"],
      icon: Code,
      pattern: dotPattern,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "React Admin Dashboard",
      description:
        "Comprehensive admin dashboard built with React, Tailwind CSS, and integrated with RESTful APIs for real-time data visualization and management.",
      technologies: ["React", "Tailwind", "Chart.js", "REST API"],
      icon: Layout,
      pattern: linePattern,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AI-Powered Chat Application",
      description:
        "Real-time chat application with AI-assisted responses, multi-language support, and end-to-end encryption for secure communications.",
      technologies: ["Next.js", "Socket.io", "OpenAI API", "MongoDB"],
      icon: MessageSquare,
      pattern: dotPattern,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with inventory management, payment processing, and customer relationship tools for small businesses.",
      technologies: ["Odoo", "Python", "Stripe API", "PostgreSQL"],
      icon: Briefcase,
      pattern: linePattern,
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

      <div className="mt-8 text-center">
        <Button variant="primary" icon="arrow" href="#">
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;
