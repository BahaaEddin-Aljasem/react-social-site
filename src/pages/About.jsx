import { faArrowsRotate, faBolt, faBookOpen, faBullseye, faHandshake, faNewspaper, faPenNib, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FaIcon, Icon } from '../components/common/Icons'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { contributors, siteInfo } from '../data/siteData'
import './About.css'

const heroStats = [
  [faUsers, '+2مليون', 'قارئ شهرياً'],
  [faNewspaper, '+500', 'مقالة منشورة'],
  [faPenNib, '+50', 'كاتب خبير'],
  [faBookOpen, '+15', 'تصنيف'],
]
const values = [
  [faBullseye, 'الجودة أولاً', 'محتوى مدروس ومكتوب بخبرة'],
  [faBolt, 'تركيز عملي', 'أمثلة واقعية يمكنك تطبيقها اليوم'],
  [faHandshake, 'المجتمع', 'تعلم مع آلاف المصورين'],
  [faArrowsRotate, 'دائماً محدث', 'أحدث الاتجاهات وأفضل الممارسات'],
]

export default function About() {
  const team = contributors
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return <><Header /><main className="page-main">
    <section className="about-hero"><div className="hero-grid" /><div className="about-hero-inner">
      <span className="eyebrow-pill"><i className="pill-dot" />من نحن</span>
      <h1>مهمتنا هي <em>الإعلام والإلهام</em></h1>
      <p>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p>
      <div className="about-stats">{heroStats.map(([icon, value, label]) => <div key={label}><FaIcon icon={icon} size={24} /><b>{value}</b><span>{label}</span></div>)}</div>
    </div></section>
    <section className="about-mission"><div className="about-inner"><div className="about-head"><h2>قيمنا</h2><p>المبادئ التي توجه كل ما نقوم بإنشائه</p></div><div className="about-mission-grid">{values.map(([icon, title, description]) => <div className="about-mission-card" key={title}><FaIcon icon={icon} size={36} /><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
    <section className="about-team"><div className="about-inner"><div className="about-head"><span className="eyebrow-pill">فريقنا</span><h2>تعرف على كتابنا</h2><p>{siteInfo.description}</p></div><div className="team-grid">{team.map(author => <div className="team-card" key={author.name}><div className="team-avatar"><img src={author.avatar} alt={author.name} /><span className="team-badge"><Icon name="check" size={14} /></span></div><h3>{author.name}</h3><p>{author.role}</p><div className="team-social"><button type="button" onClick={scrollToTop} aria-label="العودة إلى أعلى الصفحة عبر إكس"><FaIcon icon={faXTwitter} size={16} /></button><button type="button" onClick={scrollToTop} aria-label="العودة إلى أعلى الصفحة عبر جيت هب"><FaIcon icon={faGithub} size={16} /></button><button type="button" onClick={scrollToTop} aria-label="العودة إلى أعلى الصفحة عبر لينكدإن"><FaIcon icon={faLinkedinIn} size={16} /></button></div></div>)}</div></div></section>
    <section className="about-cta"><div className="about-cta-inner"><h2>لديك أسئلة؟ دعنا نتحدث!</h2><p>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p><div className="about-cta-actions"><a className="cta-primary" href={`mailto:${siteInfo.email}`}><Icon name="mail" size={20} />تواصل معنا</a><Link className="cta-secondary" to="/blog">تصفح المقالات</Link></div></div></section>
  </main><Footer /></>
}
