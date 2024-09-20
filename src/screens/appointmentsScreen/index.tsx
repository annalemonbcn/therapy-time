import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import PageWrapper from 'src/components/custom/pageWrapper'
import { useGetBookingsQuery } from 'src/services/user'
import { theme } from 'theme'
import NoData from './components/noData'
import { useGetUuid } from 'src/utils/utils'
import BookingCard from './components/bookingCard'
import { UserBooking } from 'src/data/types'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { Tabs } from './types'
import { filterBookings, sortBookings } from './utils'
import TabsNavigator from './components/tabs'

const AppointmentsScreen = () => {
  const [tab, setTab] = useState<Tabs>('upcoming')
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetBookingsQuery({ uuid })

  if (isFetching) return <ActivityIndicator />

  const bookings = sortBookings(data?.bookings as UserBooking[])

  if (isSuccess && !bookings) return <NoData />

  const filteredBookings = filterBookings(bookings as UserBooking[], tab)

  return (
    <PageWrapper>
      <TabsNavigator selectedTab={tab} setSelectedTab={setTab} />
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <FlatList
          data={filteredBookings}
          keyExtractor={(booking) => booking.bookingId}
          renderItem={({ item }) => <BookingCard booking={item as UserBooking} selectedTab={tab} />}
          style={styles.list}
          scrollEnabled={false}
        />
      </ScrollView>
    </PageWrapper>
  )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
  pageContainer: {
    paddingBottom: theme.space.xl,
    width: '100%',
    alignItems: 'center'
  },
  list: {
    marginVertical: theme.space.sm2,
    paddingHorizontal: theme.space.sm2
  }
})
