import { useState } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { useModalContext } from 'src/context/ModalProvider'
import { CancelAppointmentModalStage } from './types'
import BasicModal from 'src/components/modal'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Button from 'src/components/custom/customButton'
import { UserBooking } from 'src/data/types'
import { getTherapistName } from 'src/utils/doctors'

const QuestionCancel = ({ handleConfirm, appointment }: { handleConfirm: () => void; appointment: UserBooking }) => {
  const { closeModal } = useModalContext()

  const doctorName = <Text fontWeight="semi-bold">{getTherapistName(appointment.therapistId)}</Text>

  return (
    <>
      <Image source={require('assets/check_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center">
            You are about to cancel the appointment with {doctorName} for the indicated day and time:
          </Text>
          <Text color="b500" textAlign="center" fontWeight="semi-bold">
            {appointment.date} {appointment.time}
          </Text>
        </View>
        <HorizontalContainer horizontalCenter="center">
          <Button onPress={() => closeModal()}>Back</Button>
          <Button primary onPress={() => handleConfirm()}>
            Confirm
          </Button>
        </HorizontalContainer>
      </View>
    </>
  )
}

const ConfirmCancel = () => {
  const { closeModal } = useModalContext()
  return (
    <>
      <Image source={require('assets/confirm_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center" size="s4" fontWeight="semi-bold">
            Appointment canceled
          </Text>
          <Text color="b500" size="s2" textAlign='center'>
            You have successfully cancelled your appointment.
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

const CancelAppointmentModal = ({ appointment }: { appointment: UserBooking | undefined }) => {
  console.log('appointment :>> ', appointment)
  const { isOpen, closeModal } = useModalContext()

  const [stage, setStage] = useState<CancelAppointmentModalStage>('question')

  const handleConfirm = () => {
    console.log('handleconfirm')
    setStage('confirm')
  }

  if (!appointment) return

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
      {/* {loading && <ActivityIndicator />} */}
      {stage === 'question' && <QuestionCancel handleConfirm={handleConfirm} appointment={appointment} />}
      {stage === 'confirm' && <ConfirmCancel />}
    </BasicModal>
  )
}

export default CancelAppointmentModal

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
