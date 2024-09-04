import { mockTherapists } from 'src/data/mock.data'

const getDoctorDetails = (id: string) => mockTherapists.find((therapist) => therapist.basicInfo.id === id)

const getDoctorNameById = (id: string) => {
  const selectedDoctor = getDoctorDetails(id)
  return selectedDoctor?.basicInfo.name
}

export { getDoctorDetails, getDoctorNameById }
