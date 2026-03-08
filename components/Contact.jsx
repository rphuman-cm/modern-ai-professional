'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

const INITIAL_STATE = {
  name: '',
  email: '',
  role: '',
  message: '',
}

const ROLES = [
  'Manager / Leader',
  'Analyst / Strategist',
  'Marketer / Communicator',
  'HR / People Professional',
  'Consultant / Advisor',
  'Business Owner / Operator',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Your name is required.'
    if (!form.email.trim()) {
      errs.email = 'Your email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) errs.message = 'A message is required.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Focus first error field
      const firstField = Object.keys(errs)[0]
      document.getElementById(`field-${firstField}`)?.focus()
      return
    }
    setSubmitting(true)
    // Simulate network delay — replace with real API call / Netlify Forms
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setForm(INITIAL_STATE)
  }

  return (
    <section
      id="contact"
      className={`${styles.contact} section-pad`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className={styles.inner}>

          {/* Left: Copy */}
          <div className={styles.copyCol}>
            <p className="eyebrow">Get in Touch</p>
            <span className="rule" />
            <h2
              id="contact-heading"
              className={`display-md ${styles.heading}`}
            >
              Start your AI competence journey.
            </h2>
            <p className={`body-base ${styles.subtext}`}>
              Whether you want to learn about the book, ask about the
              J.E.T. Model, or explore how Modern AI Professional can
              support your team — we'd like to hear from you.
            </p>

            {/* Contact info items */}
            <ul className={styles.infoList} aria-label="Contact options">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M2 6.5L9 11L16 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@modernai.pro',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path
                        d="M9 2C6.24 2 4 4.24 4 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z"
                        stroke="currentColor" strokeWidth="1.6"
                      />
                      <circle cx="9" cy="7" r="1.75" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'United States',
                },
              ].map(({ icon, label, value }) => (
                <li key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successState} role="alert" aria-live="polite">
                <div className={styles.successIcon} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M8 14L12.5 18.5L20 10"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message received.</h3>
                <p className={styles.successBody}>
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
                <button
                  className={`btn btn-secondary-dark ${styles.resetBtn}`}
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="field-name" className={styles.label}>
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={!!errors.name}
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <span id="error-name" className={styles.errorMsg} role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="field-email" className={styles.label}>
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      aria-invalid={!!errors.email}
                      placeholder="jane@company.com"
                    />
                    {errors.email && (
                      <span id="error-email" className={styles.errorMsg} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role */}
                <div className={styles.field}>
                  <label htmlFor="field-role" className={styles.label}>
                    Your Role <span className={styles.optional}>(optional)</span>
                  </label>
                  <select
                    id="field-role"
                    name="role"
                    className={styles.select}
                    value={form.role}
                    onChange={handleChange}
                    aria-required="false"
                  >
                    <option value="">Select your professional role</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="field-message" className={styles.label}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={5}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                    placeholder="Tell us what you're working on, or ask a question about the book or J.E.T. Model..."
                  />
                  {errors.message && (
                    <span id="error-message" className={styles.errorMsg} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className={styles.formFooter}>
                  <p className={styles.privacy}>
                    Your information is never shared or sold.
                  </p>
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
