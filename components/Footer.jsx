'use client'

import styles from './Footer.module.css'
import Image from 'next/image'

const footerLinks = {
  Platform: [
    { label: 'The J.E.T. Model', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Learn: [
    { label: 'Judgment', href: '#features' },
    { label: 'Execution', href: '#features' },
    { label: 'Trust', href: '#features' },
  ],
  Resources: [
    { label: "Don\u2019t Wait (Book)", href: '#contact' },
    { label: 'Newsletter', href: '#contact' },
    { label: 'For Teams', href: '#contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Top section */}
      <div className={`container ${styles.top}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="Modern AI Professional">
            <span className={styles.logoMark} aria-hidden="true">MAP</span>
            <span className={styles.logoText}>
              Modern AI<br />
              <strong>Professional</strong>
            </span>
          </a>
          <p className={styles.tagline}>
            AI competence for the work that actually matters.
          </p>
          <p className={styles.brandDesc}>
            Practical frameworks, not hype. Professional skills,
            not tool reviews. Built around the J.E.T. Model:
            Judgment, Execution, and Trust.
          </p>

          {/* Newsletter micro-signup */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>
              Get insights in your inbox
            </p>
            <form
              className={styles.newsletterForm}
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.newsletterInput}
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className={`btn btn-primary ${styles.newsletterBtn}`}
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links columns */}
        <nav className={styles.linksGrid} aria-label="Footer navigation">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>{category}</h3>
              <ul className={styles.linkList} role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={styles.footerLink}
                      onClick={(e) => handleClick(e, href)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {currentYear} Modern AI Professional. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className={styles.legalLink}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
