'use client'
import s from './JET.module.css'

const pillars = [
  {
    letter: 'J',
    name: 'Judgment',
    color: 'var(--pillar-judgment)',
    tagline: 'Know when — and when not — to use AI.',
    body: 'Effective AI use begins before you open a chat window. Judgment is the professional discipline of reading context, assessing consequence, and deciding where AI genuinely adds value versus where human expertise must lead. It is the skill that separates thoughtful professionals from reckless adopters.',
    points: [
      'Assess task complexity and professional risk before prompting',
      'Recognize which decisions require human accountability',
      'Apply AI aggressively where stakes are low, carefully where they are high',
      'Protect your reputation by owning every output you sign',
    ],
  },
  {
    letter: 'E',
    name: 'Execution',
    color: 'var(--pillar-execution)',
    tagline: 'Brief AI like the professional you are.',
    body: 'Most professionals get poor AI output not because the models are limited but because they delegate the way they would to someone who already knows everything. Execution is the skill of briefing AI clearly, prompting precisely, iterating intelligently, and consistently extracting output that meets professional standards.',
    points: [
      'Write briefs that give AI the context it needs to do excellent work',
      'Specify deliverables with professional precision',
      'Iterate and give editorial direction rather than accepting first drafts',
      'Match your prompting approach to the type of output you need',
    ],
  },
  {
    letter: 'T',
    name: 'Trust',
    color: 'var(--pillar-trust)',
    tagline: 'Verify before you stake your name on it.',
    body: 'AI works confidently even when it is wrong. Trust is not about blindly believing AI output or reflexively doubting it — it is the professional habit of verifying claims proportional to their consequence. It is how you maintain your credibility in a world where AI-assisted mistakes are increasingly visible.',
    points: [
      'Identify the specific claims in any output that require verification',
      'Understand where AI errors are most likely and most consequential',
      'Build review habits that protect quality without eliminating efficiency',
      'Maintain professional accountability for everything that leaves your desk',
    ],
  },
]

export default function JET() {
  return (
    <section id="jet" className={`${s.jet} section`} aria-labelledby="jet-heading">
      <div className="container">

        {/* Header */}
        <div className={s.header}>
          <p className="t-eyebrow">The Core Framework</p>
          <span className="rule-orange" />
          <h2 id="jet-heading" className={`t-headline ${s.title}`}>
            The J.E.T. Model
          </h2>
          <p className={`t-lead ${s.intro}`}>
            Three professional skills that separate people who use AI effectively
            from those who use it carelessly. These are not technical skills —
            they are professional ones. They transfer across tools, survive every
            model update, and build a reputation that lasts.
          </p>
        </div>

        {/* Pillars */}
        <div className={s.pillars} role="list">
          {pillars.map((p, i) => (
            <article key={p.name} className={s.pillar} role="listitem"
              style={{ '--pillar-c': p.color }}>
              {/* Accent top */}
              <div className={s.pillarTop} aria-hidden="true" />

              {/* Letter watermark */}
              <div className={s.watermark} aria-hidden="true">{p.letter}</div>

              <div className={s.pillarBody}>
                {/* Header row */}
                <div className={s.pillarHeader}>
                  <div className={s.letterBadge} aria-hidden="true"
                    style={{ background: p.color }}>{p.letter}
                  </div>
                  <div>
                    <h3 className={s.pillarName}>{p.name}</h3>
                    <p className={s.pillarTagline}>{p.tagline}</p>
                  </div>
                </div>

                <p className={s.pillarText}>{p.body}</p>

                <ul className={s.points} aria-label={`${p.name} key skills`}>
                  {p.points.map((pt) => (
                    <li key={pt} className={s.point}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        aria-hidden="true" className={s.pointIcon}>
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M5 8L7.2 10.5L11 6" stroke="currentColor"
                          strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Book tie-in */}
        <div className={s.bookTie}>
          <div className={s.bookTieText}>
            <p className="t-eyebrow" style={{ marginBottom: '0.75rem' }}>Go Deeper</p>
            <p className={s.bookTieBody}>
              The J.E.T. Model is explored in full in{' '}
              <em className={s.bookTitle}>Don&apos;t Wait</em> — the book behind this platform.
              A practical, framework-driven guide for any professional who wants to use AI
              with genuine competence, not just speed.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary"
            onClick={e => {
              e.preventDefault()
              const el = document.getElementById('contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' })
            }}>
            Get the Book
          </a>
        </div>
      </div>
    </section>
  )
}
