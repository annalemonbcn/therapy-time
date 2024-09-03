import { useRoute } from '@react-navigation/native'
import { Therapist } from 'src/data/types'
import { RouteProp } from 'src/screens/appointment/types'
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

  return generateHours({ startHour, finishHour })
}

export { useAvailableHoursList }
