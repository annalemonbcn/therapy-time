import Ionicons from '@expo/vector-icons/Ionicons'
import { IIconProps } from '../types'

const SearchIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Ionicons key={`icon-${i}`} name="search-outline" size={size} color={color} />)
    }
    return icons
  }
  return <>{renderIcons()}</>
}

export default SearchIcon
