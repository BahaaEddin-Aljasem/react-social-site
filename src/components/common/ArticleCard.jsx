import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FaIcon, Icon } from './Icons'
import './ArticleCard.css'

export function AuthorAvatar({ author, className = 'article-avatar' }) {
  return <span className={`author-avatar ${className}`}><img className="author-photo" src={author.avatar} alt="" /><span className="author-status-dot" /></span>
}

export function ArticleCard({ article, featured = false, listView = false }) {
  const className = featured ? 'article-card featured-card' : 'article-card'
  const meta = <div className="article-meta">
    <span><Icon name="clock" size={16} /> {article.readTime}</span>
    <span className="article-dot" />
    <span>{article.date}</span>
  </div>

  return (
    <article className={className}>
      <Link to={`/blog/${article.slug}`} className="article-image">
        <img src={article.image} alt={article.title} />
        <span className="article-overlay" />
        <span className="article-badge">{article.category}</span>
        {featured && <span className="featured-tag">مميز <FaIcon icon={faStar} size={12} /></span>}
      </Link>
      <div className="article-body">
        {listView ? <div className="list-meta-row"><span className="orange-meta">{article.category}</span>{meta}</div> : meta}
        <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <div className="article-footer">
          <div className="article-author">
            <AuthorAvatar author={article.author} />
            <span className="article-author-info">
              <b>{article.author.name}</b>
              <small>{article.author.role}</small>
            </span>
          </div>
          <Link className="article-arrow" aria-label={`اقرأ ${article.title}`} to={`/blog/${article.slug}`}>
            <Icon name="chevron" size={16} flip />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function FeaturedArticle({ article }) {
  return <article className="featured-row">
    <Link to={`/blog/${article.slug}`} className="featured-row-image">
      <img src={article.image} alt={article.title} />
      <span className="featured-tag">مميز <FaIcon icon={faStar} size={12} /></span>
    </Link>
    <div className="featured-row-body">
      <div className="meta">
        <span className="orange-meta">{article.category}</span>
        <span><Icon name="clock" size={16} /> {article.readTime}</span>
      </div>
      <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <div className="featured-row-footer">
        <div className="author">
          <AuthorAvatar author={article.author} className="avatar" />
          <span>{article.author.name}<small>{article.date}</small></span>
        </div>
        <Link className="read-more" to={`/blog/${article.slug}`}>
          اقرأ المقال <Icon name="arrow" size={20} flip />
        </Link>
      </div>
    </div>
  </article>
}
