import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import ArrowIcon from 'src/components/icons/arrowIcon'
import HeartIcon from 'src/components/icons/heartIcon'
import { NavigationProp } from 'src/navigators/homeNavigator/types'
import { ITopNavigationProps } from './types'
import { StyledContainer } from './styles'

const TopNavigation = ({ title }: ITopNavigationProps) => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <StyledContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowIcon />
      </TouchableOpacity>
      <Text fontWeight="semi-bold" size="s4">
        {title}
      </Text>
      <HeartIcon size={20} />
    </StyledContainer>
  )
}

export default TopNavigation
