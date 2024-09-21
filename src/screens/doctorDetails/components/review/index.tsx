import { StyleSheet, View } from 'react-native'
import { IReviewProps } from './types'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import CardImage from 'src/components/custom/image'
import { theme } from 'theme'
import StarIcon from 'src/components/icons/starIcon'

const Review = ({ review }: IReviewProps) => (
  <>
    <HorizontalContainer gap="md">
      <CardImage url={review.user.profilePicture} isCircle={true} size={55} />
      <View style={styles.userInfo}>
        <Text fontWeight="bold">{review.user.name}</Text>
        <HorizontalContainer verticalCenter="center" gap="xs2">
          <Text size="s11" color="b500" fontWeight="semi-bold">
            {review.rating}.0
          </Text>
          <StarIcon count={review.rating} size={12} />
        </HorizontalContainer>
      </View>
    </HorizontalContainer>
    <View>
      <Text size="s2" color="b500">
        {review.text}
      </Text>
    </View>
  </>
)

const styles = StyleSheet.create({
  userInfo: {
    gap: theme.space.sm2
  }
})

export default Review
