import { faCamera, faFolderOpen, faMountainSun, faSliders, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import content from './content.json'

export const articles = content.posts
export const siteInfo = content.siteInfo

const categoryIcons = [faSun, faUser, faMountainSun, faSliders, faCamera]

export const categories = content.categories.map((category, index) => ({
  ...category,
  icon: categoryIcons[index] ?? faFolderOpen,
}))

export const contributors = Array.from(
  new Map(articles.map(article => [article.author.name, article.author])).values(),
)
