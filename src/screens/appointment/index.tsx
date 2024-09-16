import { View, StyleSheet, ScrollView } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import CalendarWrapper from './components/calendarWrapper'
import SelectHours from './components/selectHours'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { BookingFormShape } from './types'
import Button from 'src/components/custom/customButton'
import BookingModal from './components/availableHoursList/components/bookingModal'
import { useDefaultDay } from './hooks'
import { checkData } from './utils'
import { ModalProvider, useModalContext } from 'src/context/ModalProvider'
import { Notifier, NotifierComponents } from 'react-native-notifier'

const AppointmentDisplay = () => {
  const defaultDay = useDefaultDay()
  const { isOpen, openModal } = useModalContext()

  const methods = useForm<BookingFormShape>({
    defaultValues: {
      day: defaultDay,
      hour: ''
    }
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<BookingFormShape> = (data) => {
    const isValid = checkData(data)
    if (!isValid) {
      Notifier.showNotification({
        title: 'Error',
        description: 'It is required to select a date and time',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error'
        }
      })
      return
    }

    openModal()

    // TODO: if ok:
    // 1. open modal
    // 2. register date at:
    //   - user
    //   - therapist
  }

  return (
    <PageWrapper>
      <FormProvider {...methods}>
        <ScrollView contentContainerStyle={styles.pageContainer}>
          <CalendarWrapper />
          <SelectHours />
          <View style={styles.buttonContainer}>
            <Button primary onPress={handleSubmit(onSubmit)}>
              Confirm
            </Button>
          </View>
        </ScrollView>
        {isOpen && <BookingModal />}
      </FormProvider>
    </PageWrapper>
  )
}

const Appointment = () => (
  <ModalProvider>
    <AppointmentDisplay />
  </ModalProvider>
)

export default Appointment

const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: theme.space.md
  },
  buttonContainer: {
    marginVertical: theme.space.lg
  }
})
