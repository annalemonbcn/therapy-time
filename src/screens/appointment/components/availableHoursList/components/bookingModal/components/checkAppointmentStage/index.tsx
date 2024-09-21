import { Image, View, StyleSheet } from 'react-native'
import { useFormContext } from 'react-hook-form'
import { ICheckAppointmentProps } from './types'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { useRoute } from '@react-navigation/native'
import { useModalContext } from 'src/context/ModalProvider'
import Text from 'src/components/custom/customText'
import { getTherapistName } from 'src/utils/doctors'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Button from 'src/components/custom/customButton'
import { theme } from 'theme'

const CheckAppointmentStage = ({ handleConfirm }: ICheckAppointmentProps) => {
  const { getValues } = useFormContext<BookingFormShape>()
  const { params } = useRoute<RouteProp>()
  const { closeModal } = useModalContext()

  const doctorName = <Text fontWeight="semi-bold">{getTherapistName(params?.therapistId)}</Text>

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

export default CheckAppointmentStage

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
