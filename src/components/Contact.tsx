export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="reveal">
            <div className="label" style={{ marginBottom: '1rem' }}>Get in touch</div>
            <h2 className="contact-cta">
              Let&apos;s build<br />something<br /><em>worth explaining.</em>
            </h2>
          </div>

          <div className="contact-links reveal" style={{ transitionDelay: '0.1s' }}>
            <a href="mailto:[your@email.com]" className="contact-link">
              <span className="link-label">Email</span>
              [your@email.com]
            </a>
            <a href="https://linkedin.com/in/[handle]" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">LinkedIn</span>
              /in/[your-handle]
            </a>
            <a href="https://github.com/[handle]" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">GitHub</span>
              /[your-handle]
            </a>
            <a href="[resume.pdf]" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">Résumé</span>
              Download PDF →
            </a>
          </div>
        </div>

        <div className="footer-bar">
          <span className="mono">© 2025 Kevin</span>
          <span className="mono">Statically hosted · GitHub Pages</span>
        </div>
      </div>
    </section>
  );
}
