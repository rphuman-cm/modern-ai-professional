'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './Nav.module.css'

const links = [
  { label: 'The J.E.T. Model', href: '/#jet' },
  { label: 'Articles',         href: '/blog' },
  { label: 'About',            href: '/#about' },
]

function scrollTo(href) {
  if (!href.startsWith('/#')) return
  const id = href.replace('/#', '')
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [isHome,   setIsHome]     = useState(false)

  useEffect(() => {
    setIsHome(window.location.pathname === '/')
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleLink(e, href) {
    if (href.startsWith('/#')) {
      if (isHome) {
        e.preventDefault()
        setMenuOpen(false)
        scrollTo(href)
      }
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <header className={`${s.header} ${scrolled ? s.solid : ''}`} role="banner">
      {/* Top bar — only shown when not scrolled on home */}
      <div className={s.topBar}>
        <div className={`container ${s.topBarInner}`}>
          <span>New: <em>Don&apos;t Wait</em> — The professional&apos;s guide to AI competence</span>
          <a href="/#contact" className={s.topBarCta}>Get the book →</a>
        </div>
      </div>

      <div className={`container ${s.inner}`}>
        {/* Logo — black bg is seamless on dark nav */}
        <Link href="/" className={s.logo} aria-label="Modern AI Professional — Home">
          <Image
            src="/logo.png"
            alt="Modern AI Professional"
            width={220}
            height={62}
            className={s.logoImg}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={s.desktopNav} aria-label="Primary navigation">
          <ul role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={s.navLink}
                  onClick={(e) => handleLink(e, href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.navActions}>
            <Link href="/#contact" className={`btn btn-ghost ${s.bookLink}`}
              onClick={(e) => handleLink(e, '/#contact')}>
              Get the Book
            </Link>
            <Link href="/#contact" className={`btn btn-primary`}
              onClick={(e) => handleLink(e, '/#contact')}>
              Subscribe Free
            </Link>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={s.burger}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${s.bLine} ${menuOpen ? s.bLine1Open : ''}`} />
          <span className={`${s.bLine} ${menuOpen ? s.bLine2Open : ''}`} />
          <span className={`${s.bLine} ${menuOpen ? s.bLine3Open : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-nav" className={`${s.mobileNav} ${menuOpen ? s.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul role="list" className={s.mobileLinks}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={s.mobileLink}
                  onClick={(e) => handleLink(e, href)}
                  tabIndex={menuOpen ? 0 : -1}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.mobileBtns}>
            <Link href="/#contact" className={`btn btn-ghost ${s.mobileBtn}`}
              onClick={(e) => handleLink(e, '/#contact')} tabIndex={menuOpen ? 0 : -1}>
              Get the Book
            </Link>
            <Link href="/#contact" className={`btn btn-primary ${s.mobileBtn}`}
              onClick={(e) => handleLink(e, '/#contact')} tabIndex={menuOpen ? 0 : -1}>
              Subscribe Free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
