import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { IconType } from '../custom/controlledTextInput/types'
import { SearchFormModel } from 'src/screens/home/components/search/types'

interface ISearchInputProps {
  fieldName: string
  placeholderText?: string
  type: IconType
  triggerSend: any
}

export { ISearchInputProps }
