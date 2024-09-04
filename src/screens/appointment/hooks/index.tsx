import { useRoute } from '@react-navigation/native'
import { RouteProp } from '../types'
import { getDoctorSessionInfo } from 'src/utils/doctors'
import { setDefaultDay } from 'src/utils/time'

const useDefaultDay = () => {
  const { params } = useRoute<RouteProp>()

  const sessionInfo = getDoctorSessionInfo(params.therapistId)
  const {
    workingSchedule: { workingDays }
  } = sessionInfo

  return setDefaultDay(workingDays)
}

export { useDefaultDay }
