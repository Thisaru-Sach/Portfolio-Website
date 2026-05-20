import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label reveal">About</p>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              Bridging data,<br />systems &amp; finance
            </h2>
            <p className="about-body reveal d1">
              Final-year Statistics undergraduate at USJP with hands-on experience shipping
              production full-stack systems — REST APIs, cloud infra, auth flows, and polished UIs.
            </p>
            <p className="about-body reveal d2">
              Drawn to where technology meets financial data. Building reliable, high-throughput
              systems for platforms like LSEG's is exactly where I want to grow.
            </p>
            <p className="about-body reveal d3">
              I care about code quality, system reliability, and data integrity — the three things
              that matter most at a financial data company.
            </p>
          </div>

          <div className="about-stats">
            {[
              { value: '3+',    label: 'Years full-stack dev'         },
              { value: 'Java',  label: 'Spring Boot microservices'    },
              { value: 'React', label: 'Production UIs shipped'       },
              { value: 'SQL',   label: 'PostgreSQL & data modelling'  },
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
