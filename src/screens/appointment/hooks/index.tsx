import { useRoute } from '@react-navigation/native'
import { RouteProp } from '../types'
import { getDoctorDetails } from 'src/utils/doctors'
import { Therapist } from 'src/data/types'
import { setDefaultDay } from 'src/utils/time'

const useDefaultDay = () => {
  const { params } = useRoute<RouteProp>()

  const therapist = getDoctorDetails(params.therapistId) as Therapist
  const {
    sessionInfo: {
      workingSchedule: { workingDays }
    }
  } = therapist

  return setDefaultDay(workingDays)
}

export { useDefaultDay }
