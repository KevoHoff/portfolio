export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <hr className="rule" style={{ flex: 1 }} />
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="grid-col-2" style={{ gap: '1px', background: 'var(--rule)' }}>

          {/* Dewey */}
          <div className="project-card reveal">
            <div className="project-media">
              <img src="/dewey.png" alt="Dewey" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
              <div className="project-media-badge">Live in Production</div>
            </div>
            <div className="project-body">
              <div className="label" style={{ marginBottom: '0.5rem' }}>Project 01</div>
              <h3 className="project-name"><a href="https://www.lenfestinstitute.org/solutions-resources/lenfest-ai-collaborative-and-fellowship-program-dewey-the-archivist/" target="_blank" rel="noopener noreferrer">Dewey</a></h3>
              <p className="project-tagline">The Inquirer&apos;s Digital Librarian</p>
              <p className="project-desc">
                A conversational AI interface that lets journalists and editors query 47 years of the Inquirer&apos;s article archive in plain English — and receive cited, sourced answers in natural language. Built on a multi-agent RAG architecture.{' '}
                <a href="https://www.lenfestinstitute.org/solutions-resources/lenfest-ai-collaborative-and-fellowship-program-dewey-the-archivist/" target="_blank" rel="noopener noreferrer" className="read-more">Read more →</a>
              </p>
              <div className="press-callout">
                Now running at <strong>The Baltimore Banner</strong> and <strong>The Seattle Times</strong> — adopted independently by two major newsrooms.
              </div>
              <div className="project-meta" style={{ marginTop: '1.2rem' }}>
                <span className="pill amber">RAG</span>
                <span className="pill amber">Multi-Agent</span>
                <span className="pill">OpenAI Agents SDK</span>
                <span className="pill">Azure AI Search</span>
                <span className="pill">Python</span>
              </div>
            </div>
          </div>

          {/* Local Media Aggregator */}
          <div className="project-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="project-media">
              <div className="project-media-placeholder">
                [ aggregator.gif ]<br />
                <span style={{ fontSize: '0.6rem', opacity: 0.5 }}>drop your screen recording here</span>
              </div>
              <div className="project-media-badge">Press Coverage</div>
            </div>
            <div className="project-body">
              <div className="label" style={{ marginBottom: '0.5rem' }}>Project 02</div>
              <h3 className="project-name">Local Media Aggregator</h3>
              <p className="project-tagline">Hyperlocal newsletters at scale</p>
              <p className="project-desc">
                An AI-powered aggregator enabling the Inquirer to produce hyperlocal newsletters for communities across the Philadelphia region that were previously out of reach — surfacing relevant local stories automatically.
              </p>
              <div className="press-callout">
                Featured in a <a href="https://www.wsj.com/tech/ai/can-ai-save-local-news-69a01e73" target="_blank" rel="noopener noreferrer"><strong>Wall Street Journal</strong></a> article on AI in local journalism.
              </div>
              <div className="project-meta" style={{ marginTop: '1.2rem' }}>
                <span className="pill amber">NLP</span>
                <span className="pill amber">Automation</span>
                <span className="pill">Content Strategy</span>
                <span className="pill">Newsletter Infra</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
