"use client";

export default function TabNav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="tabs">
      <div className="tab on" onClick={() => scrollTo("hero")}>
        <span className="dot" /> ~/portfolio
      </div>
      <div className="tab" onClick={() => scrollTo("about")}>
        <span className="dot" /> about.md
      </div>
      <div className="tab" onClick={() => scrollTo("work")}>
        <span className="dot" /> work/
      </div>
      <div className="tab" onClick={() => scrollTo("personal")}>
        <span className="dot" /> personal/
      </div>
      <div className="tab" onClick={() => scrollTo("experience")}>
        <span className="dot" /> experience.log
      </div>
      <div className="tab" onClick={() => scrollTo("contact")}>
        <span className="dot" /> contact.mk
      </div>
      <div className="spacer" />
      <div className="tab meta">UTF-8 · LF · v2026.04</div>
      <div className="tab meta">
        <span className="pulse" /> open to work
      </div>
    </div>
  );
}
