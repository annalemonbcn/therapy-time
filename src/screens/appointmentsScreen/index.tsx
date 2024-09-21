import { ActivityIndicator, StyleSheet, View } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import NoData from './components/noData'
import BookingCard from './components/bookingCard'
import { UserBooking } from 'src/data/types'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { Tabs } from './types'
import { filterBookings, sortBookings } from './utils'
import TabsNavigator from './components/tabs'
import { ModalProvider, useModalContext } from 'src/context/ModalProvider'
import CancelAppointmentModal from './components/cancelAppointmentModal'
import { useAppointmentsScreen } from './hooks'
import Text from 'src/components/custom/customText'

const AppointmentsDisplay = () => {
  const [tab, setTab] = useState<Tabs>('upcoming')
  const [selectedAppointment, setSelectedAppointment] = useState<UserBooking>()

  const { isOpen } = useModalContext()

  const { data: bookings, isLoading } = useAppointmentsScreen()

  if (isLoading) return <ActivityIndicator />
  if (!bookings || bookings.length === 0) return <NoData />

  const filteredBookings = filterBookings(bookings as UserBooking[], tab)

  return (
    <PageWrapper>
      <TabsNavigator selectedTab={tab} setSelectedTab={setTab} />
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {filteredBookings.length} founds
        </Text>
        <FlatList
          data={filteredBookings}
          keyExtractor={(booking) => booking.bookingId}
          renderItem={({ item }) => (
            <BookingCard
              booking={item as UserBooking}
              selectedTab={tab}
              setSelectedAppointment={setSelectedAppointment}
            />
          )}
          style={styles.list}
          scrollEnabled={false}
        />
      </ScrollView>
      {isOpen && (
        <CancelAppointmentModal appointment={selectedAppointment} setSelectedAppointment={setSelectedAppointment} />
      )}
    </PageWrapper>
  )
}

const AppointmentsScreen = () => (
  <ModalProvider>
    <AppointmentsDisplay />
  </ModalProvider>
)

export default AppointmentsScreen

const styles = StyleSheet.create({
  pageContainer: {
    paddingBottom: theme.space.xl,
    width: '100%'
  },
  text: {
    paddingLeft: theme.space.sm
  },
  list: {
    marginVertical: theme.space.sm2,
    paddingHorizontal: theme.space.sm2
  }
})
