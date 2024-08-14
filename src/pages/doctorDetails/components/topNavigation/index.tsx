import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import ArrowIcon from 'src/components/icons/arrowIcon'
import HeartIcon from 'src/components/icons/heartIcon'

const TopNavigation = () => (
  <HorizontalContainer horizontalCenter="space-between" verticalCenter="center" paddingVertical="sm2">
    <ArrowIcon />
    <Text fontWeight="semi-bold" size="s4">
      Details
    </Text>
    <HeartIcon size={20} />
  </HorizontalContainer>
)

export default TopNavigation
