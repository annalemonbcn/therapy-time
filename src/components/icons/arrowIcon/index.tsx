import { IArrowIconProps } from './types'
import Feather from '@expo/vector-icons/Feather'

const ArrowIcon = ({ size = 24, count = 1, color = 'main' }: IArrowIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Feather key={`icon-${i}`} name="arrow-left" size={size} color={color} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default ArrowIcon
