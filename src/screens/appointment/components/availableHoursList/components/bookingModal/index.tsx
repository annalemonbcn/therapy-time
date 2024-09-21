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
import { TherapistBooking, UserBooking } from 'src/data/types'
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

  const addUserBooking = () => {
    const booking: UserBooking = {
      bookingId: Date.now().toString(),
      date: day,
      time: hour,
      therapistId: params.therapistId,
      status: 'active'
    }
    return setUserBooking({ uuid, bookingId: booking.bookingId, booking })
  }

  const addTherapistBooking = () => {
    const booking: TherapistBooking = {
      bookingId: Date.now().toString(),
      date: day,
      time: hour,
      status: 'active',
      userEmail
    }

    return setTherapistBooking({
      bookingId: booking.bookingId,
      therapistId: dbTherapistId,
      booking
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

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      {loading && <ActivityIndicator />}
      {stage === 'check_appointment' && <CheckAppointmentStage handleConfirm={handleConfirm} />}
      {stage === 'confirm_appointment' && <ConfirmAppointmentStage />}
    </BasicModal>
  )
}

export default BookingModal
