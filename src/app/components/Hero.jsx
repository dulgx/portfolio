export default function Hero() {
  return (
    <>
      <div className="prompt">
        <span className="user">dulguun</span>
        <span className="path">~ $</span>
        <span className="cmd">whoami --verbose</span>
        <span className="blink" />
      </div>

      <div className="hero-body">
        <div>
          <h1>
            <span className="name">dulguun.</span>
            <br />
            <span className="accent">ship(</span>
            <span className="dim">boring</span>
            <span className="accent">)</span>
            <br />
            <span className="dim">// until it isn&apos;t</span>
            <span className="cursor-bar" />
          </h1>
          <p className="pitch">
            Developer at <b>Sendly NBFI</b>, Mongolia. I build Odoo ERP and web
            systems that automate loan workflows, using React, Next.js, Python,
            and JavaScript.
          </p>

          <div className="hero-cta">
            <a href="#work">
              <span className="k">→</span> cat work/
            </a>
            <a href="#experience">
              <span className="k">→</span> git log
            </a>
            <a href="/Dulguun CV.pdf">
              <span className="k">↓</span> resume.pdf
            </a>
            <a className="primary" href="mailto:dulguunnu@gmail.com">
              $ mail me
            </a>
          </div>
        </div>

        <aside className="id-card">
          <div className="avatar">
            <img src="/profile.png" alt="Dulguun" />
          </div>
          <dl>
            <dt>name</dt>
            <dd>Dulguun P.</dd>
            <dt>role</dt>
            <dd>Software Dev</dd>
            <dt>org</dt>
            <dd>Sendly NBFI</dd>
            <dt>location</dt>
            <dd>Ulaanbaatar</dd>
            <dt>langs</dt>
            <dd>
              mn · en · <span className="ok">ja/N2</span>
            </dd>
            <dt>status</dt>
            <dd>
              <span className="ok">● open</span>
            </dd>
          </dl>
        </aside>
      </div>
    </>
  );
}
