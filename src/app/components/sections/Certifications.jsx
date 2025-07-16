import React from "react";
import { Award, ChevronRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const CertificationCard = ({
  title,
  issueDate,
  description,
  certificateUrl,
}) => (
  <Card>
    <div className="flex items-start mb-4">
      <div className="mr-4 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <Award size={24} className="text-zinc-900 dark:text-zinc-300" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono">
          Issued {issueDate}
        </p>
      </div>
    </div>
    <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
    <a
      href={certificateUrl}
      className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 transition-colors"
    >
      View Certificate <ChevronRight size={16} className="ml-1" />
    </a>
  </Card>
);

const Certifications = ({ isDarkMode }) => {
  const certifications = [
    {
      title: "Odoo Certified Developer",
      issueDate: "Aug 2023",
      description:
        "Comprehensive certification for Odoo ERP framework, covering modules, ORM, business logic, and UI development.",
      certificateUrl: "#",
    },
    {
      title: "AWS Certified Developer",
      issueDate: "Feb 2023",
      description:
        "Expertise in developing, deploying, and debugging cloud-based applications using AWS services.",
      certificateUrl: "#",
    },
    {
      title: "Full Stack Web Development",
      issueDate: "Oct 2022",
      description:
        "Comprehensive certification covering front-end technologies, back-end development, and database management.",
      certificateUrl: "#",
    },
    {
      title: "Python Professional",
      issueDate: "May 2022",
      description:
        "Advanced Python programming certification covering OOP, functional programming, and advanced Python features.",
      certificateUrl: "#",
    },
  ];

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
