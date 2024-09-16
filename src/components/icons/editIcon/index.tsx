import MaterialIcons from '@expo/vector-icons/MaterialIcons';import { IIconProps } from '../types'
import { theme } from 'theme'

const EditIcon = ({ size = 24, count = 1, color = 'main' }: IIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<MaterialIcons key={`icon-${i}`} name="edit" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <>{renderIcons()}</>
}

export default EditIcon
