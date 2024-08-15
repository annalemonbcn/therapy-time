import { theme } from 'theme'
import { View, StyleSheet } from 'react-native'
import Text from 'src/components/custom/customText'
import { IReviewsProps } from './types'
import Review from '../review'
import HorizontalContainer from 'src/components/custom/horizontalContainer'

const Reviews = ({ reviews }: IReviewsProps) => (
  <View style={styles.container}>
    <HorizontalContainer verticalCenter="flex-end" horizontalCenter="space-between">
      <Text size="s4" fontWeight="semi-bold" color="b800">
        Reviews
      </Text>
      <Text size="s2" color="b500">
        See all
      </Text>
    </HorizontalContainer>
    <Review review={reviews[0]} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    gap: theme.space.md
  }
})

export default Reviews
