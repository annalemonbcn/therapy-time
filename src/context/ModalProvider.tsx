import { createContext, PropsWithChildren, useContext, useState } from 'react'

const DefaultModalState = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {}
}

const ModalContext = createContext(DefaultModalState)

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => useContext(ModalContext)

export { ModalProvider, useModalContext }
