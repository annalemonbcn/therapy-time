import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Feather from '@expo/vector-icons/Feather'
import { theme } from 'theme'

const TopNavigation = () => (
  <HorizontalContainer horizontalCenter="space-between" verticalCenter='center' paddingVertical="sm2">
    <Feather name="arrow-left" size={24} color={theme.colors.main} />
    <Text fontWeight="semi-bold" size="s4">
      Details
    </Text>
    <Feather name="heart" size={20} color={theme.colors.main} />
  </HorizontalContainer>
)

export default TopNavigation
