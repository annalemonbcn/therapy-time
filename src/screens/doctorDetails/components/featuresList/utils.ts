import { Language } from 'src/data/types'
import { FeatureType } from './types'

const getSessionTypeString = (sessionType: string[]) => {
  switch (sessionType.length) {
    case 0:
      return ''
    case 1:
      return sessionType[0]
    case 2:
      return `${sessionType[0]} and ${sessionType[1]}`
    default:
      return sessionType.join(', ')
  }
}

const formatLanguages = (languages: Language[]): string => {
  if (!languages.length) return ''

  const names = languages.map((lang) => lang.name)

  switch (names.length) {
    case 1:
      return names[0]
    case 2:
      return `${names[0]} and ${names[1]}`
    default:
      return [...names.slice(0, -1), `and ${names[names.length - 1]}`].join(', ')
  }
}

export { getSessionTypeString, formatLanguages }
