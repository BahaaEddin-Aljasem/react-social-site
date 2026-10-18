import { faFolderOpen, faNewspaper, faPenNib, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ArticleCard, FeaturedArticle } from '../components/common/ArticleCard'
import { FaIcon, Icon } from '../components/common/Icons'
import Newsletter from '../components/common/Newsletter'
import SectionTitle from '../components/common/SectionTitle'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { articles, categories, siteInfo } from '../data/siteData'
import './Home.css'

export default function Home() {
  const featuredArticles = articles.filter(article => article.featured)
  const latestArticles = articles.filter(article => !article.featured).slice(0, 3)
  const authorCount = new Set(articles.map(article => article.author.name)).size

  return <><Header /><main>
    <section className="hero"><div className="hero-grid" /><div className="hero-glow"></div><div className="hero-content"><span className="eyebrow hero-badge"><i></i> مرحباً بك في {siteInfo.name}</span><h1>اكتشف <em>فن</em><br />التصوير الفوتوغرافي</h1><p>{siteInfo.description}</p><div className="hero-actions"><Link className="button primary" to="/blog">استكشف المقالات <Icon name="arrow" size={20} /></Link><Link className="button secondary" to="/about"><Icon name="info" size={20} />اعرف المزيد</Link></div><div className="stats stat-cards hero-stats"><div><FaIcon icon={faNewspaper} size={24} /><b>{articles.length}</b><span>مقالة</span></div><div><FaIcon icon={faUsers} size={24} /><b>{authorCount}</b><span>كاتب</span></div><div><FaIcon icon={faFolderOpen} size={24} /><b>{categories.length}</b><span>تصنيفات</span></div><div><FaIcon icon={faPenNib} size={24} /><b>{featuredArticles.length}</b><span>مقالات مختارة</span></div></div></div></section>
    <section className="content-section feature-section"><SectionTitle eyebrow="مميز" title="مقالات مختارة" text="محتوى منتقى لبدء رحلة تعلمك" action="/blog" /><div className="featured-list">{featuredArticles.slice(0, 3).map(article => <FeaturedArticle article={article} key={article.slug} />)}</div></section>
    <section className="categories-band"><div className="categories-inner"><div className="categories-head"><span className="eyebrow hero-badge"><i></i>التصنيفات</span><h2>ابحث حسب اهتمامك</h2><p>اختر الموضوع الذي يلهمك وابدأ من هناك</p></div><div className="category-grid">{categories.map(category => <Link className="category-card" to={`/blog?category=${encodeURIComponent(category.name)}`} key={category.name}><span className="category-overlay" /><span className="category-arrow"><Icon name="chevron" size={16} flip /></span><span className="category-icon"><FaIcon icon={category.icon} size={20} /></span><h3>{category.name}</h3><p>{category.count} مقالة</p></Link>)}</div></div></section>
    <section className="content-section latest-section"><SectionTitle eyebrow="الأحدث" title="أحدث المقالات" text="محتوى جديد طازج من المطبعة" action="/blog" actionLabel="عرض جميع المقالات" eyebrowDots /><div className="article-grid">{latestArticles.map(article => <ArticleCard article={article} key={article.slug} />)}</div></section>
    <Newsletter />
  </main><Footer /></>
}
