import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { ICardReviewsProps } from './types'
import StarIcon from 'src/components/icons/starIcon'

const CardReviews = ({ average, totalRatings }: ICardReviewsProps) => (
  <HorizontalContainer verticalCenter="center" gap="xs">
    <StarIcon />
    <Text size="s2" color="b500">
      {average} |
    </Text>
    <Text size="s2" color="b500">
      {totalRatings} {totalRatings > 1 ? 'Reviews' : 'Review'}
    </Text>
  </HorizontalContainer>
)

export default CardReviews
