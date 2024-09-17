import Ionicons from '@expo/vector-icons/Ionicons'
import { IIconProps } from '../types'
import { theme } from 'theme'

const ImageIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Ionicons key={`icon-${i}`} name="image-outline" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default ImageIcon
