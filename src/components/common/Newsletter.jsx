import { useState } from 'react'
import { Icon } from './Icons'
import { contributors } from '../../data/siteData'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = event => {
    event.preventDefault()
    if (email.includes('@')) setDone(true)
  }

  return (
    <section className="newsletter">
      <div className="newsletter-glow" />
      <div className="newsletter-inner">
        <div className="newsletter-card">
          <div className="newsletter-icon">
            <Icon name="mail" size={32} />
          </div>
          <h2>
            {done ? 'أهلاً بك في دائرة عدسة' : <>اشترك في <span>نشرتنا الإخبارية</span></>}
          </h2>
          <p>
            {done
              ? 'تم تسجيلك بنجاح. سنرسل لك أفضل القصص والدروس قريباً.'
              : 'احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني'}
          </p>
          {!done && (
            <form onSubmit={submit}>
              <input
                type="email"
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                aria-label="بريدك الإلكتروني"
              />
              <button type="submit">اشترك الآن</button>
            </form>
          )}
          <div className="newsletter-trust">
            <span className="newsletter-avatars">
              {contributors.slice(0, 3).map(author => (
                <img key={author.name} src={author.avatar} alt={author.name} />
              ))}
            </span>
            <span>انضم إلى <b>+10,000</b> مصور</span>
            <i>•</i>
            <span>بدون إزعاج</span>
            <i>•</i>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  )
}
