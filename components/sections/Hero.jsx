'use client'
import Link from 'next/link'
import s from './Hero.module.css'

export default function Hero() {
  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' })
  }

  return (
    <section className={s.hero} aria-labelledby="hero-h1" id="home">
      {/* Layered background */}
      <div className={s.bg} aria-hidden="true">
        <div className={s.bgGrid} />
        <div className={s.bgGlow1} />
        <div className={s.bgGlow2} />
        <div className={s.bgNoise} />
      </div>

      <div className={`container ${s.content}`}>
        {/* Badge */}
        <div className={`anim-up d1 ${s.badge}`} aria-label="Framework indicator">
          <span className={s.badgeDot} aria-hidden="true" />
          <span className="t-eyebrow" style={{ color: 'inherit' }}>
            Built on the J.E.T. Model · Judgment · Execution · Trust
          </span>
        </div>

        {/* Headline */}
        <h1 id="hero-h1" className={`t-display anim-up d2 ${s.headline}`}>
          The AI skills that<br />
          <span className={s.hlOrange}>protect your career.</span><br />
          <span className={s.hlItalic}>Not just your productivity.</span>
        </h1>

        {/* Sub */}
        <p className={`t-lead anim-up d3 ${s.sub}`}>
          Modern AI Professional is a knowledge platform for working professionals
          who want to use AI with skill, judgment, and confidence —
          without becoming technologists.
        </p>

        {/* CTAs */}
        <div className={`anim-up d4 ${s.ctas}`}>
          <button
            className="btn btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.875rem 2rem' }}
            onClick={() => scrollTo('jet')}
          >
            Explore the J.E.T. Model
          </button>
          <Link
            href="/blog"
            className="btn btn-ghost"
            style={{ fontSize: '0.95rem', padding: '0.875rem 2rem' }}
          >
            Read Free Articles
          </Link>
        </div>

        {/* Trust strip */}
        <div className={`anim-up d5 ${s.trust}`}>
          {[
            { n: '3',    l: 'Core Competency Pillars' },
            { n: '5+',   l: 'Professional Roles Covered' },
            { n: '100%', l: 'Tool-Agnostic Framework' },
          ].map(({ n, l }) => (
            <div key={l} className={s.trustItem}>
              <strong className={s.trustNum}>{n}</strong>
              <span className={s.trustLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={s.scrollBtn}
        aria-label="Scroll down"
        onClick={() => scrollTo('jet')}
      >
        <span className={s.scrollLine} aria-hidden="true" />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </button>

      <div className={s.fade} aria-hidden="true" />
    </section>
  )
}
