import { ICustomTextProps } from './types'
import { StyledText } from './styles'

const Text = ({ children, ...props }: ICustomTextProps) => <StyledText {...props}>{children}</StyledText>

export default Text
