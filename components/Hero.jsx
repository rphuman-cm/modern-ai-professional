'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      className={`${styles.hero} noise-overlay`}
      aria-labelledby="hero-heading"
      id="home"
    >
      {/* Background grid lines */}
      <div className={styles.gridLines} aria-hidden="true" />

      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Eyebrow */}
        <p className={`eyebrow animate-fadeUp delay-1 ${styles.eyebrow}`}>
          Practical AI Competence for Working Professionals
        </p>

        {/* Main Headline */}
        <h1
          id="hero-heading"
          className={`display-xl animate-fadeUp delay-2 ${styles.headline}`}
        >
          Work smarter.<br />
          <em className={styles.accentItalic}>Think clearly.</em><br />
          Lead confidently.
        </h1>

        {/* Sub-headline */}
        <p className={`body-lg animate-fadeUp delay-3 ${styles.subheadline}`}>
          Most AI content teaches you what AI can do.
          Modern AI Professional teaches you how to work with it —
          as a professional skill that protects your credibility
          and makes your work measurably better.
        </p>

        {/* CTA Row */}
        <div className={`animate-fadeUp delay-4 ${styles.ctaRow}`}>
          <a
            href="#features"
            className={`btn btn-primary ${styles.ctaPrimary}`}
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#features')
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
          >
            Explore the J.E.T. Model
          </a>
          <a
            href="#contact"
            className={`btn btn-secondary`}
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#contact')
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
          >
            Get the Book
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`animate-fadeUp delay-5 ${styles.trustRow}`} aria-label="Platform highlights">
          {[
            { label: 'Framework-First', desc: 'Built on the J.E.T. Model' },
            { label: 'Role-Specific', desc: 'Content for your actual work' },
            { label: 'Tool-Agnostic', desc: 'Skills that outlast every new model' },
          ].map(({ label, desc }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustDot} aria-hidden="true" />
              <div>
                <strong className={styles.trustLabel}>{label}</strong>
                <span className={styles.trustDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  )
}
