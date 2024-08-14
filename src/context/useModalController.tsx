import { createContext, PropsWithChildren, useContext, useState } from 'react'

const DefaultStateContext = {
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {}
}

const ModalContext = createContext(DefaultStateContext)

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleClose: () => setIsOpen(false),
        handleOpen: () => setIsOpen(true)
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => useContext(ModalContext)

export { ModalProvider, useModalContext }
