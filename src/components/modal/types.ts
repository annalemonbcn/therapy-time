import { PropsWithChildren } from 'react'
import { BorderRadius } from 'types'

interface IBasicModalProps extends PropsWithChildren {
  isModalOpen: boolean
  closeModal: () => void
  showCloseButton?: boolean
  borderRadius?: BorderRadius
  alignContent?: 'center' | 'flex-start'
  animationType?: 'fade' | 'slide' | 'none'
}

interface IHeaderProps {
  closeModal: () => void
}

export { IBasicModalProps, IHeaderProps }
