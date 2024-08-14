import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledBody = styled(View)`
  background-color: red;
  padding: ${theme.space.lg}px 0;
`

export { StyledBody }
