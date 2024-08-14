import AntDesign from '@expo/vector-icons/AntDesign'
import { IStarIconProps } from './types'

const StarIcon = ({ size = 24, count = 1, color = 'gold' }: IStarIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<AntDesign key={`icon-${i}`} name="star" size={size} color={color} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default StarIcon
