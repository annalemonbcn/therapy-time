import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useModalContext } from 'src/context/ModalProvider'
import { CancelAppointmentModalStage } from './types'
import BasicModal from 'src/components/modal'
import { UserBooking } from 'src/data/types'
import CheckCancelStage from './components/checkCancelStage'
import ConfirmCancelStage from './components/confirmCancelStage'
import { useCancelBookingMutation } from 'src/services/user'
import { useGetUuid } from 'src/utils/utils'
import { showErrorNotification } from 'src/utils/notifications'
import { useCancelTherapistBookingMutation } from 'src/services/therapists'
import { useGetDbTherapistId } from 'src/screens/appointment/components/availableHoursList/components/bookingModal/hooks'

const CancelAppointmentModal = ({ appointment }: { appointment: UserBooking | undefined }) => {
  const [stage, setStage] = useState<CancelAppointmentModalStage>('question')
  const [loading, setLoading] = useState(false)

  const { isOpen, closeModal } = useModalContext()

  if (!appointment) return

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
      setStage('confirm')
    } catch (error) {
      console.error('Error', error)
      showErrorNotification('Error canceling appointment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      {loading && <ActivityIndicator />}
      {!loading && stage === 'question' && <CheckCancelStage handleConfirm={handleConfirm} appointment={appointment} />}
      {!loading && stage === 'confirm' && <ConfirmCancelStage />}
    </BasicModal>
  )
}

export default CancelAppointmentModal
