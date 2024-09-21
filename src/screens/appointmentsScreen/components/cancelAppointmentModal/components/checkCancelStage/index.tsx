import { Image, View, StyleSheet } from 'react-native'
import Button from 'src/components/custom/customButton'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { useModalContext } from 'src/context/ModalProvider'
import { UserBooking } from 'src/data/types'
import { getTherapistName } from 'src/utils/doctors'
import { theme } from 'theme'

const CheckCancelStage = ({ handleConfirm, appointment }: { handleConfirm: () => void; appointment: UserBooking }) => {
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

export default CheckCancelStage

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
