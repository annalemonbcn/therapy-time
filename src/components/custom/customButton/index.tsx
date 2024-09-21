import { StyledTouchable, StyledText } from './styles'
import { ICustomButtonProps } from './types'

const Button = ({ onPress, children, ...props }: ICustomButtonProps) => (
  <StyledTouchable {...props} onPress={onPress}>
    <StyledText {...props}>{children}</StyledText>
  </StyledTouchable>
)

export default Button
