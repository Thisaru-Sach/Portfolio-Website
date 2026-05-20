import './Footer.css'

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Horizon glow line — the "ground meets sky" effect */}
      <div className="footer-horizon" aria-hidden="true" />

      {/* Warm horizon gradient wash */}
      <div className="footer-atmosphere" aria-hidden="true" />

      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo mono">
              <span className="accent">T</span>S
            </span>
            <p className="footer-tagline">
              Software Engineer · Computer Science · USJP
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
            <a href="https://github.com"   target="_blank" rel="noreferrer" className="footer-social-link">GitHub ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
