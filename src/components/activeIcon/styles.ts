import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledIconContainer = styled(View)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.b100};
  border-radius: ${theme.borders.radius.circle}px;
`

export { StyledIconContainer }
