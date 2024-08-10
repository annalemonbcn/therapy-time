import { StyledPressable, StyledText } from './styles'
import { ICustomButtonProps } from './types'

const Button = ({ onPress, children, ...props }: ICustomButtonProps) => (
  <StyledPressable {...props} onPress={onPress}>
    <StyledText {...props}>{children}</StyledText>
  </StyledPressable>
)

export default Button
