import './Footer.css'

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-horizon" aria-hidden="true" />
      <div className="footer-atmosphere" aria-hidden="true" />

      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo mono">
              <span className="accent">T</span>S
            </span>
            <p className="footer-tagline">
              Computer Science Undergraduate · Full-Stack Developer · USJP
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-nav-link">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy mono">
            © {new Date().getFullYear()} Thisaru Sachintha.
          </p>
          <div className="footer-social">
            <a href="https://github.com/thisaru"   target="_blank" rel="noreferrer" className="footer-social-link">GitHub ↗</a>
            <a href="https://linkedin.com/in/thisaru" target="_blank" rel="noreferrer" className="footer-social-link">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </footer>
  )
}