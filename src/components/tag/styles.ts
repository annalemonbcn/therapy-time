import { TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledTouchable = styled(TouchableHighlight)`
  padding: ${theme.space.xs}px ${theme.space.sm2}px;
  background-color: ${theme.colors.main};
  border-radius: ${theme.borders.radius.md}px;
`

export { StyledTouchable }
