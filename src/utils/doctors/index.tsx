import { mockTherapists } from 'src/data/mock.data'

const getDoctorDetails = (id: string) => {
  const selectedTherapist = mockTherapists.find((therapist) => therapist.basicInfo.id === id)

  return selectedTherapist
}

export { getDoctorDetails }
