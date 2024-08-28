import { mockTherapists } from 'src/data/mock.data'

const useDoctorDetails = (id: string) => {
  const selectedTherapist = mockTherapists.find((therapist) => therapist.basicInfo.id === id)

  return selectedTherapist
}

export { useDoctorDetails }
