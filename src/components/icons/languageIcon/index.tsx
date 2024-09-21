import Entypo from '@expo/vector-icons/Entypo'
import { IIconProps } from '../types'
import { theme } from 'theme'

const LanguageIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Entypo key={`icon-${i}`} name="language" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default LanguageIcon
