import Feather from '@expo/vector-icons/Feather'
import { IIconProps } from '../types'
import { theme } from 'theme'

const CameraIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Feather key={`icon-${i}`} name="camera" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default CameraIcon
