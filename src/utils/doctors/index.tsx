import { mockTherapists } from 'src/data/mock.data'
import { SessionInfo, TagsEnum, Therapist } from 'src/data/types'

const filterTherapistsByCategory = (therapists: Therapist[], category: TagsEnum) =>
  therapists.filter((therapist) => therapist.sessionInfo.tags.includes(category))

const filterTherapistsByName = (therapists: Therapist[], query: string) =>
  therapists.filter((therapist) => therapist.basicInfo.name.toLowerCase().includes(query.toLowerCase()))

export { filterTherapistsByCategory, filterTherapistsByName }

// TODO: delete
const getDoctorDetails = (id: string) => mockTherapists.find((therapist) => therapist.basicInfo.id === id)

// TODO: delete
const getDoctorNameById = (id: string) => {
  const selectedDoctor = getDoctorDetails(id)
  return selectedDoctor?.basicInfo.name
}

const getDoctorSessionInfo = (id: string) => {
  const selectedDoctor = getDoctorDetails(id)
  return selectedDoctor?.sessionInfo as SessionInfo
}

export { getDoctorDetails, getDoctorNameById, getDoctorSessionInfo }
