export default function Experience() {
  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">03 /</span>{" "}
          <span className="accent">git log</span> --experience
        </h2>
        <span className="count">2 commits</span>
      </div>

      <div className="commit">
        <div className="sha">
          <span className="hash">commit 1f8a2c</span>
          <span className="date">2024-08-01 → HEAD</span>
          <span className="tag now">HEAD</span>
        </div>
        <div>
          <h3>feat: move from support to software team</h3>
          <div className="co">
            Software Developer{" "}
            <span className="at">@ Sendly NBFI</span> · Ulaanbaatar
          </div>
          <ul>
            <li>
              Lead dev on the <b>core loan automation system</b>, replacing
              Excel-based workflows with an ERP pipeline —{" "}
              <b>50–60% reduction</b> in manual labor.
            </li>
            <li>
              Shipped integrations with <b>HUR</b> (gov. data), <b>KYC</b>,{" "}
              <b>E-Barimt</b> (tax), and third-party collateral valuation.
            </li>
            <li>
              Built the <b>loan committee module</b> (voting, minutes, approval)
              and the <b>collateral management system</b> (registration,
              valuation).
            </li>
            <li>
              Shipped the intranet portal end-to-end in <b>Next.js</b> —
              directory, news, Knowledge Base, suggestions.
            </li>
          </ul>
        </div>
      </div>

      <div className="commit">
        <div className="sha">
          <span className="hash">commit 4b2d01</span>
          <span className="date">2023-05-10 → 2024-07-01</span>
        </div>
        <div>
          <h3>init: first job after Tokyo</h3>
          <div className="co">
            IT / Support Engineer{" "}
            <span className="at">@ Sendly NBFI</span> · Ulaanbaatar
          </div>
          <ul>
            <li>
              Administered <b>Active Directory</b>, Office 365, email, financial
              software, and internal web apps at permission level.
            </li>
            <li>
              Remote and on-site technical support to UB HQ and{" "}
              <b>countryside branches</b>.
            </li>
            <li>
              Maintained network stability and upheld information-security
              policy.
            </li>
            <li>
              On my own initiative, taught myself React and{" "}
              <b>shipped Sendly&apos;s first employee directory</b> — the
              project that got me onto the software team.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
