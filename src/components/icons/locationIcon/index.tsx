import { theme } from 'theme'
import { IIconProps } from '../types'
import Ionicons from '@expo/vector-icons/Ionicons'

const LocationIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Ionicons key={`icon-${i}`} name="location-sharp" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default LocationIcon
