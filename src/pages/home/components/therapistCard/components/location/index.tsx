import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { ICardLocationProps } from './types'
import LocationIcon from 'src/components/icons/locationIcon'

const CardLocation = ({ location }: ICardLocationProps) => (
  <HorizontalContainer verticalCenter="center">
    <LocationIcon size={16} color="b600" />
    <Text size="s2" color="b600">
      {location}
    </Text>
  </HorizontalContainer>
)

export default CardLocation
