import { useState } from 'react'
import { StyledButton, StyledInput, StyledInputWrapper } from './styles'

interface IInputProps {
  value: string
  placeholder?: string
  triggerAction?: any
}

const CustomInput = ({ value, placeholder, triggerAction }: IInputProps) => {
  const [text, setText] = useState(value)

  return (
    <StyledInputWrapper>
      <StyledInput placeholder={placeholder} onChangeText={(newText) => setText(newText)} defaultValue={text} />
      {triggerAction && <StyledButton onPress={() => triggerAction(text)}>Send</StyledButton>}
    </StyledInputWrapper>
  )
}

export default CustomInput
