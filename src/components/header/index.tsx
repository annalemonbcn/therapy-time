import HorizontalContainer from '../custom/horizontalContainer'
import CustomText from '../customText'
import { StyledImage } from './styles'
import { Image, View } from 'react-native'

const Header = () => (
  <HorizontalContainer fullWidth horizontalCenter verticalCenter gap="lg" paddingVertical="sm2" backgroundColor="b200">
    <StyledImage source={require('../../../assets/butterfly.png')} />
    <HorizontalContainer>
      <CustomText color="purple" font-size="s6" fontWeight="bold">
        Therapy
      </CustomText>
      <CustomText color="lightPurple" font-size="s6" fontWeight="bold">
        Time
      </CustomText>
    </HorizontalContainer>
  </HorizontalContainer>
)

export default Header
