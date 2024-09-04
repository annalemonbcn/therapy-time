import Text from 'src/components/custom/customText'
import CustomCalendar from 'src/components/custom/calendar'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { RouteProp } from '../../types'
import { getDoctorDetails } from 'src/utils/doctors'
import { Therapist } from 'src/data/types'

const CalendarWrapper = () => {
  const { params } = useRoute<RouteProp>()

  const therapist = getDoctorDetails(params.therapistId) as Therapist
  const {
    sessionInfo: {
      workingSchedule: { workingDays }
    }
  } = therapist

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
