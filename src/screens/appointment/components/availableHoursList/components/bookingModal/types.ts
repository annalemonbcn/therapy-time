interface ICheckAppointmentProps {
  handleConfirm: () => void
}

type Stage = 'check_appointment' | 'confirm_appointment'

export { ICheckAppointmentProps, Stage }
