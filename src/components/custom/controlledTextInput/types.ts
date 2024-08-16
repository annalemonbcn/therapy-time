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

type FormEntries = 'location'

interface ICustomTextInputProps {
  fieldName: FormEntries
  placeholderText?: string
  isRequired?: boolean
  isSecured?: boolean
  sendButton?: {
    isInside: boolean
    triggerAction: any
  }
}

export { ICustomTextInputProps }
