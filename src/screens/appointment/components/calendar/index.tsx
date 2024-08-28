import { ICustomCalendarProps } from './types'
import Text from 'src/components/custom/customText'
import { Calendar, DateData } from 'react-native-calendars'
import { TODAY, useGetMarkedDays } from './hooks'

const CustomCalendar = ({ saturdaysDisabled = false }: ICustomCalendarProps) => {
  const { date, markedDates, setDate } = useGetMarkedDays({ saturdaysDisabled })

  return (
    <>
      <Calendar
        onDayPress={(day: DateData) => {
          setDate(day.dateString)
        }}
        markedDates={markedDates}
        firstDay={1}
        minDate={TODAY}
        disableAllTouchEventsForDisabledDays={true}
        hideDayNames={true}
      />
      <Text>selected: {date}</Text>
    </>
  )
}

export default CustomCalendar
