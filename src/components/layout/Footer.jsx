import { faGithub, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { categories, siteInfo } from '../../data/siteData'
import { FaIcon, Icon } from '../common/Icons'
import Logo from './Logo'
import './Footer.css'

const social = [[faYoutube, 'يوتيوب', 'youtube'], [faLinkedinIn, 'لينكدإن', 'linkedin'], [faGithub, 'جيت هب', 'github'], [faXTwitter, 'إكس', 'twitter']]

function FooterNavLink({ to, children }) {
  return (
    <Link to={to}>
      <Icon className="footer-link-arrow" name="chevron" size={15} />
      {children}
    </Link>
  )
}

function CategoryLink({ category }) {
  const to = `/blog?category=${encodeURIComponent(category.name)}`
  return (
    <Link to={to}>
      <Icon className="footer-link-arrow" name="chevron" size={15} />
      {category.name}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{siteInfo.description}</p>
            <div className="footer-social">
              {social.map(([icon, label, network]) => (
                <a key={label} href={siteInfo.social[network]} aria-label={label} target="_blank" rel="noreferrer">
                  <FaIcon icon={icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>استكشف</h3>
            <ul>
              <li><FooterNavLink to="/">الرئيسية</FooterNavLink></li>
              <li><FooterNavLink to="/blog">المدونة</FooterNavLink></li>
              <li><FooterNavLink to="/about">من نحن</FooterNavLink></li>
              <li>
                <a href={`mailto:${siteInfo.email}`}>
                  <Icon className="footer-link-arrow" name="chevron" size={15} />
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>التصنيفات</h3>
            <ul>
              {categories.map(category => (
                <li key={category.name}><CategoryLink category={category} /></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>النشرة</h3>
            <p>اشترك ليصلك كل أسبوع جديد من الدروس والمقالات.</p>
            <form onSubmit={event => event.preventDefault()}>
              <input type="email" placeholder="بريدك الإلكتروني" aria-label="بريدك الإلكتروني" />
              <button type="submit">اشترك</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>
            © 2026 عدسة. صنع بكل <i className="footer-heart"><FaIcon icon={faHeart} size={12} /></i> جميع الحقوق محفوظة.
          </span>
          <div>
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#terms">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
