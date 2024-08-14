import { useState } from 'react'
import { StyledButton, StyledInput, StyledInputWrapper } from './styles'
import { ICustomInputProps } from './types'

const CustomInput = ({ value, placeholder, triggerAction }: ICustomInputProps) => {
  const [text, setText] = useState(value)

  return (
    <StyledInputWrapper>
      <StyledInput placeholder={placeholder} onChangeText={(newText) => setText(newText)} defaultValue={text} />
      {triggerAction && <StyledButton onPress={() => triggerAction(text)}>Send</StyledButton>}
    </StyledInputWrapper>
  )
}

export default CustomInput
