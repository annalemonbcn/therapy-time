import { PropsWithChildren } from 'react'

interface IBasicModalProps extends PropsWithChildren {
  isModalOpen: boolean
  closeModal: () => void
  showCloseButton?: boolean
}

interface IHeaderProps {
  closeModal: () => void
}

export { IBasicModalProps, IHeaderProps }
