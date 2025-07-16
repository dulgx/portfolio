import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SkillTag from "../ui/SkillTag";

const ComponentShowcase = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-bold mb-4 font-sans text-zinc-900 dark:text-zinc-50">
      {title}
    </h3>
    <Card>{children}</Card>
  </div>
);

const Components = ({ isDarkMode }) => {
  const dotPattern = {
    backgroundImage: `radial-gradient(${
      isDarkMode ? "#27272A" : "#E4E4E7"
    } 1px, transparent 0)`,
    backgroundSize: "20px 20px",
  };

  return (
    <div className="px-4 py-8 md:p-8 max-w-4xl mx-auto">
      <SectionHeader title="UI Components" />

      <div className="space-y-12">
        {/* Buttons Section */}
        <ComponentShowcase title="Buttons">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
            <Button variant="primary" icon="arrow">
              Icon Button
            </Button>
          </div>
        </ComponentShowcase>

        {/* Cards Section */}
        <ComponentShowcase title="Cards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h4 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-50">
                Simple Card
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Basic card with title and content.
              </p>
            </Card>

            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
              <div
                className="h-32 bg-zinc-100 dark:bg-zinc-800 relative"
                style={dotPattern}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-zinc-400 dark:text-zinc-600 text-2xl">
                    📱
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-50">
                  Media Card
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Card with media section and content.
                </p>
              </div>
            </div>
          </div>
        </ComponentShowcase>

        {/* Form Elements */}
        <ComponentShowcase title="Form Elements">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-1">
                Input Field
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100"
                placeholder="Enter text here"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-1">
                Select Dropdown
              </label>
              <select className="w-full px-4 py-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 text-zinc-900 dark:text-zinc-100">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="h-4 w-4 text-zinc-900 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 rounded focus:ring-zinc-500 dark:focus:ring-zinc-400"
              />
              <label
                htmlFor="checkbox"
                className="ml-2 block text-sm text-zinc-900 dark:text-zinc-300"
              >
                Checkbox Option
              </label>
            </div>
          </div>
        </ComponentShowcase>

        {/* Typography */}
        <ComponentShowcase title="Typography & Tags">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
              Heading 2 (Sans-serif)
            </h4>
            <h5 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
              Heading 3 (Sans-serif)
            </h5>
            <h6 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 font-sans">
              Heading 4 (Sans-serif)
            </h6>
            <p className="text-base text-zinc-700 dark:text-zinc-300 font-sans">
              Regular paragraph text (Sans-serif)
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans">
              Small text (Sans-serif)
            </p>
            <code className="block text-base text-zinc-900 dark:text-zinc-200 font-mono bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
              Code block text (Monospace)
            </code>

            <div className="flex flex-wrap gap-2 pt-4">
              <SkillTag>React</SkillTag>
              <SkillTag>Python</SkillTag>
              <SkillTag>Next.js</SkillTag>
              <SkillTag size="sm">Small Tag</SkillTag>
            </div>
          </div>
        </ComponentShowcase>
      </div>
    </div>
  );
};

export default Components;
