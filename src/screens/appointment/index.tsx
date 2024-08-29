import { View, StyleSheet } from 'react-native'
import PageWrapper from 'src/components/custom/pageWrapper'
import { theme } from 'theme'
import CalendarWrapper from './components/calendarWrapper'
import SelectHours from './components/selectHours'
import { FormProvider, useForm } from 'react-hook-form'
import { BookingFormShape } from './types'
import Button from 'src/components/custom/customButton'
import { TODAY } from 'src/components/custom/calendar/hooks'

const Appointment = () => {
  const methods = useForm<BookingFormShape>({
    defaultValues: {
      day: TODAY
    }
  })

  return (
    <PageWrapper>
      <View style={styles.pageContainer}>
        <FormProvider {...methods}>
          <CalendarWrapper />
          <SelectHours />
          <View style={styles.buttonContainer}>
            <Button primary onPress={() => console.log('confirm button pressed')} isDisabled>
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
