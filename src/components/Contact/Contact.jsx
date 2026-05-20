import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="section-title reveal">Let&apos;s connect</h2>
        <p className="contact-intro reveal d1">
          I&apos;m open to internship opportunities, collaborations, and interesting projects.
          Whether you want to talk software, data, or security — reach out below.
        </p>

        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info reveal d2">
            <div className="contact-info-item">
              <span className="mono accent contact-info-label">Email</span>
              <a href="mailto:thisaru@example.com" className="contact-info-value">
                thisaru@example.com
              </a>
            </div>
            <div className="contact-info-item">
              <span className="mono accent contact-info-label">LinkedIn</span>
              <a href="https://linkedin.com/in/thisaru" target="_blank" rel="noreferrer" className="contact-info-value">
                linkedin.com/in/thisaru ↗
              </a>
            </div>
            <div className="contact-info-item">
              <span className="mono accent contact-info-label">GitHub</span>
              <a href="https://github.com/thisaru" target="_blank" rel="noreferrer" className="contact-info-value">
                github.com/thisaru ↗
              </a>
            </div>
            <div className="contact-info-item">
              <span className="mono accent contact-info-label">Location</span>
              <span className="contact-info-value">Colombo, Sri Lanka</span>
            </div>
          </div>

          {/* Form side */}
          <form className="contact-form reveal d3" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name" className="form-label mono">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label mono">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label mono">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'sent'  && <p className="form-feedback form-feedback--ok">Message sent — I&apos;ll be in touch soon.</p>}
            {status === 'error' && <p className="form-feedback form-feedback--err">Something went wrong. Email me directly instead.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}