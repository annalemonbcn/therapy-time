import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledSeparator = styled(View)`
  border-style: solid;
  border-bottom-width: ${theme.borders.sizes.sm}px;
  border-color: ${theme.colors.b200};
`

export { StyledSeparator }
