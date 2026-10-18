import { Link } from 'react-router-dom'

export default function Logo() {
  return <Link className="logo" to="/"><span className="logo-mark" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" /></span><span><b>عدسة</b><small>عالم التصوير الفوتوغرافي</small></span></Link>
}
