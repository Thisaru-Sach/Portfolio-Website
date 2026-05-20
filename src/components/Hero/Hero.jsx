import useReveal from '../../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  // Initialise the scroll-reveal observer for this page
  useReveal()

  return (
    <section id="hero" className="hero">
      {/* Subtle horizon glow at the bottom of hero */}
      <div className="hero-horizon" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="mono hero-tag reveal d1">
          <span className="accent">01</span> - Software Engineer & Computer Science Undergraduate
        </p>

        <h1 className="hero-name reveal d2">
          Thisaru<br />
          <span className="hero-name-dim">Sachintha</span>
        </h1>

        <p className="hero-sub reveal d3">
          Final-year Computer Science undergraduate at USJP. Building production full-stack systems
          across finance, data, and cloud. Seeking a Software Engineering Internship at&nbsp;
          <span className="accent">LSEG</span>.
        </p>

        <div className="hero-actions reveal d4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact"  className="btn-ghost">Contact Me</a>
        </div>

        <div className="hero-meta mono reveal d5">
          <span>Colombo, Sri Lanka</span>
          <span className="hero-sep">·</span>
          <span>Open to internships</span>
          <span className="hero-sep">·</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hero-meta-link"
          >
            GitHub ↗
          </a>
          <span className="hero-sep">·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hero-meta-link"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <p className="hero-scroll mono" aria-hidden="true">scroll ↓</p>
    </section>
  )
}
