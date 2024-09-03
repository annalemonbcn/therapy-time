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

  const excludedHours = ['14:30', '15:30', '16:30']

  return generateHours({ startHour, finishHour, excludedHours })
}

export { useAvailableHoursList }
