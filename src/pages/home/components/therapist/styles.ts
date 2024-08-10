import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'

const StyledTherapist = styled(View)`
  flex-direction: row;
  border-radius: ${theme.borders.radius.lg}px;
  margin-top: ${theme.space.sm2}px;
  margin-bottom: ${theme.space.sm2}px;
  padding: ${theme.space.sm}px;
  background-color: red;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
`

export { StyledTherapist }
