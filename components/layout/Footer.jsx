'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import s from './Footer.module.css'

const cols = [
  {
    heading: 'Learn',
    links: [
      { label: 'The J.E.T. Model',      href: '/#jet' },
      { label: 'Judgment',              href: '/blog?pillar=judgment' },
      { label: 'Execution',             href: '/blog?pillar=execution' },
      { label: 'Trust & Verification',  href: '/blog?pillar=trust' },
      { label: 'Professional Application', href: '/blog?pillar=application' },
    ],
  },
  {
    heading: 'By Role',
    links: [
      { label: 'Managers & Leaders',     href: '/blog?pillar=application' },
      { label: 'Analysts & Strategists', href: '/blog?pillar=execution' },
      { label: 'Marketers',              href: '/blog?pillar=application' },
      { label: 'HR Professionals',       href: '/blog?pillar=application' },
      { label: 'Consultants',            href: '/blog?pillar=judgment' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: "Don't Wait — The Book", href: '/#contact' },
      { label: 'Newsletter',            href: '/#contact' },
      { label: 'About',                 href: '/#about' },
      { label: 'Contact',               href: '/#contact' },
      { label: 'For Teams',             href: '/#contact' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail]       = useState('')
  const [subDone, setSubDone]   = useState(false)
  const year = new Date().getFullYear()

  function handleSub(e) {
    e.preventDefault()
    if (email.includes('@')) setSubDone(true)
  }

  return (
    <footer className={s.footer} role="contentinfo">
      {/* CTA band */}
      <div className={s.band}>
        <div className={`container ${s.bandInner}`}>
          <div className={s.bandCopy}>
            <p className="t-eyebrow">Start Today</p>
            <h2 className={s.bandHeading}>
              Build AI competence that actually protects your career.
            </h2>
          </div>
          <div className={s.bandActions}>
            <Link href="/#contact" className="btn btn-primary">Get the Book — <em>Don&apos;t Wait</em></Link>
            <Link href="/blog" className="btn btn-ghost">Read Free Articles</Link>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className={s.body}>
        <div className={`container ${s.bodyInner}`}>

          {/* Brand col */}
          <div className={s.brandCol}>
            <Link href="/" aria-label="Modern AI Professional">
              <Image src="/logo.png" alt="Modern AI Professional" width={200} height={56} className={s.logo} />
            </Link>
            <p className={s.tagline}>
              AI Competence for the Work That Actually Matters
            </p>
            <p className={s.desc}>
              A knowledge platform for working professionals who want to use AI
              with skill, judgment, and confidence. Built around the J.E.T. Model.
            </p>

            {/* Newsletter */}
            <div className={s.newsletter}>
              <p className={s.nlLabel}>Weekly insights — free forever</p>
              {subDone ? (
                <p className={s.nlSuccess}>✓ You&apos;re subscribed. Welcome in.</p>
              ) : (
                <form className={s.nlForm} onSubmit={handleSub}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={s.nlInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email for newsletter"
                    required
                  />
                  <button type="submit" className={`btn btn-primary ${s.nlBtn}`}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link cols */}
          <nav className={s.linkGrid} aria-label="Footer navigation">
            {cols.map(({ heading, links }) => (
              <div key={heading} className={s.linkCol}>
                <h3 className={s.colHead}>{heading}</h3>
                <ul role="list">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className={s.fLink}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className={s.bottom}>
          <div className={`container ${s.bottomInner}`}>
            <p className={s.copy}>© {year} Modern AI Professional. All rights reserved.</p>
            <div className={s.legal}>
              {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(t => (
                <Link key={t} href="#" className={s.legalLink}>{t}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
