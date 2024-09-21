import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useModalContext } from 'src/context/ModalProvider'
import BasicModal from 'src/components/modal'
import { UserBooking } from 'src/data/types'
import CheckCancelStage from './components/checkCancelStage'
import { useCancelBookingMutation } from 'src/services/user'
import { useGetUuid } from 'src/utils/utils'
import { showErrorNotification, showSuccessNotification } from 'src/utils/notifications'
import { useCancelTherapistBookingMutation } from 'src/services/therapists'
import { useGetDbTherapistId } from 'src/screens/appointment/components/availableHoursList/components/bookingModal/hooks'

const CancelAppointmentModal = ({
  appointment,
  setSelectedAppointment
}: {
  appointment: UserBooking | undefined
  setSelectedAppointment: React.Dispatch<React.SetStateAction<UserBooking | undefined>>
}) => {
  const [loading, setLoading] = useState(false)

  const { isOpen, closeModal } = useModalContext()

  if (!appointment || appointment.status === 'canceled') return

  const uuid = useGetUuid()
  const [cancelBooking] = useCancelBookingMutation()
  const [cancelBookingTherapist] = useCancelTherapistBookingMutation()
  const dbTherapistId = useGetDbTherapistId(appointment.therapistId)

  const cancelUserBooking = () => cancelBooking({ bookingId: appointment.bookingId, status: 'canceled', uuid })

  const cancelTherapistBooking = () =>
    cancelBookingTherapist({
      bookingId: appointment.bookingId,
      status: 'canceled',
      therapistId: dbTherapistId
    })

  const handleConfirm = async () => {
    setLoading(true)
    try {
      await Promise.all([cancelUserBooking(), cancelTherapistBooking()])
      showSuccessNotification('You have successfully cancelled your appointment.')
      closeModal()
    } catch (error) {
      console.error('Error', error)
      showErrorNotification('Error canceling appointment.')
    } finally {
      setLoading(false)
      setSelectedAppointment(undefined)
    }
  }

  if (loading) return <ActivityIndicator />

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      <CheckCancelStage handleConfirm={handleConfirm} appointment={appointment} />
    </BasicModal>
  )
}

export default CancelAppointmentModal
