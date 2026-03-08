'use client'
import { useState } from 'react'
import s from './Contact.module.css'

const ROLES = [
  'Manager / Leader', 'Analyst / Strategist', 'Marketer / Communicator',
  'HR / People Professional', 'Consultant / Advisor',
  'Business Owner / Operator', 'Other',
]

const INTERESTS = [
  { id: 'book',      label: "Don't Wait — the book" },
  { id: 'newsletter',label: 'Free newsletter' },
  { id: 'teams',     label: 'For my team / organization' },
  { id: 'general',   label: 'General question' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', role: '', interest: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone]     = useState(false)
  const [busy, setBusy]     = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required.'
    if (!form.email.trim())   e.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  function onChange(e) {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setBusy(true)
    await new Promise(r => setTimeout(r, 1000))
    setBusy(false)
    setDone(true)
  }

  return (
    <section id="contact" className={`${s.section} section`} aria-labelledby="contact-heading">
      <div className="container">

        {/* Section label */}
        <p className="t-eyebrow" style={{ marginBottom: '0.75rem' }}>Get in Touch</p>
        <span className="rule-orange" />

        <div className={s.inner}>

          {/* Left — copy + book card */}
          <div className={s.leftCol}>
            <h2 id="contact-heading" className={`t-headline ${s.heading}`}>
              Start your AI competence journey.
            </h2>
            <p className={`t-body ${s.sub}`}>
              Whether you want to order the book, subscribe to free weekly insights,
              ask a question about the J.E.T. Model, or explore how this platform can
              support your team — we want to hear from you.
            </p>

            {/* Book feature */}
            <div className={s.bookCard} aria-label="Don't Wait book details">
              <div className={s.bookSpine} aria-hidden="true">
                <span>Don&apos;t Wait</span>
              </div>
              <div className={s.bookInfo}>
                <p className="t-eyebrow" style={{ fontSize: '0.62rem', marginBottom: '0.4rem' }}>
                  The Book
                </p>
                <h3 className={s.bookTitle}>
                  <em>Don&apos;t Wait</em>
                </h3>
                <p className={s.bookBody}>
                  The definitive guide to professional AI competence. Introduces
                  the J.E.T. Model in full depth with practical frameworks for every
                  professional role.
                </p>
                <div className={s.bookMeta}>
                  <span className={s.bookBadge}>Judgment</span>
                  <span className={s.bookBadge}>Execution</span>
                  <span className={s.bookBadge}>Trust</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className={s.contactInfo}>
              <div className={s.infoItem}>
                <div className={s.infoIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M2 6L8 9.5L14 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className={s.infoLabel}>Email</span>
                  <span className={s.infoVal}>hello@modernai.pro</span>
                </div>
              </div>
              <div className={s.infoItem}>
                <div className={s.infoIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.4"/>
                    <circle cx="8" cy="6" r="1.75" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                </div>
                <div>
                  <span className={s.infoLabel}>Based In</span>
                  <span className={s.infoVal}>United States</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={s.formWrap}>
            {done ? (
              <div className={s.success} role="alert" aria-live="polite">
                <div className={s.successIcon} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="var(--pillar-trust)" strokeWidth="1.5"/>
                    <path d="M9 16L14 21L23 11" stroke="var(--pillar-trust)" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={s.successTitle}>Message received.</h3>
                <p className={s.successBody}>
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <button className="btn btn-ghost" style={{ marginTop: '0.5rem' }}
                  onClick={() => setDone(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className={s.form} onSubmit={onSubmit} noValidate aria-label="Contact form">
                <div className={s.formHead}>
                  <h3 className={s.formTitle}>Send a message</h3>
                  <p className={s.formSub}>We read every message personally.</p>
                </div>

                {/* Interest selector */}
                <fieldset className={s.fieldset}>
                  <legend className={s.legend}>I&apos;m interested in</legend>
                  <div className={s.interestGrid}>
                    {INTERESTS.map(({ id, label }) => (
                      <label key={id} className={`${s.interestBtn} ${form.interest === id ? s.interestActive : ''}`}>
                        <input type="radio" name="interest" value={id} className={s.srHide}
                          checked={form.interest === id}
                          onChange={() => setForm(p => ({ ...p, interest: id }))} />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Name + Email */}
                <div className={s.row}>
                  <div className={s.field}>
                    <label htmlFor="cf-name" className={s.label}>
                      Name <span className={s.req} aria-hidden="true">*</span>
                    </label>
                    <input id="cf-name" name="name" type="text" autoComplete="name"
                      className={`${s.input} ${errors.name ? s.inputErr : ''}`}
                      value={form.name} onChange={onChange}
                      aria-required="true" aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      placeholder="Jane Smith" />
                    {errors.name && <span id="err-name" className={s.errMsg} role="alert">{errors.name}</span>}
                  </div>
                  <div className={s.field}>
                    <label htmlFor="cf-email" className={s.label}>
                      Email <span className={s.req} aria-hidden="true">*</span>
                    </label>
                    <input id="cf-email" name="email" type="email" autoComplete="email"
                      className={`${s.input} ${errors.email ? s.inputErr : ''}`}
                      value={form.email} onChange={onChange}
                      aria-required="true" aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      placeholder="jane@company.com" />
                    {errors.email && <span id="err-email" className={s.errMsg} role="alert">{errors.email}</span>}
                  </div>
                </div>

                {/* Role */}
                <div className={s.field}>
                  <label htmlFor="cf-role" className={s.label}>Your Role
                    <span className={s.opt}> (optional)</span>
                  </label>
                  <select id="cf-role" name="role" className={s.select}
                    value={form.role} onChange={onChange}>
                    <option value="">Select your professional role</option>
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div className={s.field}>
                  <label htmlFor="cf-message" className={s.label}>
                    Message <span className={s.req} aria-hidden="true">*</span>
                  </label>
                  <textarea id="cf-message" name="message" rows={5}
                    className={`${s.textarea} ${errors.message ? s.inputErr : ''}`}
                    value={form.message} onChange={onChange}
                    aria-required="true" aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    placeholder="Tell us what you're working on or ask a question about the J.E.T. Model..." />
                  {errors.message && <span id="err-message" className={s.errMsg} role="alert">{errors.message}</span>}
                </div>

                <div className={s.formFooter}>
                  <p className={s.privacy}>Your information is never shared or sold.</p>
                  <button type="submit" className={`btn btn-primary ${s.submit}`}
                    disabled={busy} aria-busy={busy}>
                    {busy ? (
                      <><span className={s.spinner} aria-hidden="true" />Sending…</>
                    ) : 'Send Message'}
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
