export default function Speaking() {
  return (
    <section id="speaking">
      <div className="container">
        <div className="section-header">
          <span className="section-num">03</span>
          <hr className="rule" style={{ flex: 1 }} />
          <h2 className="section-title">Speaking</h2>
        </div>

        <div className="speaking-grid">

          {/* Featured: IJF */}
          <div className="talk-card reveal">
            <div className="featured-badge">International</div>
            <div className="talk-year">2025</div>
            <h3 className="talk-title"><span className="talk-flag">🇮🇹</span>International Journalism Festival</h3>
            <p className="talk-venue">Perugia, Italy — [Talk title here]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.05s' }}>
            <div className="talk-year">2025</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="talk-year">2024</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="talk-year">2024</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="talk-year">2024</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.25s' }}>
            <div className="talk-year">2023</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="talk-year">2023</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

          <div className="talk-card reveal" style={{ transitionDelay: '0.35s' }}>
            <div className="talk-year">2023</div>
            <h3 className="talk-title">[Conference Name]</h3>
            <p className="talk-venue">[City, State] — [Talk title]</p>
          </div>

        </div>
      </div>
    </section>
  );
}
