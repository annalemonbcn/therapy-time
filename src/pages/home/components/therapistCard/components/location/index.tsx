import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from 'theme'
import { ICardLocationProps } from './types'

const CardLocation = ({ location }: ICardLocationProps) => (
  <HorizontalContainer verticalCenter="center">
    <Ionicons name="location-outline" size={16} color={theme.colors.b600} />
    <Text size="s2" color="b600">
      {location}
    </Text>
  </HorizontalContainer>
)

export default CardLocation
