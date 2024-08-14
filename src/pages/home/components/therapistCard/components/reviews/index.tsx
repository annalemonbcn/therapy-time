import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ICardReviewsProps } from './types'

const CardReviews = ({ average, totalRatings }: ICardReviewsProps) => (
  <HorizontalContainer verticalCenter="center" gap="xs">
    <AntDesign name="star" size={24} color="#FFE0BA" />
    <Text size="s2" color="b500">
      {average} |
    </Text>
    <Text size="s2" color="b500">
      {totalRatings} {totalRatings > 1 ? 'Reviews' : 'Review'}
    </Text>
  </HorizontalContainer>
)

export default CardReviews
