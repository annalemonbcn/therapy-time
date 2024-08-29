import { ICustomCalendarProps } from './types'
import { Calendar, DateData } from 'react-native-calendars'
import { TODAY, useGetMarkedDays } from './hooks'
import { theme } from 'theme'
import { StyleSheet, View } from 'react-native'

const CustomCalendar = ({ saturdaysDisabled = false }: ICustomCalendarProps) => {
  const { markedDates, setDate } = useGetMarkedDays({ saturdaysDisabled })

  const headerProps = {
    arrowColor: theme.colors.main,
    monthTextColor: theme.colors.b900,
    textMonthFontWeight: 'bold',
    textMonthFontSize: theme.typography.fontSize.s3
  }

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day: DateData) => {
          setDate(day.dateString)
        }}
        markedDates={markedDates}
        firstDay={1}
        minDate={TODAY}
        disableAllTouchEventsForDisabledDays={true}
        hideDayNames={true}
        style={[theme.borders.shadow.basicShadow, styles.calendar]}
        theme={{
          calendarBackground: theme.colors.b50,
          ...headerProps
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.md
  },
  calendar: {
    borderRadius: theme.borders.radius.md,
    paddingVertical: theme.space.md,
    paddingHorizontal: theme.space.lg
  }
})

export default CustomCalendar
