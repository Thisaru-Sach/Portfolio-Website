import { useState, useCallback } from 'react'
import { projects } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  // Desktop: which project is hovered
  const [hovered, setHovered] = useState(null)
  // Desktop: mouse position for floating preview
  const [mouse, setMouse]     = useState({ x: 0, y: 0 })
  // Mobile: which project is tapped open
  const [tapped, setTapped]   = useState(null)

  // Track mouse position relative to viewport
  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }, [])

  // Clamp preview so it never overflows viewport
  const previewStyle = (() => {
    const pw = 280, ph = 170    // preview dimensions (match CSS)
    const margin = 20
    const x = Math.min(mouse.x + 18, window.innerWidth  - pw - margin)
    const y = Math.min(mouse.y + 18, window.innerHeight - ph - margin)
    return { left: x, top: y }
  })()

  const toggleTap = (id) => setTapped((prev) => (prev === id ? null : id))

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">
          Work that demonstrates<br />production readiness
        </h2>

        <div className="projects-list" onMouseMove={handleMouseMove}>
          {projects.map((p, i) => {
            const isTapped = tapped === p.id

            return (
              <article
                key={p.id}
                className={`project-row reveal d${(i % 3) + 1}`}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(p.id)}
                onBlur={() => setHovered(null)}
                /* Mobile tap handler */
                onClick={() => toggleTap(p.id)}
                tabIndex={0}
                aria-label={`Project: ${p.title}`}
              >
                <div className="project-row-inner">
                  {/* Left: number + title */}
                  <div className="project-left">
                    <span className="project-num mono accent">{p.tag}</span>
                    <div>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-role mono">{p.role}</p>
                    </div>
                  </div>

                  {/* Centre: tech chips */}
                  <ul className="project-tech" aria-label="Technologies used">
                    {p.tech.map((t) => (
                      <li key={t} className="tech-chip">{t}</li>
                    ))}
                  </ul>

                  {/* Right: links */}
                  <div className="project-links">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`GitHub repo for ${p.title}`}
                      >
                        GitHub ↗
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Live demo for ${p.title}`}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Description (always visible on mobile tap) */}
                <p className={`project-desc ${isTapped ? 'project-desc--visible' : ''}`}>
                  {p.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>

      {/* Desktop floating image preview — follows cursor */}
      {hovered !== null && (() => {
        const project = projects.find((p) => p.id === hovered)
        return project ? (
          <div className="project-preview" style={previewStyle} aria-hidden="true">
            <img src={project.image} alt={`${project.title} preview`} />
            <p className="preview-caption mono">{project.description.slice(0, 80)}…</p>
          </div>
        ) : null
      })()}
    </section>
  )
}
