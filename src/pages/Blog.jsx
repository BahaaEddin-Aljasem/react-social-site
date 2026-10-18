import { useMemo, useState } from 'react'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { ArticleCard } from '../components/common/ArticleCard'
import { FaIcon, Icon } from '../components/common/Icons'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { articles, categories } from '../data/siteData'
import './Blog.css'

const PAGE_SIZE = 6

export default function Blog() {
  const initialCategory = new URLSearchParams(window.location.search).get('category')
  const [filter, setFilter] = useState(categories.some(category => category.name === initialCategory) ? initialCategory : 'الكل')
  const [query, setQuery] = useState('')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)
  const visible = useMemo(() => {
    const searchTerm = query.trim()
    return articles.filter(article => (filter === 'الكل' || article.category === filter) && (!searchTerm || `${article.title} ${article.excerpt} ${article.tags.join(' ')}`.includes(searchTerm)))
  }, [filter, query])
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const shown = visible.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const chips = [['الكل', 'جميع المقالات'], ...categories.map(category => [category.name, category.name])]

  return <><Header /><main className="page-main">
    <section className="blog-hero"><div className="blog-hero-grid" /><div className="blog-hero-glow one" /><div className="blog-hero-glow two" /><div className="blog-hero-inner"><span className="eyebrow-pill"><i className="blog-pill-dot" /><FaIcon icon={faNewspaper} size={16} />مدونتنا</span><h1>استكشف <em>مقالاتنا</em></h1><p>اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث</p></div></section>
    <div className="blog-filter"><div className="blog-filter-inner"><div className="blog-search"><input type="search" value={query} onChange={event => { setQuery(event.target.value); setPage(1) }} placeholder="ابحث في المقالات..." aria-label="ابحث في المقالات" /><Icon name="search" size={20} /></div><div className="blog-filters">{chips.map(([value, label]) => <button key={value} className={filter === value ? 'selected' : ''} onClick={() => { setFilter(value); setPage(1) }}>{label}</button>)}</div></div></div>
    <section className={view === 'list' ? 'blog-list list-layout' : 'blog-list'}>
      <div className="blog-list-head">
        <p>عرض {visible.length} مقالات{filter !== 'الكل' && <> في <strong>{filter}</strong></>}</p>
        <div className="blog-view-actions">
          <div className="view-toggle">
            <button className={view === 'grid' ? 'selected' : ''} onClick={() => setView('grid')} aria-label="عرض شبكي"><Icon name="grid" size={16} /></button>
            <button className={view === 'list' ? 'selected' : ''} onClick={() => setView('list')} aria-label="عرض قائمة"><Icon name="list" size={16} /></button>
          </div>
          {filter !== 'الكل' && <button type="button" className="clear-filter" onClick={() => { setFilter('الكل'); setPage(1) }}><Icon name="close" size={16} />مسح الفلاتر</button>}
        </div>
      </div>
      <div className={view === 'list' ? 'article-grid list-view' : 'article-grid'}>{shown.map(article => <ArticleCard article={article} key={article.slug} listView={view === 'list'} />)}</div>
      {visible.length === 0 ? <p className="blog-page-note">لا توجد مقالات مطابقة لبحثك</p> : <><nav className="pagination" aria-label="ترقيم الصفحات"><button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} aria-label="الصفحة السابقة"><Icon name="chevron" size={16} /></button>{Array.from({ length: totalPages }, (_, index) => index + 1).map(number => <button key={number} className={number === currentPage ? 'selected' : ''} onClick={() => setPage(number)} aria-current={number === currentPage ? 'page' : undefined}>{number}</button>)}<button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="الصفحة التالية"><Icon name="chevron" size={16} flip /></button></nav><p className="blog-page-note">صفحة {currentPage} من {totalPages}</p></>}
    </section>
  </main><Footer /></>
}
