import { View, StyleSheet, ScrollView } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import CalendarWrapper from './components/calendarWrapper'
import SelectHours from './components/selectHours'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { AppointmentProps, BookingFormShape } from './types'
import Button from 'src/components/custom/customButton'
import Toast from 'react-native-root-toast'
import BookingModal from './components/availableHoursList/components/bookingModal'
import { useEffect, useState } from 'react'
import { useDefaultDay } from './hooks'
import { checkData } from './utils'

const Appointment = () => {
  const defaultDay = useDefaultDay()

  const [modalVisible, setModalVisible] = useState(false)

  const methods = useForm<BookingFormShape>({
    defaultValues: {
      day: defaultDay,
      hour: ''
    }
  })
  const { handleSubmit } = methods

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
