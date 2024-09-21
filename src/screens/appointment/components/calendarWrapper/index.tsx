import Text from 'src/components/custom/customText'
import CustomCalendar from 'src/components/custom/calendar'
import { useRoute } from '@react-navigation/native'
import { RouteProp } from '../../types'
import { getTherapistSessionInfo } from 'src/utils/doctors'

const CalendarWrapper = () => {
  const { params } = useRoute<RouteProp>()

  const sessionInfo = getTherapistSessionInfo(params.therapistId)
  if (!sessionInfo) return <Text>Something went wrong. Please try again.</Text>

  const {
    workingSchedule: { workingDays }
  } = sessionInfo

  return (
    <>
      <Text size="s4" fontWeight="semi-bold">
        Select Date
      </Text>
      <CustomCalendar workingDays={workingDays} />
    </>
  )
}

export default CalendarWrapper
