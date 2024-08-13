import { ITagProps } from './types'
import Text from '../custom/customText'
import { StyledTouchable } from './styles'

const Tag = ({ onPress, children }: ITagProps) => (
  <StyledTouchable onPress={onPress}>
    <Text color="b0" size="s2">
      {children}
    </Text>
  </StyledTouchable>
)

export default Tag
