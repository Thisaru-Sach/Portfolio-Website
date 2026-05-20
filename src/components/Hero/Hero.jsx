import useReveal from '../../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  useReveal()

  return (
    <section id="hero" className="hero">
      <div className="hero-horizon" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="mono hero-tag reveal d1">
          <span className="accent">01</span> — Statistics Undergraduate & Full-Stack Developer
        </p>

        <h1 className="hero-name reveal d2">
          Thisaru<br />
          <span className="hero-name-dim">Sachintha</span>
        </h1>

        <p className="hero-sub reveal d3">
          Final-year Statistics undergraduate at USJP. Building production full-stack systems
          across data, cloud, and security. Passionate about AI, cybersecurity, and software
          engineering beyond the classroom.
        </p>

        <div className="hero-actions reveal d4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact"  className="btn-ghost">Contact Me</a>
        </div>

        <div className="hero-meta mono reveal d5">
          <span>Colombo, Sri Lanka</span>
          <span className="hero-sep">·</span>
          <span>Open to opportunities</span>
          <span className="hero-sep">·</span>
          <a
            href="https://github.com/thisaru"
            target="_blank"
            rel="noreferrer"
            className="hero-meta-link"
          >
            GitHub ↗
          </a>
          <span className="hero-sep">·</span>
          <a
            href="https://linkedin.com/in/thisaru"
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