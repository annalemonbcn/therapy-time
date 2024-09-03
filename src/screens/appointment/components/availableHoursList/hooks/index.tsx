import { useRoute } from '@react-navigation/native'
import { useFormContext } from 'react-hook-form'
import { Therapist } from 'src/data/types'
import { BookingFormShape, RouteProp } from 'src/screens/appointment/types'
import { getDoctorDetails } from 'src/utils/doctors'
import { generateHours } from 'src/utils/time'

const useAvailableHoursList = () => {
  const { params } = useRoute<RouteProp>()

  const therapist = getDoctorDetails(params.therapistId) as Therapist
  const {
    sessionInfo: {
      workingSchedule: { startHour, finishHour }
    }
  } = therapist

  //TODO: get the excluded hours and pass it to generateHours
  const excludedHours: string[] = []

  const { getValues } = useFormContext<BookingFormShape>()
  const selectedDay = getValues('day')

  return generateHours({ startHour, finishHour, selectedDay, excludedHours })
}

export { useAvailableHoursList }
