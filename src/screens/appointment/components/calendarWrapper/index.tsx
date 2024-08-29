import Text from 'src/components/custom/customText'
import CustomCalendar from 'src/components/custom/calendar'
import { View } from 'react-native'

const CalendarWrapper = () => (
  <>
    <Text size="s4" fontWeight="semi-bold">
      Select Date
    </Text>
    <CustomCalendar saturdaysDisabled={false} />
  </>
)

export default CalendarWrapper
