import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.space.md}px;
  padding-bottom: ${theme.space.md}px;
`

export { StyledContainer }
