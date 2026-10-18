import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { articles } from './data/siteData'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function ArticleRoute() {
  const { slug } = useParams()
  const article = articles.find(item => item.slug === slug)
  return article ? <ArticlePage article={article} /> : <NotFound />
}

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<ArticleRoute />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}
