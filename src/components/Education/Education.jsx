import { education, certifications } from '../../data/education'
import './Education.css'

export default function Education() {
  const edu = education[0]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <p className="section-label reveal">Education &amp; Credentials</p>
        <h2 className="section-title reveal">
          Academic foundation &amp;<br />continuous learning
        </h2>

        <div className="edu-grid">
          {/* ── Academic ── */}
          <div className="edu-block reveal d1"> 
            <div className="edu-header">
              <span className="mono accent edu-num">01</span>
              <div>
                <span className="edu-period mono">{edu.period}</span>
                <span className={`edu-badge edu-badge--active`}>{edu.status}</span>
              </div>
            </div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <ul className="edu-notes">
              {edu.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>

          {/* ── Certifications ── */}
          <div className="cert-block">
            <p className="cert-heading mono reveal d2">Certifications &amp; Skills</p>
            <div className="cert-list">
              {certifications.map((c, i) => (
                <div key={c.name} className={`cert-card reveal d${i + 1}`}>
                  <div className="cert-top">
                    <h4 className="cert-name">{c.name}</h4>
                    <span
                      className={`cert-status mono cert-status--${c.status.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-label={`Status: ${c.status}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="cert-issuer">{c.issuer}</p>
                  <p className="cert-relevance">{c.relevance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
