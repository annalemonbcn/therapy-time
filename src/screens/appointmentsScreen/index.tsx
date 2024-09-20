import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { useGetBookingsQuery } from 'src/services/user'
import { theme } from 'theme'
import NoData from './components/noData'
import { useGetUuid } from 'src/utils/utils'

const AppointmentsScreen = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetBookingsQuery({ uuid })

  if (isFetching) return <ActivityIndicator />

  if (isSuccess && !data) return <NoData />

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <Text>Bookings Here</Text>
      </View>
    </PageWrapper>
  )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: theme.space.xl,
    width: '100%',
    alignItems: 'center'
  }
})
