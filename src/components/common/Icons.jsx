const paths = {
  search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 18L18 6M6 6l12 12" />,
  arrow: <path d="M17 8l4 4m0 0l-4 4m4-4H3" />,
  chevron: <path d="M9 5l7 7-7 7" />,
  clock: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  info: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  grid: <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 0h-2a2 2 0 01-2-2v-2z" />,
  list: <path d="M4 6h16M4 12h16M4 18h16" />,
  mail: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002.22 0L21 8" />,
  check: <path d="M5 12l4 4L19 6" />,
}

export function Icon({ name, size = 20, flip = false, className }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: 'rotate(180deg)' } : undefined}>{paths[name]}</svg>
}

export function FaIcon({ icon, size = 20, style }) {
  const [width, height, , , path] = icon.icon
  return <svg width={(size * width) / height} height={size} viewBox={`0 0 ${width} ${height}`} style={style} aria-hidden="true"><path fill="currentColor" d={path} /></svg>
}
