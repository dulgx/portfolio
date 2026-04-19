export default function About() {
  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">01 /</span>{" "}
          <span className="accent">about.md</span>
        </h2>
        <span className="count">287 words · 2 min read</span>
      </div>

      <div className="readme">
        <div className="text">
          <p>
            I started out as an <b>electrical engineering</b> student at the
            National University of Mongolia, then moved to Tokyo for two years
            at Yu Language Academy — long enough to pass{" "}
            <em>JLPT N2</em>.
          </p>
          <p>
            Back in Ulaanbaatar in 2023 I joined Sendly NBFI on the IT support
            team. I spent nights teaching myself React and shipped the
            company&apos;s first employee directory. That got me onto the
            software team in <b>August 2024</b>, and I&apos;ve been building
            the core loan system since.
          </p>
          <p>
            I like <em>quiet software</em> — the kind that sits inside a
            company, runs a process that used to eat three people&apos;s
            afternoons, and doesn&apos;t need marketing to exist. Most of what
            I&apos;ve built is like that.
          </p>
        </div>

        <div className="file">
          <div className="file-head">
            <span className="name">./dulguun.toml</span>
            <span className="tag">READ-ONLY</span>
          </div>
          <div className="file-body">
            <span className="k">name</span>
            <span className="v">Dulguun Purevtseren</span>
            <span className="k">role</span>
            <span className="v">Software Developer</span>
            <span className="k">company</span>
            <span className="v">
              <span className="em">@ Sendly NBFI</span>
            </span>
            <span className="k">since</span>
            <span className="v">2023-05 · 3 yrs</span>
            <span className="k">edu</span>
            <span className="v">NUM · BA Elec. Eng.</span>
            <span className="k">tokyo</span>
            <span className="v">Yu Lang Academy · N2</span>
            <span className="k">email</span>
            <span className="v">
              <a href="mailto:dulguunnu@gmail.com">dulguunnu@gmail.com</a>
            </span>
            <span className="k">phone</span>
            <span className="v">+976 8815 4711</span>
            <span className="k">web</span>
            <span className="v">
              <a href="https://dulgx.com">dulgx.com</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
