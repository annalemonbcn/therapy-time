import { useSelector } from 'react-redux'
import { therapistsApi } from 'src/services/therapists'
const extractNumber = (str: string) => {
  const match = str.match(/\d+$/)
  if (!match) return
  return parseInt(match[0]) - 1
}

const useGetDbTherapistId = (localTherapistId: string) => {
  const therapistsData = useSelector(therapistsApi.endpoints.getTherapists.select())
  const therapistsIdsMap = new Map()
  therapistsData.data?.map((therapist) =>
    therapistsIdsMap.set(therapist.basicInfo.id, extractNumber(therapist.basicInfo.id)?.toString())
  )

  return therapistsIdsMap.get(localTherapistId)
}

export { useGetDbTherapistId }
