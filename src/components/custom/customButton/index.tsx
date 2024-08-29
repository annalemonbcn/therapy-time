import { StyledTouchable, StyledText } from './styles'
import { ICustomButtonProps } from './types'

const Button = ({ onPress, children, isDisabled = false, ...props }: ICustomButtonProps) => (
  <StyledTouchable {...props} onPress={onPress} disabled={isDisabled}>
    <StyledText {...props}>{children}</StyledText>
  </StyledTouchable>
)

export default Button
