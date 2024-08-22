import { mockTherapists } from 'src/data/mock.data'

const useDoctorDetails = (id: string) => {
  // FLOW
  // 1. Get therapistId from params --> recieved by params
  // 2. Fetch therapist info
  // 3. Return therapist

  const selectedTherapist = mockTherapists.find((therapist) => therapist.basicInfo.id === id) // --> TODO: mock behaviour

  return selectedTherapist
}

export { useDoctorDetails }
