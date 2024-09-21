import { useState } from 'react'
import BasicModal from 'src/components/modal'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { useFormContext } from 'react-hook-form'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { Stage } from './types'
import { useRoute } from '@react-navigation/native'
import { useModalContext } from 'src/context/ModalProvider'
import { useSetBookingMutation } from 'src/services/user'
import { useSetTherapistBookingMutation } from 'src/services/therapists'
import { Booking, TherapistBooking, UserBooking } from 'src/data/types'
import { showErrorNotification } from 'src/utils/notifications'
import { useGetDbTherapistId } from './hooks'
import { useGetUserEmail, useGetUuid } from 'src/utils/utils'
import CheckAppointmentStage from './components/checkAppointmentStage'
import ConfirmAppointmentStage from './components/confirmAppointmentStage'

const BookingModal = () => {
  const [stage, setStage] = useState<Stage>('check_appointment')
  const [loading, setLoading] = useState(false)

  const { params } = useRoute<RouteProp>()

  const { isOpen, closeModal } = useModalContext()

  const { getValues } = useFormContext<BookingFormShape>()
  const { day, hour } = getValues()

  const uuid = useGetUuid()
  const userEmail = useGetUserEmail()
  const [setTherapistBooking] = useSetTherapistBookingMutation()
  const [setUserBooking] = useSetBookingMutation()
  const dbTherapistId = useGetDbTherapistId(params.therapistId)

  const bookingId = Date.now().toString()
  const booking: Booking = {
    bookingId: Date.now().toString(),
    date: day,
    time: hour,
    status: 'active'
  }

  const addUserBooking = () => {
    const userBooking: UserBooking = {
      ...booking,
      therapistId: params.therapistId
    }
    return setUserBooking({ uuid, bookingId: booking.bookingId, booking: userBooking })
  }

  const addTherapistBooking = () => {
    const therapistBooking: TherapistBooking = {
      ...booking,
      userEmail
    }

    return setTherapistBooking({
      bookingId: booking.bookingId,
      therapistId: dbTherapistId,
      booking: therapistBooking
    })
  }

  const handleConfirm = async () => {
    setLoading(true)
    try {
      await Promise.all([addUserBooking(), addTherapistBooking()])
      setStage('confirm_appointment')
    } catch (error) {
      console.error('Error', error)
      showErrorNotification('Error while booking the appointment.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <ActivityIndicator />

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      {stage === 'check_appointment' && <CheckAppointmentStage handleConfirm={handleConfirm} />}
      {stage === 'confirm_appointment' && <ConfirmAppointmentStage />}
    </BasicModal>
  )
}

export default BookingModal
