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

interface ICustomTextInputProps {
  fieldName: string
  placeholderText?: string
  isRequired?: boolean
  isSecured?: boolean
  sendButton?: {
    isInside: boolean
    triggerAction: any
  }
}

export { ICustomTextInputProps }
