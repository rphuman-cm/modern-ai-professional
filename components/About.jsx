'use client'

import styles from './About.module.css'

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.about} section-pad noise-overlay`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className={styles.inner}>

          {/* Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame} aria-hidden="true">
              {/* Decorative placeholder — replace with real image via next/image */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.imagePlaceholderInner}>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    aria-hidden="true"
                    className={styles.placeholderIcon}
                  >
                    <rect
                      x="8" y="16" width="48" height="36"
                      rx="3" stroke="currentColor" strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="24" cy="30" r="5" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M8 44L20 33L28 41L40 28L56 44"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.placeholderText}>
                    Photo / Brand Image
                  </span>
                </div>
              </div>

              {/* Decorative border offset */}
              <div className={styles.frameBorder} aria-hidden="true" />
            </div>

            {/* Book callout */}
            <div className={styles.bookCallout}>
              <div className={styles.bookSpine} aria-hidden="true">
                <span>Don't Wait</span>
              </div>
              <div className={styles.bookInfo}>
                <p className={`eyebrow ${styles.bookEyebrow}`}>The Book</p>
                <p className={styles.bookTitle}>
                  <em>Don't Wait</em>
                </p>
                <p className={styles.bookDesc}>
                  The definitive guide to professional AI competence,
                  introducing the J.E.T. Model in full depth.
                </p>
                <a href="#contact" className={`btn btn-primary ${styles.bookBtn}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#contact')
                    if (target) {
                      const top = target.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top, behavior: 'smooth' })
                    }
                  }}
                >
                  Get Your Copy
                </a>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className={styles.textCol}>
            <p className="eyebrow">About the Platform</p>
            <span className="rule" />
            <h2
              id="about-heading"
              className={`display-md ${styles.heading}`}
            >
              Built for professionals who need AI to work —
              <em className={styles.accentItalic}> not just impress.</em>
            </h2>

            <p className={`body-base ${styles.body}`}>
              Most AI education is built for the wrong audience. Developers get
              deep technical resources. Everyone else gets hype, tool listicles,
              and prompts that work once. Modern AI Professional was built
              to fill the gap.
            </p>

            <p className={`body-base ${styles.body}`}>
              This platform is for the manager who needs to run a better
              planning meeting. The analyst who wants to pressure-test their
              thinking. The marketer who needs to protect their brand voice
              while moving faster. The consultant who cannot afford to put
              their reputation at risk.
            </p>

            <p className={`body-base ${styles.body}`}>
              The J.E.T. Model — Judgment, Execution, Trust — gives every
              professional a durable framework for using AI competently,
              regardless of which tools dominate next year.
            </p>

            {/* Stat row */}
            <div className={styles.statRow} aria-label="Platform highlights">
              {[
                { value: '3', label: 'Core Competencies' },
                { value: '5+', label: 'Professional Roles Covered' },
                { value: '1', label: 'Clear Framework' },
              ].map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
