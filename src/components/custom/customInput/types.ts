interface ICustomInputProps {
  defaultValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
  sendButton?: {
    isInside: boolean
    triggerAction: any
  }
}

interface IStyledButtonProps {
  isInside: boolean
}

export { ICustomInputProps, IStyledButtonProps }
