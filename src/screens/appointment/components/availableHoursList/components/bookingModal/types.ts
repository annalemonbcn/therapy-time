interface ICheckAppointmentProps {
  handleConfirm: () => void
}

type Stage = 'check_appointment' | 'confirm_appointment'

export { ICheckAppointmentProps, Stage }

const mapTherapistIds = {
  therapist1: '0',
  therapist2: '1',
  therapist3: '2',
  therapist4: '3',
  therapist5: '4',
  therapist6: '5',
  therapist7: '6',
  therapist8: '7'
}

export { mapTherapistIds }
