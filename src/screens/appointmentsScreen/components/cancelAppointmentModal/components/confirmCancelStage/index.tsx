import { theme } from 'theme'
import { Image, StyleSheet, View } from 'react-native'
import { useModalContext } from 'src/context/ModalProvider'
import Text from 'src/components/custom/customText'
import Button from 'src/components/custom/customButton'

const ConfirmCancelStage = () => {
  const { closeModal } = useModalContext()

  return (
    <>
      <Image source={require('assets/confirm_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center" size="s4" fontWeight="semi-bold">
            Appointment canceled
          </Text>
          <Text color="b500" size="s2" textAlign="center">
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

export default ConfirmCancelStage

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
