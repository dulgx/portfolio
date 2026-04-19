export default function Contact() {
  return (
    <>
      <div className="prompt">
        <span className="user">dulguun</span>
        <span className="path">~ $</span>
        <span className="cmd">mail --start-conversation</span>
      </div>

      <h2>
        <span className="dim">$</span>{" "}
        <a href="mailto:dulguunnu@gmail.com">dulguunnu@gmail.com</a>
        <br />
        <span className="dim">— or just wave.</span>
      </h2>

      <div className="contact-grid">
        <div>
          <div className="k">EMAIL</div>
          <div className="v">
            <a href="mailto:dulguunnu@gmail.com">dulguunnu@gmail.com</a>
          </div>
        </div>
        <div>
          <div className="k">SITE</div>
          <div className="v">
            <a href="https://dulgx.com">dulgx.com</a>
          </div>
        </div>
        <div>
          <div className="k">STATUS</div>
          <div className="v" style={{ color: "var(--ok)" }}>
            ● open to work
          </div>
        </div>
      </div>
    </>
  );
}
