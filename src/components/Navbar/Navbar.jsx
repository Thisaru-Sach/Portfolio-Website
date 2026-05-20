import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about',     label: 'About'     },
  { href: '#skills',    label: 'Skills'    },
  { href: '#projects',  label: 'Projects'  },
  { href: '#education', label: 'Education' },
  { href: '#contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  // Add backdrop shadow once user scrolls
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Highlight active nav link via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveLink('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar-inner">
        {/* Logo / name */}
        <a href="#hero" className="navbar-logo mono" onClick={close}>
          <span className="accent">T</span>S
        </a>

        {/* Desktop links */}
        <nav className="navbar-links" aria-label="Primary navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navbar-link ${activeLink === l.href ? 'navbar-link--active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="btn-ghost navbar-resume"
            target="_blank"
            rel="noreferrer"
          >
            Résumé ↗
          </a>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar-drawer ${menuOpen ? 'navbar-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="drawer-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" className="drawer-link accent" target="_blank" rel="noreferrer" onClick={close}>
            Résumé ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
