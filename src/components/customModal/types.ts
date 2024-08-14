import { PropsWithChildren } from 'react'
import { Therapist } from 'src/data/types'

interface IBasicModalProps extends PropsWithChildren {
  isOpen: boolean
  closeModal: any // -> TODO: ?
}

export { IBasicModalProps }
