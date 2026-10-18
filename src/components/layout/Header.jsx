import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '../common/Icons'
import Logo from './Logo'
import './Header.css'

const navigation = [['/', 'الرئيسية'], ['/blog', 'المدونة'], ['/about', 'من نحن']]

export default function Header() {
  const [open, setOpen] = useState(false)

  return <header className="site-header"><div className="nav-shell">
    <Logo />
    <nav className={open ? 'main-nav open' : 'main-nav'}>{navigation.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="mobile-reading-link" to="/blog" onClick={() => setOpen(false)}>ابدأ القراءة</Link></nav>
    <div className="header-actions">
      <Link className="icon-button" to="/blog" aria-label="ابحث في المقالات"><Icon name="search" size={20} /></Link>
      <Link className="reading-link" to="/blog">ابدأ القراءة</Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="القائمة">{open ? <Icon name="close" /> : <Icon name="menu" />}</button>
    </div>
  </div></header>
}
