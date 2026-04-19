const personalProjects = [
  {
    idx: "01",
    date: "2025 · Q2",
    type: "web.app",
    name: "Japanese Learning App",
    desc: "Mobile-first SRS flashcards, kanji tracer, adaptive quizzes, matching games, AI story generator, and academic news — built to reach JLPT N1.",
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini"],
    url: "https://app.dulgx.com",
  },
];

export default function Personal() {
  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">03 /</span> personal
          <span className="dim">/</span>{" "}
          <span className="accent">featured</span>
        </h2>
        <span className="count">1 project · in use</span>
      </div>

      {/* Featured */}
      <div className="featured">
        <div className="fvisual">
          <span className="stamp">● LIVE · DAILY USE</span>
          <svg viewBox="0 0 460 340" style={{ width: "100%", height: "auto", maxWidth: "460px" }}>
            {/* Title */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="20">MODULES</text>
            </g>

            {/* SRS — highlighted */}
            <g transform="translate(10,32)">
              <rect width="140" height="50" fill="#d4ff4c" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#0d0e0c">SRS Flashcards</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#0d0e0c">spaced repetition</text>
            </g>

            {/* Smart Quiz */}
            <g transform="translate(160,32)">
              <rect width="140" height="50" fill="none" stroke="#eeece2" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="500" fill="#eeece2">Smart Quiz</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">adaptive · multi-choice</text>
            </g>

            {/* Kanji Tracer */}
            <g transform="translate(310,32)">
              <rect width="140" height="50" fill="none" stroke="#eeece2" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="500" fill="#eeece2">Kanji Tracer</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">stroke-order · canvas</text>
            </g>

            {/* Section label */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="108">FEATURES</text>
            </g>

            {/* Matching Game */}
            <g transform="translate(10,120)">
              <rect width="140" height="50" fill="none" stroke="#2a2d26" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="500" fill="#a8a694">Matching Games</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">timed · active recall</text>
            </g>

            {/* AI Story */}
            <g transform="translate(160,120)">
              <rect width="140" height="50" fill="none" stroke="#2a2d26" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="500" fill="#a8a694">AI Story Gen</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">Gemini · vocab in context</text>
            </g>

            {/* News */}
            <g transform="translate(310,120)">
              <rect width="140" height="50" fill="none" stroke="#2a2d26" />
              <text x="70" y="20" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="500" fill="#a8a694">Academic News</text>
              <text x="70" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">curated · annotated</text>
            </g>

            {/* Data Layer */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="196">DATA</text>
            </g>
            <g transform="translate(10,208)">
              <rect width="440" height="42" fill="none" stroke="#2a2d26" />
              <text x="220" y="18" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fill="#a8a694">Supabase · Auth + DB + realtime stats</text>
              <text x="220" y="34" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">progress tracking · review history · SRS intervals</text>
            </g>

            {/* Goal */}
            <g transform="translate(10,276)" fontFamily="JetBrains Mono,monospace" fontSize="10">
              <rect x="-2" y="-2" width="440" height="46" fill="none" stroke="#d4ff4c" strokeDasharray="2 3" />
              <text x="8" y="16" fill="#d4ff4c" letterSpacing="0.08em">GOAL</text>
              <text x="8" y="34" fill="#eeece2" fontFamily="Inter,sans-serif" fontSize="13">
                maintain fluency →{" "}
                <tspan fill="#d4ff4c" fontWeight="600">achieve JLPT N1</tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="ftext">
          <div className="kicker">
            PERSONAL ·{" "}
            <a
              href="https://app.dulgx.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              app.dulgx.com ↗
            </a>
          </div>
          <h3>
            A Japanese learning app{" "}
            <em>
              built for myself
              <br />
              to reach N1
            </em>
            .
          </h3>
          <p>
            Mobile-first web app with spaced repetition flashcards, adaptive
            quizzes on kanji readings and usage, and hands-on stroke-order
            tracing on canvas.
          </p>
          <p>
            Timed matching games for active recall, an AI story generator
            (Gemini) that drops target vocab into reading passages, and a
            curated academic news view — all backed by Supabase with full
            progress tracking.
          </p>
          <div className="fmetrics">
            <div>
              <div className="n">SRS</div>
              <div className="l">smart scheduling</div>
            </div>
            <div>
              <div className="n">6</div>
              <div className="l">learning modes</div>
            </div>
            <div>
              <div className="n">N1</div>
              <div className="l">target level</div>
            </div>
          </div>
        </div>
      </div>

      {/* ls -la list */}
      <div style={{ marginTop: "56px" }}>
        <div className="prompt">
          <span className="user">dulguun</span>
          <span className="path">~/personal $</span>
          <span className="cmd">ls -la --sort=impact</span>
        </div>

        <div className="ls-header">
          <span>#</span>
          <span>date</span>
          <span>type</span>
          <span>project</span>
          <span className="stack" style={{ textAlign: "right" }}>stack</span>
        </div>

        {personalProjects.map((p) => (
          <div className="ls-row" key={p.idx}>
            <div className="idx">{p.idx}</div>
            <div className="date">{p.date}</div>
            <div className="type">{p.type}</div>
            <div>
              <div className="name">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                  >
                    {p.name} ↗
                  </a>
                ) : (
                  p.name
                )}
              </div>
              <div className="desc">{p.desc}</div>
            </div>
            <div className="stack">
              {p.stack.map((t) => (
                <span className="t" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
