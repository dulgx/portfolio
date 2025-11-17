import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";
import profileImg from "../../../public/profile.png";

const ContactInfo = ({ isDarkMode }) => {
  const contactItems = [
    { icon: MapPin, text: "Ulaanbaatar, Mongolia", href: null },
    {
      icon: Mail,
      text: "dulguunnu@gmail.com",
      href: "mailto:dulguunnu@gmail.com",
    },
    { icon: ExternalLink, text: "dulgx.com", href: "https://dulgx.com" },
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 text-sm">
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        const content = (
          <div className="flex items-center gap-1">
            <IconComponent
              size={16}
              className={isDarkMode ? "text-zinc-400" : "text-zinc-500"}
            />
            <span
              className={`${isDarkMode ? "text-zinc-300" : "text-zinc-600"} ${
                item.href && item.icon === ExternalLink ? "font-mono" : ""
              }`}
            >
              {item.text}
            </span>
          </div>
        );

        return item.href ? (
          <a
            key={index}
            href={item.href}
            className={`group/link ${
              isDarkMode
                ? "text-zinc-300 hover:text-cyan-400"
                : "text-zinc-600 hover:text-cyan-600"
            } transition-all duration-300 hover:scale-105 magnetic ${
              item.icon === ExternalLink ? "hover:underline" : ""
            }`}
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}
    </div>
  );
};

const ProfileAvatar = ({ isDarkMode }) => {
  const linePattern = {
    backgroundImage: `repeating-linear-gradient(315deg, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 0px, ${
      isDarkMode ? "rgba(63, 63, 70, 0.1)" : "rgba(161, 161, 170, 0.1)"
    } 1px, transparent 1px, transparent 10%)`,
    backgroundSize: "10px 10px",
  };

  return (
    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-zinc-800 border-4 border-zinc-700/50 dark:border-zinc-700 shadow-lg flex items-center justify-center text-5xl font-bold text-zinc-50 font-sans relative overflow-hidden">
      <div className="absolute inset-0" style={linePattern}></div>
      <img
        src={profileImg.src ? profileImg.src : profileImg}
        alt="Profile"
        className="relative z-10 w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

const CurrentStatus = ({ isDarkMode }) => (
  <div>
    <div className="font-medium text-sm bg-gradient-to-r from-zinc-500 to-zinc-600 dark:from-zinc-400 dark:to-zinc-500 bg-clip-text text-transparent uppercase tracking-wider mb-1">
      Currently
    </div>
    <div className="flex items-center">
      <span className="relative inline-flex w-2 h-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full w-2 h-2 bg-cyan-500"></span>
      </span>
      <span className="font-medium text-zinc-900 dark:text-zinc-100">
        Developer{" "}
        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-mono">
          @Sendly NBFI
        </span>
      </span>
    </div>
  </div>
);

const ActionButtons = () => (
  <div className="flex flex-wrap gap-3 pt-2">
    <Button variant="primary" icon="arrow" href="/Dulguun CV.pdf" download>
      Download Resume
    </Button>
    <Button variant="secondary" href="mailto:dulguunnu@gmail.com">
      Contact Me
    </Button>
  </div>
);

const Hero = ({ isDarkMode }) => {
  // Dot pattern background
  const dotPattern = {
    backgroundImage: `radial-gradient(${
      isDarkMode ? "#27272A" : "#E4E4E7"
    } 1px, transparent 0)`,
    backgroundSize: "20px 20px",
  };

  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={dotPattern}></div>

      <div className="container mx-auto max-w-4xl relative">
        <GlassCard isDarkMode={isDarkMode}>
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Profile Avatar */}
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center md:justify-start">
              <ProfileAvatar isDarkMode={isDarkMode} />
            </div>

            {/* Hero Content */}
            <div className="md:w-2/3 md:pl-12">
              {/* Name and Title */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 font-sans bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient hero-title">
                  Dulguun
                </h1>
                <p className="text-xl md:text-2xl bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent mb-4 font-sans font-medium hero-subtitle">
                  Full Stack Developer & Odoo Specialist
                </p>

                {/* Contact Information */}
                <ContactInfo isDarkMode={isDarkMode} />
              </div>

              {/* Current Status and Actions */}
              <div className="space-y-4">
                <CurrentStatus isDarkMode={isDarkMode} />
                <ActionButtons />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Hero;
