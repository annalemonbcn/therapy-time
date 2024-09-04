import { useState } from 'react'
import BasicModal from 'src/components/modal'
import Text from 'src/components/custom/customText'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { useFormContext } from 'react-hook-form'
import { Image, StyleSheet, View } from 'react-native'
import { theme } from 'theme'
import Button from 'src/components/custom/customButton'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { ICheckAppointmentProps, Stage } from './types'
import { useRoute } from '@react-navigation/native'
import { useModalContext } from 'src/context/ModalProvider'

const CheckAppointment = ({ handleConfirm }: ICheckAppointmentProps) => {
  const { getValues } = useFormContext<BookingFormShape>()
  const { closeModal } = useModalContext()

  return (
    <>
      <Image source={require('assets/check_booking.png')} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text textAlign="center">You are about to make a reservation for the indicated day and time:</Text>
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
            Your appointment with {params?.therapistId} is confirmed for June 30, 2023, at 10:00 AM.
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
  const { isOpen, closeModal } = useModalContext()

  const [stage, setStage] = useState<Stage>('check_appointment')
  const { getValues } = useFormContext<BookingFormShape>()

  const handleConfirm = () => {
    const data = getValues()
    console.log('data', data)

    // TODO: set appointment into doctor agenda and into patient agenda
    // if ok, change view

    setStage('confirm_appointment')
  }

  return (
    <BasicModal isModalOpen={isOpen} closeModal={closeModal} showCloseButton={false}>
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
