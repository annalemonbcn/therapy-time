import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { IIconProps } from '../types'
import { theme } from 'theme'

const OnlineIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(
        <MaterialCommunityIcons
          key={`icon-${i}`}
          name="clipboard-account-outline"
          size={size}
          color={theme.colors[color]}
        />
      )
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default OnlineIcon
