import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label reveal">About</p>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              Data, systems<br />&amp; security
            </h2>
            <p className="about-body reveal d1">
              Final-year Statistics undergraduate at USJP with hands-on experience shipping
              production full-stack systems — REST APIs, cloud infrastructure, auth flows, and
              polished UIs built end-to-end.
            </p>
            <p className="about-body reveal d2">
              Outside coursework I explore AI tooling (local LLMs with Ollama), cybersecurity
              (ISC2 CC self-study), and Spring Boot microservices. I build things that ship to
              real users and handle real data.
            </p>
            <p className="about-body reveal d3">
              I care about code quality, system reliability, and data integrity — and I'm always
              looking for the next hard problem to solve.
            </p>
          </div>

          <div className="about-stats">
            {[
              { value: '3+',    label: 'Years full-stack dev'           },
              { value: 'Java',  label: 'Spring Boot microservices'      },
              { value: 'React', label: 'Production UIs shipped'         },
              { value: 'SQL',   label: 'PostgreSQL & data modelling'    },
            ].map((s, i) => (
              <div key={s.label} className={`stat-card reveal d${i + 1}`}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}