import { View, StyleSheet } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import CalendarWrapper from './components/calendarWrapper'
import SelectHours from './components/selectHours'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { BookingFormShape } from './types'
import Button from 'src/components/custom/customButton'
import { TODAY } from 'src/components/custom/calendar/hooks'
import Toast from 'react-native-root-toast'

const Appointment = () => {
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
    }
  }

  const onSubmit: SubmitHandler<BookingFormShape> = (data) => {
    checkData(data)

    console.log('data', data)

    // TODO: if ok, register date at:
    // - user
    // - therapist
  }

  const isDisabled = false

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <FormProvider {...methods}>
          <CalendarWrapper />
          <SelectHours />
          <View style={styles.buttonContainer}>
            <Button primary onPress={handleSubmit(onSubmit)} disabled={isDisabled}>
              Confirm
            </Button>
          </View>
        </FormProvider>
      </View>
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
