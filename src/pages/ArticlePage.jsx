import { Fragment, useState } from 'react'
import { faArrowLeft, faCamera, faChevronLeft, faHome, faLink, faShareNodes, faTags } from '@fortawesome/free-solid-svg-icons'
import { faCalendar as faCalendarRegular, faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { AuthorAvatar } from '../components/common/ArticleCard'
import { FaIcon, Icon } from '../components/common/Icons'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { articles } from '../data/siteData'
import './ArticlePage.css'

function getArticleSections(article) {
  const blocks = article.content.split(/\n\n(?=## )/)
  const intro = blocks.shift() ?? ''
  return {
    intro,
    sections: blocks.map((block, index) => {
      const [heading, ...paragraphs] = block.split('\n\n')
      return { id: `section-${index + 1}`, title: heading.replace(/^##\s*/, ''), paragraphs }
    }),
  }
}

function formatArticleDate(date) {
  return new Intl.DateTimeFormat('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`))
}

export default function ArticlePage({ article }) {
  const { intro, sections } = getArticleSections(article)
  const publishedDate = formatArticleDate(article.date)
  const articleUrl = typeof window === 'undefined' ? '' : window.location.href
  const shareText = encodeURIComponent(article.title)
  const encodedArticleUrl = encodeURIComponent(articleUrl)
  const [copyStatus, setCopyStatus] = useState('')
  const relatedArticles = articles.filter(item => item.slug !== article.slug && item.category === article.category).slice(0, 3)

  async function copyArticleLink() {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopyStatus('تم نسخ رابط المقال')
    } catch {
      setCopyStatus('تعذر نسخ رابط المقال')
    }
  }

  return <><Header /><main className="article-page"><article>
    <section className="article-cover">
      <img src={article.image} alt={article.title} />
      <nav className="article-crumbs" aria-label="مسار الصفحة"><Link to="/" aria-label="الرئيسية"><FaIcon icon={faHome} size={14} /></Link><FaIcon icon={faChevronLeft} size={12} /><Link to="/blog">المدونة</Link><FaIcon icon={faChevronLeft} size={12} /><span>{article.category}</span></nav>
      <div className="article-title-block"><div className="article-hero-meta"><span className="eyebrow-pill">{article.category}</span><span><FaIcon icon={faCalendarRegular} size={18} />{publishedDate}</span><span><FaIcon icon={faClockRegular} size={18} />{article.readTime}</span></div><h1>{article.title}</h1><div className="article-author-card"><AuthorAvatar author={article.author} className="avatar" /><span><b>{article.author.name}</b><small>{article.author.role}</small></span></div></div>
    </section>
    <div className="article-layout">
      <div className="article-prose"><blockquote>{article.excerpt}</blockquote><p>{intro}</p>{sections.map(section => <Fragment key={section.id}><h2 id={section.id}><span><FaIcon icon={faCamera} size={24} /></span>{section.title}</h2>{section.paragraphs.map((text, index) => <p key={`${section.id}-${index}`}>{text}</p>)}</Fragment>)}
        <div className="article-tags"><div className="article-section-heading"><span><FaIcon icon={faTags} size={18} /></span><h2>الوسوم</h2></div><div className="tag-list">{article.tags.map(tag => <span key={tag}>#{tag}</span>)}</div></div>
        <div className="article-share"><div className="article-section-heading"><span><FaIcon icon={faShareNodes} size={18} /></span><h2>شارك المقال</h2></div><div className="share-links"><button type="button" onClick={copyArticleLink} aria-label="نسخ رابط المقال"><FaIcon icon={faLink} size={18} /></button><a className="share-whatsapp" href={`https://wa.me/?text=${shareText}%20${encodedArticleUrl}`} target="_blank" rel="noreferrer" aria-label="مشاركة المقال عبر واتساب"><FaIcon icon={faWhatsapp} size={18} /></a><a className="share-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedArticleUrl}`} target="_blank" rel="noreferrer" aria-label="مشاركة المقال عبر فيسبوك"><FaIcon icon={faFacebookF} size={18} /></a><a className="share-linkedin" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedArticleUrl}`} target="_blank" rel="noreferrer" aria-label="مشاركة المقال عبر لينكدإن"><FaIcon icon={faLinkedinIn} size={18} /></a><a className="share-x" href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedArticleUrl}`} target="_blank" rel="noreferrer" aria-label="مشاركة المقال عبر إكس"><FaIcon icon={faXTwitter} size={18} /></a></div>{copyStatus && <p className="share-status" role="status">{copyStatus}</p>}</div>
        <section className="article-author-bio"><AuthorAvatar author={article.author} className="avatar" /><div><span>كاتب المقال</span><h2>{article.author.name}</h2><p>{article.author.role}</p></div></section>
      </div>
      <aside className="article-sidebar"><div className="side-card side-toc"><h3><span className="toc-heading-icon"><Icon name="list" size={20} /></span>محتويات المقال</h3><ol>{sections.map((section, index) => <li key={section.id}><span>{index + 1}</span><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></div><div className="side-card side-meta"><div><FaIcon icon={faClockRegular} size={16} /><b>{article.readTime}</b><small>وقت القراءة</small></div><div><FaIcon icon={faCalendarRegular} size={16} /><b>{article.date}</b><small>تاريخ النشر</small></div></div><div className="side-card side-newsletter"><div className="side-newsletter-icon"><Icon name="mail" size={28} /></div><h3>لا تفوّت جديدنا</h3><p>اشترك للحصول على أحدث المقالات</p><Link to="/blog">تصفح المزيد</Link></div></aside>
    </div>
    {relatedArticles.length > 0 && <section className="related-articles" aria-labelledby="related-articles-title"><div className="related-articles-head"><div className="related-title"><span><FaIcon icon={faCamera} size={18} /></span><div><h2 id="related-articles-title">مقالات قد تعجبك</h2><p>استكشف المزيد من المحتوى المميز</p></div></div><Link to="/blog" className="related-all">عرض الكل <FaIcon icon={faArrowLeft} size={18} /></Link></div><div className="related-grid">{relatedArticles.map(relatedArticle => <Link key={relatedArticle.slug} to={`/blog/${relatedArticle.slug}`} className="related-card"><div className="related-image"><img src={relatedArticle.image} alt={relatedArticle.title} /><span>{relatedArticle.category}</span></div><div className="related-card-body"><h3>{relatedArticle.title}</h3><div><span className="related-author"><AuthorAvatar author={relatedArticle.author} />{relatedArticle.author.name}</span><span>{relatedArticle.readTime}</span></div></div></Link>)}</div></section>}
  </article></main><Footer /></>
}
