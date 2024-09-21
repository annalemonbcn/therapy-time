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
type Icon = 'search' | 'email' | 'password' | 'user'

interface ICustomTextInputProps {
  fieldName: string
  placeholderText?: string
  isRequired?: boolean
  isSecured?: boolean
  type: IconType
  icon?: Icon
  sendButton?: {
    isInside: boolean
    triggerAction: any
    isDisabled: boolean
  }
  canWrite?: boolean
}

export { ICustomTextInputProps, IconType, Icon }
