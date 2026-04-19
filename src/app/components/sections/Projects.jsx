const projects = [
  {
    idx: "02",
    date: "2024 · Q3",
    type: "web.app",
    name: "Sendly Intranet",
    desc: "Employee directory, branch contacts, news feed, Knowledge Base, suggestions — centralized everything that used to live in email and Excel.",
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    idx: "03",
    date: "2024 · Q4",
    type: "integration",
    name: "HUR · KYC pipeline",
    desc: "Plugged the loan system into Mongolia's government data-exchange backbone to auto-fetch and verify customer information.",
    stack: ["Odoo", "Python", "REST"],
  },
  {
    idx: "04",
    date: "2025 · Q1",
    type: "module",
    name: "Loan Committee",
    desc: "Digitized committee decision-making — member voting, meeting minutes, auditable decision approval, full search.",
    stack: ["Odoo", "PostgreSQL", "XML"],
  },
  {
    idx: "05",
    date: "2025 · Q2",
    type: "module",
    name: "Collateral Management",
    desc: "Registration and valuation module with third-party integrations — improved data accuracy and valuation speed.",
    stack: ["Odoo", "Python", "APIs"],
  },
  {
    idx: "06",
    date: "2025 · Q3",
    type: "integration",
    name: "E-Barimt Tax Pipeline",
    desc: "Connected the loan pipeline to Mongolia's tax receipt system — every transaction auto-generates and submits its own И-Баримт.",
    stack: ["Odoo", "Python", "Tax API"],
  },
];

