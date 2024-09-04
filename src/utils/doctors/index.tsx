import { mockTherapists } from 'src/data/mock.data'
import { SessionInfo } from 'src/data/types'

const getDoctorDetails = (id: string) => mockTherapists.find((therapist) => therapist.basicInfo.id === id)

const getDoctorNameById = (id: string) => {
  const selectedDoctor = getDoctorDetails(id)
  return selectedDoctor?.basicInfo.name
}

const getDoctorSessionInfo = (id: string) => {
  const selectedDoctor = getDoctorDetails(id)
  return selectedDoctor?.sessionInfo as SessionInfo
}

export { getDoctorDetails, getDoctorNameById, getDoctorSessionInfo }
