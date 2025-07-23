import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Button from "./ui/Button";
import profileImg from "../../../public/profile.png";

// Glass Card wrapper to create the Apple liquid glass effect
const GlassCard = ({ isDarkMode, children }) => {
  const bgColor = isDarkMode ? "bg-white/10" : "bg-white/30";
  const borderColor = isDarkMode ? "border-white/20" : "border-white/20";
  return (
    <div
      className={`relative p-6 rounded-2xl ${bgColor} ${borderColor} border backdrop-blur-xl shadow-lg overflow-hidden`}
    >
      {/* Highlight circles for extra liquid-glass shine */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/20 rounded-full filter blur-2xl"></div>
        <div className="absolute -bottom-8 -right-12 w-32 h-32 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

const ContactInfo = ({ isDarkMode }) => {
  const contactItems = [
    { icon: MapPin, text: "Ulaanbaatar, Mongolia", href: null },
    { icon: Phone, text: "+976 88154711", href: "tel:+97688154711" },
    {
      icon: Mail,
      text: "dulguunnu@gmail.com",
      href: "mailto:dulguunnu@gmail.com",
    },
    { icon: ExternalLink, text: "dulgx.com", href: "https://dulgx.com" },
  ];

  return (
    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm">
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
            className={`${
              isDarkMode
                ? "text-zinc-300 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } transition-colors ${
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
    <div className="font-medium text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
      Currently
    </div>
    <div className="flex items-center">
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
      <span className="font-medium text-zinc-900 dark:text-zinc-100">
        Developer{" "}
        <span className="text-zinc-600 dark:text-zinc-400 font-mono">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-2 font-sans text-zinc-900 dark:text-zinc-50">
                  Dulguun
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-4 font-sans">
                  Creating with code, driven by passion.
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
