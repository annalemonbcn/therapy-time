import { ICustomTextProps } from './types'
import { StyledText } from './styles'

const Text = ({ children, style, ...props }: ICustomTextProps) => (
  <StyledText {...props} style={style}>
    {children}
  </StyledText>
)

export default Text
