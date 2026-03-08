import Link from 'next/link'
import Nav from '../../components/layout/Nav'
import Footer from '../../components/layout/Footer'
import { getAllPosts, PILLARS } from '../../lib/posts'
import s from './blog.module.css'

export const metadata = {
  title: 'Articles & Guides',
  description:
    'Framework-first articles on using AI competently in professional work. Mapped to the J.E.T. Model: Judgment, Execution, Trust, and more.',
}

function PillarTag({ pillar }) {
  const p = PILLARS[pillar]
  if (!p) return null
  return (
    <span className={s.tag} style={{ '--tc': p.color }}>
      {p.label}
    </span>
  )
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main id="main-content" tabIndex="-1">

        {/* Page header */}
        <div className={s.pageHeader}>
          <div className={`container ${s.pageHeaderInner}`}>
            <div className={s.breadcrumb}>
              <Link href="/" className={s.breadHome}>Home</Link>
              <span aria-hidden="true">/</span>
              <span>Articles</span>
            </div>
            <p className="t-eyebrow" style={{ marginBottom: '0.75rem' }}>Knowledge Base</p>
            <span className="rule-orange" />
            <h1 className={`t-display ${s.pageTitle}`}>Articles & Guides</h1>
            <p className={`t-lead ${s.pageIntro}`}>
              Framework-first thinking on using AI competently in professional work.
              No hype, no tool roundups. Practical insight mapped to the J.E.T. Model.
            </p>
          </div>
        </div>

        {/* Pillar filter nav */}
        <div className={s.filterBar}>
          <div className={`container ${s.filterInner}`}>
            <p className={s.filterLabel}>Browse by pillar</p>
            <nav aria-label="Filter articles by pillar">
              <ul className={s.filterList} role="list">
                <li>
                  <Link href="/blog" className={`${s.filterBtn} ${s.filterAll}`}>
                    All Articles
                  </Link>
                </li>
                {Object.values(PILLARS).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog?pillar=${p.slug}`}
                      className={s.filterBtn}
                      style={{ '--tc': p.color }}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Article grid */}
        <div className={`${s.articleSection} section`}>
          <div className="container">

            {/* Stats bar */}
            <div className={s.statsBar}>
              <p className={s.statsCount}>
                <strong>{posts.length}</strong> articles across{' '}
                <strong>{Object.keys(PILLARS).length}</strong> pillars
              </p>
              <p className={s.statsNote}>
                New articles published weekly
              </p>
            </div>

            <div className={s.grid} role="list" aria-label="Article list">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={s.card}
                  role="listitem"
                  aria-label={`${post.title} — ${PILLARS[post.pillar]?.label} — ${post.readTime}`}
                >
                  {/* Left accent by pillar */}
                  <div
                    className={s.cardAccent}
                    style={{ background: PILLARS[post.pillar]?.color }}
                    aria-hidden="true"
                  />

                  <div className={s.cardBody}>
                    <div className={s.cardTop}>
                      <div className={s.cardMeta}>
                        <PillarTag pillar={post.pillar} />
                        <span className={s.cardTime}>{post.readTime}</span>
                      </div>
                      {post.featured && (
                        <span className={s.featuredBadge} aria-label="Featured article">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className={s.cardTitle}>{post.title}</h2>
                    <p className={s.cardExcerpt}>{post.excerpt}</p>

                    <div className={s.cardFooter}>
                      <time className={s.cardDate} dateTime={post.date}>{post.date}</time>
                      <span className={s.cardCta}>Read article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className={s.nlCta}>
              <div className={s.nlCtaText}>
                <h3 className={s.nlCtaTitle}>Get new articles in your inbox</h3>
                <p className={s.nlCtaSub}>
                  Weekly insights on professional AI competence. Free, always.
                </p>
              </div>
              <Link href="/#contact" className="btn btn-primary">
                Subscribe — It&apos;s Free
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
