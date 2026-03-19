export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <hr className="rule" style={{ flex: 1 }} />
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-main reveal">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(242,236,224,0.8)' }}>
              I&apos;m an AI Engineer with a background in <strong>Explainable AI</strong> — the discipline of making machine learning systems transparent, interpretable, and trustworthy. I&apos;ve spent the last few years applying that foundation inside one of America&apos;s most storied newsrooms, building production systems that let language models do real, consequential work.
            </p>

            <blockquote className="pull-quote">
              &ldquo;The most powerful AI systems are the ones that show their work.&rdquo;
            </blockquote>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(242,236,224,0.65)' }}>
              My work spans the full stack: indexing pipelines, retrieval architectures, agentic systems, and the UX that makes AI legible to non-technical stakeholders. I care deeply about the gap between a model that performs well on benchmarks and one that earns trust in production.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(242,236,224,0.65)', marginTop: '1rem' }}>
              I&apos;m now looking for my next chapter — roles at the frontier of applied AI where interpretability, reliability, and real-world impact aren&apos;t afterthoughts.
            </p>
          </div>

          <div className="col-divider" style={{ background: 'var(--rule)', margin: '0 2.5rem' }}></div>

          <div className="about-aside reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="label" style={{ marginBottom: '1rem' }}>Core Expertise</div>
            <ul className="expertise-list">
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Multi-Agent System Design</li>
              <li>Explainable AI &amp; Interpretability</li>
              <li>Azure AI Search &amp; Cognitive Services</li>
              <li>OpenAI Platform (Agents SDK, Responses API)</li>
              <li>NLP Evaluation (BLEU, METEOR, GLEU)</li>
              <li>Python · Data Engineering · API Design</li>
              <li>Journalism Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