export default function Projects() {
  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">02 /</span> work
          <span className="dim">/</span>{" "}
          <span className="accent">featured</span>
        </h2>
        <span className="count">6 systems · shipped</span>
      </div>

      {/* Featured */}
      <div className="featured">
        <div className="fvisual">
          <span className="stamp">● LIVE · DAILY USE</span>
          <svg viewBox="0 0 460 400" style={{ width: "100%", height: "auto", maxWidth: "460px" }}>
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#d4ff4c" />
              </marker>
              <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#62645a" />
              </marker>
            </defs>

            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="20">BEFORE</text>
            </g>
            <g transform="translate(10,32)">
              <rect width="116" height="54" fill="none" stroke="#62645a" strokeDasharray="3 3" />
              <text x="58" y="22" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fill="#a8a694">Excel.xlsx</text>
              <text x="58" y="38" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">3 sheets · 40+ formulas</text>
              <text x="58" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">manual re-key</text>
            </g>

            <line x1="128" y1="60" x2="178" y2="60" stroke="#d4ff4c" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x="153" y="54" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#d4ff4c">migrate()</text>

            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="184" y="20">AFTER</text>
            </g>
            <g transform="translate(184,32)">
              <rect width="266" height="54" fill="#d4ff4c" />
              <text x="133" y="22" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="600" fill="#0d0e0c">LoanCore.py</text>
              <text x="133" y="38" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#0d0e0c">scoring · DTI · eligibility</text>
              <text x="133" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#0d0e0c">automated · audited · logged</text>
            </g>

            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="130">INTEGRATIONS</text>
            </g>
            <g transform="translate(10,144)" fontFamily="Inter, sans-serif">
              <g>
                <rect width="106" height="50" fill="none" stroke="#eeece2" />
                <text x="53" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#eeece2">HUR</text>
                <text x="53" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">gov. data exchange</text>
              </g>
              <g transform="translate(114,0)">
                <rect width="106" height="50" fill="none" stroke="#eeece2" />
                <text x="53" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#eeece2">KYC</text>
                <text x="53" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">auto-verify customer</text>
              </g>
              <g transform="translate(228,0)">
                <rect width="106" height="50" fill="none" stroke="#eeece2" />
                <text x="53" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#eeece2">Collateral</text>
                <text x="53" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">3rd-party valuation</text>
              </g>
              <g transform="translate(342,0)">
                <rect width="106" height="50" fill="none" stroke="#eeece2" />
                <text x="53" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#eeece2">E-Barimt</text>
                <text x="53" y="36" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">tax-receipt pipeline</text>
              </g>
            </g>

            <line x1="63" y1="144" x2="63" y2="108" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr2)" />
            <line x1="177" y1="144" x2="177" y2="108" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr2)" />
            <line x1="291" y1="144" x2="291" y2="108" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr2)" />
            <line x1="405" y1="144" x2="405" y2="108" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr2)" />

            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="226">OUTPUTS</text>
            </g>
            <g transform="translate(10,236)" fontFamily="Inter,sans-serif">
              <text x="0" y="16" fontSize="14" fill="#eeece2">decisions · committee votes · tax receipts</text>
              <text x="0" y="34" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#62645a">generated, logged, archived — no human re-keying</text>
            </g>

            <g transform="translate(10,282)" fontFamily="JetBrains Mono,monospace" fontSize="10">
              <rect x="-2" y="-2" width="440" height="104" fill="none" stroke="#d4ff4c" strokeDasharray="2 3" />
              <text x="8" y="16" fill="#d4ff4c" letterSpacing="0.08em">IMPACT</text>
              <text x="8" y="34" fill="#eeece2" fontFamily="Inter,sans-serif" fontSize="13">
                manual labor on loan processing:{" "}
                <tspan fill="#d4ff4c" fontWeight="600">−50 to −60%</tspan>
              </text>
              <text x="8" y="52" fill="#eeece2" fontFamily="Inter,sans-serif" fontSize="13">
                loan approval cycle time:{" "}
                <tspan fill="#d4ff4c" fontWeight="600">days → hours</tspan>
              </text>
              <text x="8" y="70" fill="#eeece2" fontFamily="Inter,sans-serif" fontSize="13">
                customer data entry errors:{" "}
                <tspan fill="#d4ff4c" fontWeight="600">near zero</tspan>
              </text>
              <text x="8" y="88" fill="#eeece2" fontFamily="Inter,sans-serif" fontSize="13">
                committee decisions:{" "}
                <tspan fill="#d4ff4c" fontWeight="600">100% digital · auditable</tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="ftext">
          <div className="kicker">
            FEATURED · 2024—present · <span className="on">● sendly-nbfi</span>
          </div>
          <h3>
            A loan system that{" "}
            <em>
              doesn&apos;t need
              <br />
              Excel anymore
            </em>
            .
          </h3>
          <p>
            I rebuilt Sendly&apos;s core loan pipeline inside their ERP:
            application intake, credit scoring, eligibility math, and
            debt-to-income ratios — everything that used to live in three
            spreadsheets across four desks.
          </p>
          <p>
            Then I wired it outward: HUR for government data, KYC for
            verification, a digital loan committee with voting and minutes,
            collateral management with third-party valuation, and E-Barimt for
            tax receipts.
          </p>
          <div className="fmetrics">
            <div>
              <div className="n">−50–60%</div>
              <div className="l">manual labor</div>
            </div>
            <div>
              <div className="n">6</div>
              <div className="l">systems · one ERP</div>
            </div>
            <div>
              <div className="n">daily</div>
              <div className="l">active users</div>
            </div>
          </div>
        </div>
      </div>

      {/* ls -la list */}
      <div style={{ marginTop: "56px" }}>
        <div className="prompt">
          <span className="user">dulguun</span>
          <span className="path">~/work $</span>
          <span className="cmd">ls -la --sort=impact</span>
        </div>

        <div className="ls-header">
          <span>#</span>
          <span>date</span>
          <span>type</span>
          <span>project</span>
          <span className="stack" style={{ textAlign: "right" }}>stack</span>
        </div>

        {projects.map((p) => (
          <div className="ls-row" key={p.idx}>
            <div className="idx">{p.idx}</div>
            <div className="date">{p.date}</div>
            <div className="type">{p.type}</div>
            <div>
              <div className="name">{p.name}</div>
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
