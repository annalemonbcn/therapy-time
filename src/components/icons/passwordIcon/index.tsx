import EvilIcons from '@expo/vector-icons/EvilIcons'
import { IIconProps } from '../types'
import { theme } from 'theme'

const PasswordIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<EvilIcons key={`icon-${i}`} name="lock" size={size} color={theme.colors[color]} />)
    }
    return icons
  }
  return <>{renderIcons()}</>
}

export default PasswordIcon
