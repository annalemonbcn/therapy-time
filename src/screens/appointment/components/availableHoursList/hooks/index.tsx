import { useRoute } from '@react-navigation/native'
import { useFormContext } from 'react-hook-form'
import Text from 'src/components/custom/customText'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { getTherapistSessionInfo } from 'src/utils/doctors'
import { generateHours } from 'src/utils/time'

const useAvailableHoursList = () => {
  const { params } = useRoute<RouteProp>()

  const sessionInfo = getTherapistSessionInfo(params.therapistId)
  if (!sessionInfo) return

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
