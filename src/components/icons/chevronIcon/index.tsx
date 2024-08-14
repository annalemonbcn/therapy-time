import { IChevronIconProps } from './types'
import Ionicons from '@expo/vector-icons/Ionicons'

const ChevronIcon = ({ size = 24, count = 1, color = 'main' }: IChevronIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Ionicons key={`icon-${i}`} name="chevron-down" size={size} color={color} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default ChevronIcon
