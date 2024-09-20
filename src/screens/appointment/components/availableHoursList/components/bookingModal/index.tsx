import { useState } from 'react'
import BasicModal from 'src/components/modal'
import Text from 'src/components/custom/customText'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { useFormContext } from 'react-hook-form'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { ICheckAppointmentProps, Stage } from './types'
import { useRoute } from '@react-navigation/native'
import { useModalContext } from 'src/context/ModalProvider'
import { getDoctorNameById } from 'src/utils/doctors'
import { useGetBookingsQuery, userApi, useSetBookingsMutation } from 'src/services/user'
import { useGetUserEmail, useGetUuid } from 'src/hooks'
import { useGetTherapistBookingsQuery, useSetTherapistBookingsMutation } from 'src/services/therapists'
import { TherapistBooking, UserBooking } from 'src/data/types'
import { showErrorNotification } from 'src/utils/notifications'
import { useGetDbTherapistId } from './hooks'

const CheckAppointment = ({ handleConfirm }: ICheckAppointmentProps) => {
  const { getValues } = useFormContext<BookingFormShape>()
  const { params } = useRoute<RouteProp>()
  const { closeModal } = useModalContext()

  const doctorName = <Text fontWeight="semi-bold">{getDoctorNameById(params?.therapistId)}</Text>

  return (
    <>
      <Image source={require('assets/check_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center">
            You are about to make an appointment with {doctorName} for the indicated day and time:
          </Text>
          <Text color="b500" textAlign="center" fontWeight="semi-bold">
            {getValues('day')} {getValues('hour')}
          </Text>
        </View>
        <HorizontalContainer horizontalCenter="center">
          <Button onPress={() => closeModal()}>Back</Button>
          <Button onPress={() => handleConfirm()} primary>
            Confirm
          </Button>
        </HorizontalContainer>
      </View>
    </>
  )
}

const ConfirmAppointment = () => {
  const { getValues } = useFormContext<BookingFormShape>()
  const { params } = useRoute<RouteProp>()
  const { closeModal } = useModalContext()

  return (
    <>
      <Image source={require('assets/confirm_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center" size="s4" fontWeight="semi-bold">
            Congratulations!
          </Text>
          <Text color="b500" size="s2">
            Your appointment with {getDoctorNameById(params?.therapistId)} is confirmed for {getValues('day')}, at{' '}
            {getValues('hour')}.
          </Text>
        </View>
        <View>
          <Button onPress={() => closeModal()} primary>
            Done
          </Button>
        </View>
      </View>
    </>
  )
}

const BookingModal = () => {
  const { params } = useRoute<RouteProp>()

  const { isOpen, closeModal } = useModalContext()

  const [stage, setStage] = useState<Stage>('check_appointment')
  const [loading, setLoading] = useState(false)

  const { getValues } = useFormContext<BookingFormShape>()

  const uuid = useGetUuid()
  const [setUserBookings] = useSetBookingsMutation()
  const { data: bookingsData, isLoading: isGetBookingsLoading } = useGetBookingsQuery({ uuid })

  const addUserBooking = async () => {
    if (!isGetBookingsLoading) {
      try {
        const formData = getValues()
        const newBooking: UserBooking = {
          date: formData.day,
          time: formData.hour,
          therapistId: params.therapistId
        }

        let bookings: UserBooking[] = []

        if (bookingsData && 'bookings' in bookingsData) {
          const existingBookings = bookingsData.bookings

          if (Array.isArray(existingBookings)) {
            bookings = [...existingBookings, newBooking]
          } else {
            bookings = [newBooking]
          }
        } else {
          bookings = [newBooking]
        }

        await setUserBookings({ uuid, bookings })
      } catch (error) {
        throw new Error('Error adding booking')
      }
    }
  }

  const userEmail = useGetUserEmail()
  const { data: bookingsTherapistData, isLoading: isGetBookingsTherapistLoading } = useGetTherapistBookingsQuery({
    therapistId: params.therapistId
  })
  const [setTherapistBooking] = useSetTherapistBookingsMutation()
  const dbTherapistId = useGetDbTherapistId(params.therapistId)

  // TODO: check this
  const addTherapistBooking = async () => {
    if (!isGetBookingsTherapistLoading) {
      try {
        const formData = getValues()
        const newBooking: TherapistBooking = {
          date: formData.day,
          time: formData.hour,
          userEmail
        }

        let bookings: TherapistBooking[] = []

        if (bookingsTherapistData && 'bookings' in bookingsTherapistData) {
          const existingBookings = bookingsTherapistData.bookings

          if (Array.isArray(existingBookings)) {
            bookings = [...existingBookings, newBooking]
          } else {
            bookings = [newBooking]
          }
        } else {
          bookings = [newBooking]
        }

        await setTherapistBooking({ therapistId: dbTherapistId, bookings })
      } catch (error) {
        throw new Error('Error adding booking')
      }
    }
  }

  const handleConfirm = () => {
    setLoading(true)
    try {
      addUserBooking()
      addTherapistBooking()
      setStage('confirm_appointment')
    } catch (error) {
      console.error('Error', error)
      showErrorNotification(error as string)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      {loading && <ActivityIndicator />}
      {stage === 'check_appointment' && <CheckAppointment handleConfirm={handleConfirm} />}
      {stage === 'confirm_appointment' && <ConfirmAppointment />}
    </BasicModal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.lg,
    gap: theme.space.xl
  },
  textContainer: {
    alignItems: 'center',
    gap: theme.space.sm2
  }
})

export default BookingModal
