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
      degree: "Japanese Language",
      institution: "Yu language academy - Tokyo",
      period: "2021 - 2023",
    },
    {
      degree: "Electrical Engineering",
      institution: "National University of Mongolia",
      period: "2016 - 2020",
    },
  ];

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
          Hi, I am a Software Developer with a background in Electronics
          Engineering and experience in Odoo ERP development and front-end
          development. I have worked with technologies like React JS, Python,
          and JavaScript, and I enjoy learning new tools to build efficient
          solutions. I am passionate about improving my skills and applying them
          to real-world projects, while solving challenges and working to make
          systems more scalable and effective.
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
