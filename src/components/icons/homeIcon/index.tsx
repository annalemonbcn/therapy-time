import AntDesign from '@expo/vector-icons/AntDesign'
import { theme } from 'theme'
import { IIconProps } from '../types'

const HomeIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<AntDesign key={`icon-${i}`} name="home" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default HomeIcon
