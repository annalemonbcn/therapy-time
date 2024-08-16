import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledModal = styled(View)`
  width: 100%;
  height: auto;
  align-items: center;
  background-color: ${theme.colors.b0};
  border-radius: ${theme.borders.radius.xl}px;
  padding: ${theme.space.lg}px ${theme.space.xl}px;
`

export { StyledModal }
