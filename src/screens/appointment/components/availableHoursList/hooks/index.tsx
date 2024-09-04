import { useRoute } from '@react-navigation/native'
import { useFormContext } from 'react-hook-form'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { getDoctorSessionInfo } from 'src/utils/doctors'
import { generateHours } from 'src/utils/time'

const useAvailableHoursList = () => {
  const { params } = useRoute<RouteProp>()

  const sessionInfo = getDoctorSessionInfo(params.therapistId)
  const {
    workingSchedule: { startHour, finishHour }
  } = sessionInfo

  //TODO: get the excluded hours and pass it to generateHours -> excluded hours will be booked hours
  const excludedHours: string[] = []

  const { getValues } = useFormContext<BookingFormShape>()
  const selectedDay = getValues('day')

  return generateHours({ startHour, finishHour, selectedDay, excludedHours })
}

export { useAvailableHoursList }
