import { theme } from 'theme'
import { IIconProps } from '../types'
import Ionicons from '@expo/vector-icons/Ionicons'
import { IChevronIconProps } from './types'
import { StyledView } from './styles'

const ChevronIcon = ({ size = 24, count = 1, color = 'main', direction = 'down' }: IChevronIconProps) => {
  const renderIcons = () => {
    let icons = []
    for (let i = 0; i < count; i++) {
      icons.push(<Ionicons key={`icon-${i}`} name="chevron-down" size={size} color={theme.colors[color]} />)
    }
    return icons
  }

  return <StyledView direction={direction}>{renderIcons()}</StyledView>
}

export default ChevronIcon
