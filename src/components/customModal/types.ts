import { Therapist } from 'src/data/types'

interface IBasicModalProps {
  isOpen: boolean
  closeModal: any // -> TODO: ?
  therapist: Therapist | undefined
}

export { IBasicModalProps }
