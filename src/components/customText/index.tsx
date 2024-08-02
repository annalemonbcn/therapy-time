import { ICustomTextProps } from './types'
import { StyledText } from './styles'

const CustomText = ({ children, ...props }: ICustomTextProps) => <StyledText {...props}>{children}</StyledText>

export default CustomText
