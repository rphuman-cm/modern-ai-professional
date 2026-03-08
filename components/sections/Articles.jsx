import Link from 'next/link'
import { getFeaturedPosts, PILLARS } from '../../lib/posts'
import s from './Articles.module.css'

function PillarTag({ pillar }) {
  const p = PILLARS[pillar]
  if (!p) return null
  return (
    <span className={s.tag} style={{ '--tc': p.color }}>
      {p.label}
    </span>
  )
}

export default function Articles() {
  const posts = getFeaturedPosts()
  const [featured, ...rest] = posts

  return (
    <section id="articles" className={`${s.section} section`} aria-labelledby="articles-heading">
      <div className="container">

        {/* Header */}
        <div className={s.header}>
          <div className={s.headerLeft}>
            <p className="t-eyebrow">From the Platform</p>
            <span className="rule-orange" />
            <h2 id="articles-heading" className={`t-headline ${s.title}`}>
              Articles & Guides
            </h2>
            <p className={`t-body ${s.intro}`}>
              Framework-first thinking on using AI competently in professional work.
              No hype, no tool roundups — practical insight mapped to the J.E.T. Model.
            </p>
          </div>
          <Link href="/blog" className={`btn btn-ghost-orange ${s.allLink}`}>
            View all articles →
          </Link>
        </div>

        {/* Featured layout: 1 large + 3 smaller */}
        <div className={s.grid}>

          {/* Large featured card */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className={`${s.card} ${s.cardFeatured}`}>
              <div className={s.cardImage} aria-hidden="true">
                <div className={s.cardImageInner}>
                  <span className={s.cardImageLetter}>{featured.slug[0].toUpperCase()}</span>
                </div>
              </div>
              <div className={s.cardBody}>
                <div className={s.cardMeta}>
                  <PillarTag pillar={featured.pillar} />
                  <span className={s.readTime}>{featured.readTime}</span>
                </div>
                <h3 className={`${s.cardTitle} ${s.cardTitleLg}`}>{featured.title}</h3>
                <p className={s.cardExcerpt}>{featured.excerpt}</p>
                <div className={s.cardFooter}>
                  <span className={s.cardDate}>{featured.date}</span>
                  <span className={s.cardRead}>Read article →</span>
                </div>
              </div>
            </Link>
          )}

          {/* 3 smaller cards */}
          <div className={s.cardStack}>
            {rest.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={`${s.card} ${s.cardSmall}`}>
                <div className={s.cardBody}>
                  <div className={s.cardMeta}>
                    <PillarTag pillar={post.pillar} />
                    <span className={s.readTime}>{post.readTime}</span>
                  </div>
                  <h3 className={s.cardTitle}>{post.title}</h3>
                  <p className={`${s.cardExcerpt} ${s.cardExcerptSm}`}>{post.excerpt}</p>
                  <div className={s.cardFooter}>
                    <span className={s.cardDate}>{post.date}</span>
                    <span className={s.cardRead}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pillar browse strip */}
        <div className={s.pillarsStrip}>
          <p className={s.stripLabel}>Browse by pillar</p>
          <div className={s.stripTags}>
            {Object.values(PILLARS).map((p) => (
              <Link
                key={p.slug}
                href={`/blog?pillar=${p.slug}`}
                className={s.stripTag}
                style={{ '--tc': p.color }}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
