import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import './NotFound.css'

export default function NotFound() {
  return <><Header /><main className="not-found"><span className="eyebrow-pill">404</span><h1>الصفحة غير موجودة</h1><p>ربما تم نقل الصفحة أو لم تعد متاحة.</p><Link className="button primary" to="/">العودة للرئيسية</Link></main><Footer /></>
}
