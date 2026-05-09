const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function toMonthAbbr(month: string | number): string {
  if (typeof month === 'number') return MONTH_ABBR[month - 1] ?? '';
  const idx = MONTH_ABBR.findIndex(m => month.toLowerCase().startsWith(m.toLowerCase()));
  return idx >= 0 ? MONTH_ABBR[idx] : month.slice(0, 3);
}

type Talk = {
  year: string;
  month?: string | number;
  conference: string;
  flag?: string;
  location: string;
  talkTitle: string;
  talkUrl?: string;
  badge?: string;
};

const TALKS: Talk[] = [
  {
    year: '2026',
    month: 5,
    conference: 'Hacks Hackers',
    location: 'Perugia, Italy',
    talkTitle: 'Why You Should Use AI to Monitor Local Meetings',
    talkUrl: 'Why You Should Use AI to Monitor Local Meetings',
  },
  {
    year: '2026',
    month: 4,
    conference: 'International Journalism Festival',
    flag: '🇮🇹',
    location: 'Perugia, Italy',
    talkTitle: 'Steal This: AI Projects Newsrooms Actually Shipped (and How They Got It Over the Line)',
    talkUrl: 'https://www.journalismfestival.com/programme/2026/steal-this-ai-projects-newsrooms-actually-shipped-and-how-they-got-it-over-the-line',
    badge: 'International',
  },
  {
    year: '2026',
    month: 2,
    conference: 'Knight Media Forum',
    location: 'Miami, FL',
    talkTitle: 'Showcasing AI Innovation in Local News: Tools, Tactics and Demos',
    talkUrl: 'https://www.linkedin.com/posts/emily-gail-brown_ive-picked-my-head-up-from-the-newsroom-activity-7430733412514181121-HL47?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7PyDkBIiIwtMx0rxVXwToBjt41-zbwJ6A',
  },
  {
    year: '2026',
    month: 1,
    conference: 'National Journalism + AI Accelerator',
    location: 'Phoenix, AZ',
    talkTitle: 'Steal This Idea',
    talkUrl: 'https://www.linkedin.com/posts/asunewswell_the-final-day-of-the-national-journalism-activity-7415153360946995200-P3Fv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7PyDkBIiIwtMx0rxVXwToBjt41-zbwJ6A',
  },
  {
    year: '2025',
    month: 10,
    conference: 'INMA Generative AI Initiative',
    location: '',
    talkTitle: 'Generative AI In The Newsroom',
    talkUrl: 'https://www.inma.org/blogs/Generative-AI-Initiative/post.cfm/genai-provides-newsrooms-with-opportunities-to-improve-and-deepen-research',
  },
  {
    year: '2025',
    month: 9,
    conference: 'ONA25',
    location: 'New Orleans, LA',
    talkTitle: 'Steak This Code: AI Projects you can use today',
  },
  {
    year: '2025',
    month: 5,
    conference: 'Hacks Hackers',
    location: 'Baltimore, MD',
    talkTitle: 'Making an AI tool that people will actually use',
    talkUrl: 'https://www.hackshackers.com/join-us-for-the-hacks-hackers-ai-x-journalism-summit-2025-may-7-8/#sessions',
  },
];

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
          {TALKS.map((talk, i) => (
            <div
              key={i}
              className="talk-card reveal"
              style={i > 0 ? { transitionDelay: `${i * 0.05}s` } : undefined}
            >
              <div className="talk-year">
                {talk.month && <span className="talk-month">{toMonthAbbr(talk.month)} </span>}
                {talk.year}
              </div>
              <h3 className="talk-title">
                {talk.flag && <span className="talk-flag">{talk.flag}</span>}
                {talk.conference}
              </h3>
              <p className="talk-venue">
                {talk.location} —{' '}
                {talk.talkUrl ? (
                  <a href={talk.talkUrl} target="_blank" rel="noopener noreferrer">
                    {talk.talkTitle}
                  </a>
                ) : (
                  talk.talkTitle
                )}
              </p>
              {talk.badge && <div className="featured-badge">{talk.badge}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
