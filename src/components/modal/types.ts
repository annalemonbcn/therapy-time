import { PropsWithChildren } from 'react'

interface IBasicModalProps extends PropsWithChildren {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  showCloseButton?: boolean
}

interface IHeaderProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export { IBasicModalProps, IHeaderProps }
