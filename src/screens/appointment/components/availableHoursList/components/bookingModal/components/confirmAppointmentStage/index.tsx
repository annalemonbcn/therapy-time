import { Image, View, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useFormContext } from 'react-hook-form'
import { useModalContext } from 'src/context/ModalProvider'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import { getTherapistName } from 'src/utils/doctors'
import Button from 'src/components/custom/customButton'

const ConfirmAppointmentStage = () => {
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
            Your appointment with {getTherapistName(params?.therapistId)} is confirmed for {getValues('day')}, at{' '}
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

export default ConfirmAppointmentStage

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
