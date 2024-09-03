import { View, StyleSheet } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import CalendarWrapper from './components/calendarWrapper'
import SelectHours from './components/selectHours'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { AppointmentProps, BookingFormShape } from './types'
import Button from 'src/components/custom/customButton'
import { TODAY, useAvailableDays } from 'src/components/custom/calendar/hooks'
import Toast from 'react-native-root-toast'
import BookingModal from './components/availableHoursList/components/bookingModal'
import { useState } from 'react'

const Appointment = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const methods = useForm<BookingFormShape>({
    defaultValues: {
      day: TODAY,
      hour: ''
    }
  })
  const { handleSubmit } = methods

  const checkData = (data: BookingFormShape) => {
    const { day, hour } = data

    if (day === '' || hour === '') {
      Toast.show('It is required to select a date and time', {
        position: -200,
        backgroundColor: theme.colors.toastRed,
        textColor: theme.colors.b0,
        textStyle: { fontWeight: '500' },
        opacity: 1
      })
      return false
    }

    return true
  }

  const onSubmit: SubmitHandler<BookingFormShape> = (data) => {
    const isValid = checkData(data)

    if (!isValid) return

    setModalVisible(true)

    // TODO: if ok:
    // 1. open modal
    // 2. register date at:
    //   - user
    //   - therapist
  }

  // TODO: fix this disabled button
  const isDisabled = false

  return (
    <PageWrapper>
      <FormProvider {...methods}>
        <View style={styles.pageContainer}>
          <CalendarWrapper />
          <SelectHours />
          <View style={styles.buttonContainer}>
            <Button primary onPress={handleSubmit(onSubmit)} disabled={isDisabled}>
              Confirm
            </Button>
          </View>
        </View>
        {modalVisible && <BookingModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
      </FormProvider>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.md
  },
  buttonContainer: {
    marginVertical: theme.space.lg
  }
})

export default Appointment
