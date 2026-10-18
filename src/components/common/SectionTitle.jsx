import { Link } from 'react-router-dom'
import { Icon } from './Icons'

export default function SectionTitle({ eyebrow, title, text, action, actionLabel = 'عرض الكل', eyebrowDots = false }) {
  return <div className="section-title"><div><span className="eyebrow">{eyebrowDots && <span className="eyebrow-dots" aria-hidden="true"><i /><i /></span>}{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link className="text-link" to={action}>{actionLabel} <Icon name="chevron" size={16} /></Link>}</div>
}
