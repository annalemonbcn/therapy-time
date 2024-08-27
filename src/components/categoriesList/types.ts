import { TagsEnum } from 'src/data/types'

interface ICategoriesListProps {
  category?: string
  onTagPress: (tag: TagsEnum) => void
  allPrimary?: boolean
}

export { ICategoriesListProps }
