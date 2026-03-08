import s from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`${s.about} section`} aria-labelledby="about-heading">
      <div className="container">
        <div className={s.inner}>

          {/* Left — visual column */}
          <div className={s.visualCol} aria-hidden="true">
            <div className={s.visualCard}>
              <div className={s.vcTop}>
                <span className={s.vcLabel}>J.E.T. Competency Model</span>
                <span className={s.vcVersion}>v2.0</span>
              </div>
              <div className={s.vcPillars}>
                {[
                  { l: 'J', name: 'Judgment',  c: 'var(--pillar-judgment)',   w: '92%' },
                  { l: 'E', name: 'Execution', c: 'var(--pillar-execution)', w: '78%' },
                  { l: 'T', name: 'Trust',     c: 'var(--pillar-trust)',     w: '85%' },
                ].map(({ l, name, c, w }) => (
                  <div key={l} className={s.vcBar}>
                    <div className={s.vcBarLabel}>
                      <span className={s.vcBarLetter} style={{ color: c }}>{l}</span>
                      <span>{name}</span>
                    </div>
                    <div className={s.vcBarTrack}>
                      <div className={s.vcBarFill} style={{ width: w, background: c }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.vcFooter}>
                <div className={s.vcStat}><strong>Professional</strong><span>Focus</span></div>
                <div className={s.vcStat}><strong>Tool-Agnostic</strong><span>Framework</span></div>
                <div className={s.vcStat}><strong>Durable</strong><span>Skills</span></div>
              </div>
            </div>

            {/* Quote card */}
            <div className={s.quoteCard}>
              <p className={s.quoteText}>
                &ldquo;The professionals who will build durable reputations are not
                those who adopted earliest — but those who adopted most
                <em> thoughtfully.</em>&rdquo;
              </p>
              <p className={s.quoteSource}>— Modern AI Professional</p>
            </div>
          </div>

          {/* Right — text */}
          <div className={s.textCol}>
            <p className="t-eyebrow">About the Platform</p>
            <span className="rule-orange" />
            <h2 id="about-heading" className={`t-headline ${s.heading}`}>
              Built for professionals who need AI to work.{' '}
              <em className={s.em}>Not just impress.</em>
            </h2>

            <p className={`t-body ${s.body}`}>
              Most AI education is built for the wrong audience. Developers get deep technical
              resources. Everyone else gets hype cycles, tool listicles, and prompt templates
              that work once. Modern AI Professional was built to fill that gap.
            </p>

            <p className={`t-body ${s.body}`}>
              This platform is for the manager who needs to run a better planning meeting.
              The analyst who wants to pressure-test their thinking. The marketer who needs
              to protect their brand voice while moving faster. The consultant who cannot afford
              to stake their reputation on output they have not verified.
            </p>

            <p className={`t-body ${s.body}`}>
              The J.E.T. Model — Judgment, Execution, Trust — provides a durable framework
              for professional AI competence that survives every model update, every new tool,
              and every industry shift.
            </p>

            {/* Role grid */}
            <div className={s.roles}>
              {[
                'Managers & Leaders',
                'Analysts & Strategists',
                'Marketers',
                'HR Professionals',
                'Consultants & Advisors',
                'Business Owners',
              ].map((r) => (
                <div key={r} className={s.role}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" stroke="var(--orange)" strokeWidth="1.2"/>
                    <circle cx="6" cy="6" r="2" fill="var(--orange)"/>
                  </svg>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
