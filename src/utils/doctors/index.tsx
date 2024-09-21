import { useSelector } from 'react-redux'
import { TagsEnum, Therapist } from 'src/data/types'
import { therapistsApi } from 'src/services/therapists'

const filterTherapistsByCategory = (therapists: Therapist[], category: TagsEnum) =>
  therapists.filter((therapist) => therapist.sessionInfo.tags.includes(category))

const filterTherapistsByName = (therapists: Therapist[], query: string) =>
  therapists.filter((therapist) => therapist.basicInfo.name.toLowerCase().includes(query.toLowerCase()))

export { filterTherapistsByCategory, filterTherapistsByName }

const getTherapistById = (therapistId: string) => {
  const therapist = useSelector(therapistsApi.endpoints.getTherapistById.select(therapistId))
  if (!therapist || !therapist.data) return
  return therapist.data[0]
}

const getTherapistName = (therapistId: string) => {
  const therapist = getTherapistById(therapistId)
  if (!therapist) return
  return therapist.basicInfo.name
}

const getTherapistSessionInfo = (therapistId: string) => {
  const therapist = getTherapistById(therapistId)
  if (!therapist) return
  return therapist.sessionInfo
}

export { getTherapistById, getTherapistName, getTherapistSessionInfo }
