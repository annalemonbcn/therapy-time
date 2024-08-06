import Text from '../custom/customText/index'
import HorizontalContainer from '../custom/horizontalContainer'
import { StyledImage } from './styles'

const Header = () => (
  <HorizontalContainer fullWidth horizontalCenter verticalCenter gap="lg" paddingVertical="sm2" backgroundColor="b200">
    <StyledImage source={require('../../../assets/butterfly.png')} />
    <HorizontalContainer>
      <Text color="purple" size="s4" fontWeight="bold">
        Therapy
      </Text>
      <Text color="lightPurple" size="s4" fontWeight="bold">
        Time
      </Text>
    </HorizontalContainer>
  </HorizontalContainer>
)

export default Header
