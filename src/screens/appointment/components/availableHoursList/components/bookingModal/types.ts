interface IBookingModalProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface ICheckAppointmentProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  handleConfirm: () => void
}

interface IConfirmAppointmentProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type Stage = 'check_appointment' | 'confirm_appointment'

export { IBookingModalProps, ICheckAppointmentProps, IConfirmAppointmentProps, Stage }
