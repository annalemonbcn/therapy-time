import { View, Text } from 'react-native'
import { IHorizontalContainerProps } from './types'
import { StyledHorizontalContainer } from './styles'

const HorizontalContainer = ({ children, ...props }: IHorizontalContainerProps) => (
  <StyledHorizontalContainer {...props}>{children}</StyledHorizontalContainer>
)

export default HorizontalContainer
