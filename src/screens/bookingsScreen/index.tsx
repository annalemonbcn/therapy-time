import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { useGetUuid } from 'src/hooks'
import { useGetBookingsQuery } from 'src/services/user'
import { theme } from 'theme'

const BookingsScreen = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetBookingsQuery({ uuid })

  if (isFetching) <ActivityIndicator />

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Text>BookingsScreen</Text>
      </View>
    </PageWrapper>
  )
}

export default BookingsScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: theme.space.xl,
    width: '100%',
    alignItems: 'center'
  }
})
