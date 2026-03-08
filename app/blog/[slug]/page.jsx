import Link from 'next/link'
import Nav from '../../../components/layout/Nav'
import Footer from '../../../components/layout/Footer'
import { getPostBySlug, getAllPosts, getRelatedPosts, PILLARS } from '../../../lib/posts'
import s from './article.module.css'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderContent(content) {
  // Simple markdown-like renderer for our static content
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} />)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      // Bold paragraph (like a sub-heading in body)
      elements.push(<p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>)
    } else {
      // Regular paragraph — handle inline bold/italic
      const parsed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
      elements.push(
        <p key={i} dangerouslySetInnerHTML={{ __html: parsed }} />
      )
    }
    i++
  }
  return elements
}

export default function ArticlePage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <>
        <Nav />
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Article not found
            </h1>
            <Link href="/blog" className="btn btn-primary">Back to Articles</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const pillar  = PILLARS[post.pillar]
  const related = getRelatedPosts(post.slug, post.pillar, 3)

  return (
    <>
      <Nav />
      <main id="main-content" tabIndex="-1">

        {/* Article header */}
        <div className={s.articleHeader} style={{ '--pillar-c': pillar?.color }}>
          <div className={`container ${s.headerInner}`}>
            {/* Breadcrumb */}
            <nav className={s.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" className={s.breadLink}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className={s.breadLink}>Articles</Link>
              <span aria-hidden="true">/</span>
              <span className={s.breadCurrent} aria-current="page">
                {pillar?.label}
              </span>
            </nav>

            {/* Pillar tag */}
            {pillar && (
              <span className={s.pillarTag} style={{ '--tc': pillar.color }}>
                {pillar.label}
              </span>
            )}

            {/* Title */}
            <h1 className={`t-display ${s.title}`}>{post.title}</h1>

            {/* Excerpt */}
            <p className={`t-lead ${s.excerpt}`}>{post.excerpt}</p>

            {/* Meta row */}
            <div className={s.metaRow}>
              <time className={s.date} dateTime={post.date}>{post.date}</time>
              <span className={s.metaDot} aria-hidden="true">·</span>
              <span className={s.readTime}>{post.readTime}</span>
              {post.featured && (
                <>
                  <span className={s.metaDot} aria-hidden="true">·</span>
                  <span className={s.featBadge}>Featured</span>
                </>
              )}
            </div>
          </div>

          {/* Pillar color bar at bottom of header */}
          <div className={s.headerBar} aria-hidden="true" />
        </div>

        {/* Article body */}
        <div className={s.articleBody}>
          <div className="container">
            <div className={s.bodyGrid}>

              {/* Main content */}
              <article className={s.prose} aria-label={post.title}>
                <div className="prose">
                  {renderContent(post.content)}
                </div>

                {/* End-of-article JET callout */}
                <div className={s.jetCallout}>
                  <div className={s.jetCalloutIcon} aria-hidden="true">
                    <span>J</span><span>E</span><span>T</span>
                  </div>
                  <div className={s.jetCalloutText}>
                    <p className="t-eyebrow" style={{ marginBottom: '0.4rem' }}>
                      Built on the J.E.T. Model
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      This article is part of the{' '}
                      <strong style={{ color: 'var(--text-secondary)' }}>
                        {pillar?.label}
                      </strong>{' '}
                      pillar of the J.E.T. framework — a professional competency
                      model for AI use. Explore it in full in{' '}
                      <em style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                        Don&apos;t Wait
                      </em>.
                    </p>
                  </div>
                  <Link href="/#contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
                    Get the Book
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className={s.sidebar} aria-label="Article sidebar">

                {/* About this pillar */}
                {pillar && (
                  <div className={s.sideCard}>
                    <div className={s.sideCardTop} style={{ borderColor: pillar.color }}>
                      <span className={s.sideCardLabel}>Pillar</span>
                      <span className={s.sideCardPillar} style={{ color: pillar.color }}>
                        {pillar.label}
                      </span>
                    </div>
                    <p className={s.sideCardDesc}>{pillar.description}</p>
                    <Link href={`/blog?pillar=${pillar.slug}`}
                      className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                      More {pillar.label} articles →
                    </Link>
                  </div>
                )}

                {/* JET Model mini */}
                <div className={s.sideCard}>
                  <p className={s.sideHead}>The J.E.T. Model</p>
                  <div className={s.jetMini}>
                    {[
                      { l: 'J', name: 'Judgment',  c: 'var(--pillar-judgment)' },
                      { l: 'E', name: 'Execution', c: 'var(--pillar-execution)' },
                      { l: 'T', name: 'Trust',     c: 'var(--pillar-trust)' },
                    ].map(({ l, name, c }) => (
                      <div key={l} className={`${s.jetMiniItem} ${post.pillar === name.toLowerCase() ? s.jetMiniActive : ''}`}
                        style={{ '--jc': c }}>
                        <span className={s.jetMiniLetter} style={{ background: c }}>{l}</span>
                        <span className={s.jetMiniName}>{name}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/#jet" className="btn btn-ghost-orange"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', marginTop: '1rem' }}>
                    Explore the full model
                  </Link>
                </div>

                {/* Get the book */}
                <div className={`${s.sideCard} ${s.sideCardBook}`}>
                  <p className="t-eyebrow" style={{ marginBottom: '0.5rem' }}>The Book</p>
                  <h3 className={s.bookTitle}>
                    <em>Don&apos;t Wait</em>
                  </h3>
                  <p className={s.bookSub}>
                    The complete guide to professional AI competence,
                    built around the J.E.T. Model.
                  </p>
                  <Link href="/#contact" className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Get Your Copy
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className={s.related}>
            <div className="container">
              <div className={s.relatedHeader}>
                <h2 className={`t-subhead ${s.relatedTitle}`}>
                  More on {pillar?.label}
                </h2>
                <Link href="/blog" className="btn btn-ghost-orange" style={{ fontSize: '0.8rem' }}>
                  View all articles →
                </Link>
              </div>
              <div className={s.relatedGrid}>
                {related.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className={s.relCard}>
                    <div className={s.relCardBar}
                      style={{ background: PILLARS[rp.pillar]?.color }} aria-hidden="true" />
                    <div className={s.relCardBody}>
                      <span className={s.relTag} style={{ '--tc': PILLARS[rp.pillar]?.color }}>
                        {PILLARS[rp.pillar]?.label}
                      </span>
                      <h3 className={s.relCardTitle}>{rp.title}</h3>
                      <p className={s.relCardExcerpt}>{rp.excerpt}</p>
                      <span className={s.relCardCta}>Read article →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
