'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [liveDate, setLiveDate] = useState('——');

  useEffect(() => {
    const d = new Date();
    setLiveDate(
      d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  return (
    <section id="hero">
      <div className="container">

        {/* Dateline row */}
        <div className="dateline">
          <div className="dateline-left">
            <span className="mono" style={{ color: 'rgba(242,236,224,0.3)' }}>Vol. V</span>
            <span className="mono" style={{ color: 'rgba(242,236,224,0.3)' }}>Philadelphia, PA</span>
          </div>
          <span className="mono" style={{ color: 'rgba(242,236,224,0.3)' }}>{liveDate}</span>
        </div>

        {/* Three-column hero */}
        <div className="hero-layout">

          {/* Col 1: Headline */}
          <div className="hero-col-left">
            <h1 className="hero-headline">
              Building<br />
              AI that<br />
              <em>explains</em><br />
              itself.
            </h1>
            <p className="hero-deck">
              AI Engineer at The Philadelphia Inquirer. I build production systems that bring natural language to journalism — archives, audiences, and infrastructure that lasts.
            </p>
          </div>

          <div className="col-divider"></div>

          {/* Col 2: Terminal */}
          <div className="hero-col-mid">
            <div className="terminal-block">
              <div><span className="prompt">$</span> whoami</div>
              <div className="out">kevin@inquirer &nbsp;~&nbsp; AI Engineer</div>
              <br />
              <div><span className="prompt">$</span> ls projects/</div>
              <div className="out">dewey/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← digital librarian</div>
              <div className="out">aggregator/&nbsp;&nbsp; ← hyperlocal media</div>
              <div className="out">xai/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ← explainable AI</div>
              <br />
              <div><span className="prompt">$</span> cat status.txt</div>
              <div className="out">Open to bleeding-edge</div>
              <div className="out">AI roles. Let&apos;s talk.<span className="cursor"></span></div>
            </div>
          </div>

          <div className="col-divider"></div>

          {/* Col 3: Stats */}
          <div className="hero-col-right">
            <div className="stat-stack">
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Conference talks<br />incl. Int&apos;l</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Major newsrooms<br />running Dewey</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">Years of archive<br />made searchable</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer tags row */}
        <div className="hero-footer">
          <span className="hero-tag"><span>▸</span>RAG / Multi-Agent</span>
          <span className="hero-tag"><span>▸</span>Explainable AI</span>
          <span className="hero-tag"><span>▸</span>Azure AI Search</span>
          <span className="hero-tag"><span>▸</span>OpenAI Platform</span>
          <span className="hero-tag"><span>▸</span>NLP Evaluation</span>
          <span className="hero-tag"><span>▸</span>Journalism Tech</span>
        </div>

      </div>
    </section>
  );
}
