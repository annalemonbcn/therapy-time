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

type IconType = 'primary' | 'secondary'

interface ICustomTextInputProps {
  fieldName: string
  placeholderText?: string
  isRequired?: boolean
  isSecured?: boolean
  type: IconType
  iconType?: 'search'
  sendButton?: {
    isInside: boolean
    triggerAction: any
  }
}

export { ICustomTextInputProps, IconType }
