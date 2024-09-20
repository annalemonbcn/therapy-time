import { useSelector } from 'react-redux'
import { Therapist } from 'src/data/types'
import { therapistsApi } from 'src/services/therapists'
import { RootState } from 'src/store'

interface ICheckAppointmentProps {
  handleConfirm: () => void
}

type Stage = 'check_appointment' | 'confirm_appointment'

export { ICheckAppointmentProps, Stage }
