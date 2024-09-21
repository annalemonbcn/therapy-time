import { theme } from 'theme'
import { IIconProps } from '../types'
import Feather from '@expo/vector-icons/Feather'

const HeartIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Feather key={`icon-${i}`} name="heart" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default HeartIcon
