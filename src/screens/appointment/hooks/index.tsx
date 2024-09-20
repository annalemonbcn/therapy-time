import { useRoute } from '@react-navigation/native'
import { RouteProp } from '../types'
import { getTherapistSessionInfo } from 'src/utils/doctors'
import { setDefaultDay } from 'src/utils/time'

const useDefaultDay = () => {
  const { params } = useRoute<RouteProp>()

  const sessionInfo = getTherapistSessionInfo(params.therapistId)
  if (!sessionInfo) return
  
  const {
    workingSchedule: { workingDays }
  } = sessionInfo

  return setDefaultDay(workingDays)
}

export { useDefaultDay }
