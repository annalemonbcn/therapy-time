import AntDesign from '@expo/vector-icons/AntDesign'
import { IIconProps } from '../types'
import { theme } from 'theme'

const StarIcon = ({ size = 24, count = 1, color = 'gold' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<AntDesign key={`icon-${i}`} name="star" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default StarIcon
