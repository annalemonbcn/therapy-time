import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import BasicCard from 'src/components/basicCard'
import { UserBooking } from 'src/data/types'
import Text from 'src/components/custom/customText'
import Separator from 'src/components/separator'
import { theme } from 'theme'
import { useGetDoctorDetails } from 'src/screens/doctorDetails/hooks'
import CardImage from 'src/components/custom/image'
import { toTitleCase } from 'src/utils'
import CardLocation from 'src/components/therapistCard/components/location'
import Button from 'src/components/custom/customButton'
import { Tabs } from '../../types'

const BookingCard = ({ booking, selectedTab }: { booking: UserBooking; selectedTab: Tabs }) => {
  const { data: therapist, isLoading } = useGetDoctorDetails(booking.therapistId)

  if (isLoading) return <ActivityIndicator />

  if (!therapist) return

  return (
    <BasicCard hasShadow>
      <View style={styles.container}>
        <Text fontWeight="bold" size="s2">
          {booking.date} - {booking.time}
        </Text>
        <Separator />
        <View style={styles.therapistCard}>
          <CardImage url={therapist.basicInfo.profilePicture} size={110} />
          <View style={styles.infoContainer}>
            <Text fontWeight="bold">{therapist.basicInfo.name}</Text>
            <Separator />
            <View style={styles.bottomTextsContainer}>
              <Text fontWeight="semi-bold" size="s2" color="b600">
                {toTitleCase(therapist.basicInfo.specialty)}
              </Text>
              <CardLocation location={`${therapist.location.city}, ${therapist.location.province}`} />
            </View>
          </View>
        </View>
        <Separator />
        {selectedTab === 'upcoming' && (
          <Button onPress={() => console.log('cancel')} bgGrey>
            Cancel
          </Button>
        )}
      </View>
    </BasicCard>
  )
}

export default BookingCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: theme.space.sm
  },
  therapistCard: {
    flexDirection: 'row',
    gap: theme.space.sm,
    alignItems: 'center'
  },
  infoContainer: {
    gap: theme.space.xs
  },
  bottomTextsContainer: {
    gap: theme.space.sm2
  }
})
