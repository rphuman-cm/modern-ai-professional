'use client'

import styles from './Features.module.css'

const pillars = [
  {
    id: 'judgment',
    letter: 'J',
    title: 'Judgment',
    tagline: 'Know when — and when not — to use AI.',
    description:
      'Effective AI use begins with a professional question, not a prompt. Judgment is the discipline of reading context, assessing risk, and deciding where AI adds value versus where human expertise must lead.',
    points: [
      'Assess task complexity and consequence',
      'Recognize when AI output requires scrutiny',
      'Protect decisions that demand human accountability',
    ],
  },
  {
    id: 'execution',
    letter: 'E',
    title: 'Execution',
    tagline: 'Brief AI like a skilled professional.',
    description:
      'Getting useful output from AI is a learnable skill. Execution covers how to prompt with precision, provide the right context, iterate intelligently when output misses, and consistently extract work that actually meets professional standards.',
    points: [
      'Construct clear, context-rich prompts',
      'Iterate and refine rather than accept and move on',
      'Match prompting style to output type',
    ],
  },
  {
    id: 'trust',
    letter: 'T',
    title: 'Trust',
    tagline: 'Verify before you stake your name on it.',
    description:
      'AI works confidently — even when it is wrong. Trust is the professional habit of verifying AI output before it carries your signature. It is how you protect your credibility in a world where AI-assisted mistakes are increasingly visible.',
    points: [
      'Identify where AI errors are most likely',
      'Build review habits that fit your workflow',
      'Maintain professional accountability for all output',
    ],
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className={`${styles.features} section-pad`}
      aria-labelledby="features-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <p className="eyebrow">The Core Framework</p>
          <span className="rule" />
          <h2
            id="features-heading"
            className={`display-md ${styles.sectionTitle}`}
          >
            The J.E.T. Model
          </h2>
          <p className={`body-lg ${styles.sectionIntro}`}>
            Three professional skills that separate people who use AI effectively
            from those who use it carelessly. The J.E.T. Model is the intellectual
            foundation of everything on this platform.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid} role="list">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.id}
              className={styles.card}
              role="listitem"
              aria-labelledby={`pillar-${pillar.id}`}
            >
              {/* Card top accent bar */}
              <div className={styles.cardAccent} aria-hidden="true" />

              {/* Letter mark */}
              <div className={styles.letterMark} aria-hidden="true">
                {pillar.letter}
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3
                  id={`pillar-${pillar.id}`}
                  className={`display-md ${styles.cardTitle}`}
                >
                  {pillar.title}
                </h3>
                <p className={styles.cardTagline}>{pillar.tagline}</p>
                <p className={styles.cardDesc}>{pillar.description}</p>

                <ul className={styles.pointList} aria-label={`${pillar.title} key points`}>
                  {pillar.points.map((point) => (
                    <li key={point} className={styles.point}>
                      <svg
                        className={styles.pointIcon}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7L5.5 10.5L12 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            The J.E.T. Model is explored in depth in{' '}
            <em>Don't Wait</em> — the book behind this platform.
          </p>
          <a
            href="#contact"
            className="btn btn-secondary-dark"
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#contact')
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
          >
            Learn About the Book
          </a>
        </div>
      </div>
    </section>
  )
}
