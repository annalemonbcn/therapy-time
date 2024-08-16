import { mockTherapists } from 'src/data/mock.data'

const useDoctorDetails = () => {
  // FLOW
  // 1. Get therapistId from params
  // 2. Fetch therapist info
  // 3. Return therapist

  const therapist = mockTherapists[2] // --> TODO: mock behaviour

  return { therapist }
}

export { useDoctorDetails }
