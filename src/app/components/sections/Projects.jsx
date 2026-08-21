const projects = [
  {
    idx: "01",
    date: "2024 · Q1–Q2",
    type: "system",
    name: "Loan Decision Automation",
    desc: "End-to-end automation of loan application to decision flow — intake, scoring, risk checks, and approval routing, replacing manual Excel-based workflows.",
    stack: ["Odoo", "Python", "PostgreSQL"],
  },
  {
    idx: "02",
    date: "2024 · Q2–Q3",
    type: "integration",
    name: "Credit Scoring (Sain Score · Buren Score)",
    desc: "Integrated external credit scoring systems into the loan pipeline — automated fetching, evaluation, and decision support using Sain Score and Buren Score.",
    stack: ["Odoo", "Python", "REST"],
  },
  {
    idx: "03",
    date: "2024 · Q3",
    type: "web.app",
    name: "Company Intranet",
    desc: "Employee directory, branch contacts, news feed, Knowledge Base, suggestions — centralized everything that used to live in email and Excel.",
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    idx: "04",
    date: "2024 · Q4",
    type: "integration",
    name: "HUR · KYC pipeline",
    desc: "Plugged the loan system into Mongolia's government data-exchange backbone to auto-fetch and verify customer information.",
    stack: ["Odoo", "Python", "REST", "FastAPI", "PostgreSQL"],
  },
  {
    idx: "05",
    date: "2025 · Q1",
    type: "module",
    name: "Loan Committee",
    desc: "Digitized committee decision-making — member voting, meeting minutes, auditable decision approval, full search.",
    stack: ["Odoo", "PostgreSQL", "XML"],
  },
  {
    idx: "06",
    date: "2025 · Q2",
    type: "module",
    name: "Collateral Management",
    desc: "Registration and valuation module with third-party integrations — improved data accuracy and valuation speed.",
    stack: ["Odoo", "Python", "APIs", "AWS S3"],
  },
  {
    idx: "07",
    date: "2025 · Q4",
    type: "integration",
    name: "E-Barimt Tax Pipeline",
    desc: "Connected the loan pipeline to Mongolia's tax receipt system — every transaction auto-generates and submits its own И-Баримт.",
    stack: ["Odoo", "Python", "Tax API", "AWS Lambda", "AWS SQS", "PostgreSQL"],
  },
  {
    idx: "08",
    date: "2026 · Q1",
    type: "web.app",
    name: "Loan Mini App (Frontend Contribution)",
    desc: "Contributed to the customer-facing loan mini app — improved UX flows, application steps, and data validation for smoother loan requests.",
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    idx: "09",
    date: "2026 · Present",
    type: "saas.platform",
    name: "Multi-tenant SaaS ERP Platform",
    desc: "Multi-tenant ERP for a regulated financial institution, aligned to ISO/IEC 27001:2022 — tenant isolation enforced at the database layer via PostgreSQL Row-Level Security (FORCE + fail-closed) rather than app middleware, with a CASL permission engine, ltree org hierarchy, append-only partitioned audit log, and 17 ADRs for audit traceability.",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL 16", "Drizzle", "RLS", "Redis", "Azure DevOps"],
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
        <span className="count">9 systems · shipped</span>
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
            FEATURED · 2024—present · <span className="on">● nbfi-erp</span>
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
            I rebuilt the company&apos;s core loan pipeline inside their ERP:
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

      {/* Featured — SaaS ERP */}
      <div className="featured" style={{ marginTop: "28px" }}>
        <div className="fvisual">
          <span className="stamp">● ARCHITECTURE · 2026</span>
          <svg viewBox="0 0 460 410" style={{ width: "100%", height: "auto", maxWidth: "460px" }}>
            <defs>
              <marker id="arr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#d4ff4c" />
              </marker>
              <marker id="arr4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#62645a" />
              </marker>
            </defs>

            {/* TENANTS */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#62645a" letterSpacing="0.08em">
              <text x="10" y="12">TENANT REQUESTS</text>
            </g>
            <g fontFamily="Inter, sans-serif">
              <rect x="10" y="18" width="205" height="34" fill="none" stroke="#eeece2" />
              <text x="112" y="35" textAnchor="middle" fontSize="13" fontWeight="600" fill="#eeece2">tenant A</text>
              <text x="112" y="47" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">org · users · roles</text>
              <rect x="245" y="18" width="205" height="34" fill="none" stroke="#eeece2" />
              <text x="347" y="35" textAnchor="middle" fontSize="13" fontWeight="600" fill="#eeece2">tenant B</text>
              <text x="347" y="47" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">org · users · roles</text>
            </g>
            <line x1="112" y1="52" x2="112" y2="62" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr4)" />
            <line x1="347" y1="52" x2="347" y2="62" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr4)" />

            {/* APP LAYER */}
            <rect x="10" y="64" width="440" height="46" fill="none" stroke="#62645a" />
            <text x="20" y="82" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a" letterSpacing="0.08em">APPLICATION LAYER · modular monolith</text>
            <text x="20" y="100" fontFamily="Inter,sans-serif" fontSize="13" fill="#eeece2">Next.js 15 · CASL (RBAC/ABAC) · Zod · deny-override + Redis cache</text>
            <line x1="230" y1="110" x2="230" y2="124" stroke="#62645a" strokeWidth="0.8" markerEnd="url(#arr4)" />

            {/* TENANT CONTEXT */}
            <rect x="10" y="126" width="440" height="46" fill="none" stroke="#d4ff4c" strokeDasharray="3 3" />
            <text x="20" y="144" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#d4ff4c" letterSpacing="0.08em">TENANT CONTEXT · withTenant()</text>
            <text x="20" y="162" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#eeece2">set_config(&apos;app.tenant&apos;, id, true) — txn-scoped · PgBouncer-safe</text>
            <line x1="230" y1="172" x2="230" y2="190" stroke="#d4ff4c" strokeWidth="1.5" markerEnd="url(#arr3)" />
            <text x="238" y="185" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#d4ff4c">enforced ↓</text>

            {/* DATABASE · RLS */}
            <rect x="10" y="192" width="440" height="150" fill="none" stroke="#d4ff4c" strokeWidth="1.5" />
            <text x="20" y="210" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#d4ff4c" letterSpacing="0.08em">POSTGRESQL 16 · ROW-LEVEL SECURITY</text>
            <text x="20" y="224" fontFamily="Inter,sans-serif" fontSize="11" fill="#a8a694">ENABLE + FORCE · fail-closed default-deny policy</text>

            <rect x="22" y="236" width="196" height="92" fill="none" stroke="#eeece2" strokeDasharray="2 2" />
            <text x="120" y="260" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#eeece2">tenant A</text>
            <text x="120" y="278" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">rows WHERE tenant = A</text>
            <text x="120" y="312" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">USING + WITH CHECK</text>

            <rect x="242" y="236" width="196" height="92" fill="none" stroke="#eeece2" strokeDasharray="2 2" />
            <text x="340" y="260" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#eeece2">tenant B</text>
            <text x="340" y="278" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#a8a694">rows WHERE tenant = B</text>
            <text x="340" y="312" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#62645a">USING + WITH CHECK</text>

            <circle cx="230" cy="282" r="15" fill="#0d0e0c" stroke="#d4ff4c" strokeWidth="1.2" />
            <text x="230" y="286" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fill="#d4ff4c">⊘</text>
            <text x="230" y="308" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#62645a">no cross-tenant</text>

            {/* GUARANTEE */}
            <rect x="10" y="352" width="440" height="48" fill="none" stroke="#d4ff4c" strokeDasharray="2 3" />
            <text x="20" y="370" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#d4ff4c" letterSpacing="0.08em">GUARANTEE</text>
            <text x="20" y="387" fontFamily="Inter,sans-serif" fontSize="12.5" fill="#eeece2">one tenant&apos;s data can&apos;t leak into another — even if app code has bugs</text>
          </svg>
        </div>

        <div className="ftext">
          <div className="kicker">
            FEATURED · 2026—present · <span className="on">● saas-erp</span>
          </div>
          <h3>
            Isolation that lives in the{" "}
            <em>
              database,
              <br />
              not the middleware
            </em>
            .
          </h3>
          <p>
            A multi-tenant SaaS ERP for a regulated financial institution,
            aligned to ISO/IEC 27001:2022. Tenant isolation is enforced at the
            database layer — PostgreSQL Row-Level Security with{" "}
            <b>ENABLE + FORCE</b> and a fail-closed policy — not in application
            middleware, so it holds even when upper-layer code fails. A{" "}
            <b>withTenant()</b> wrapper sets a transaction-scoped tenant context
            that stays correct under PgBouncer transaction pooling.
          </p>
          <p>
            On top of that: an org module with <b>ltree</b> hierarchies and{" "}
            <b>GiST exclusion constraints</b> for effective-dated records, a{" "}
            <b>CASL</b> permission engine with deny-override and Redis caching,
            an append-only partitioned audit log with a CI guard, and{" "}
            <b>17 ADRs</b> establishing a BRD → ADR → migration → code trail for
            audit.
          </p>
          <div className="fmetrics">
            <div>
              <div className="n">0</div>
              <div className="l">cross-tenant leaks</div>
            </div>
            <div>
              <div className="n">17</div>
              <div className="l">ADRs · audit trail</div>
            </div>
            <div>
              <div className="n">27001</div>
              <div className="l">ISO/IEC aligned</div>
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
